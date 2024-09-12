import express from "express";
import {join, resolve} from "path";
import content from "./content.json" assert {type: "json"};

import {TwingEnvironment, TwingLoaderFilesystem} from "twing";
import TwingDrupalFilters from "twing-drupal-filters";

const loader = new TwingLoaderFilesystem("./views");
loader.addPath("./views/templates", "tc");

const twing = new TwingEnvironment(loader);
TwingDrupalFilters(twing);

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

app.use(express.static(join(resolve(), "public")));

content.forEach((category) => {
  category.pages.forEach((page) => {
    app.get(page.route, (req, res) => handler(req, res, category, page));

    if("pages" in page) {
      page.pages.forEach((page) => {
        app.get(page.route, (req, res) => handler(req, res, category, page));
      });
    }
  });
});

app.use((req, res) => {
  handle404(res);
});

function handler(req, res, category, page) {
  const reject = () => {
    res.setHeader("www-authenticate", "Basic");
    res.sendStatus(401);
  };

  const authorization = req.headers.authorization;

  if(!authorization) {
    return reject();
  }

  const [username, password] = Buffer.from(authorization.replace("Basic", ""), "base64").toString().split(":");

  if(!(username === "reviewer" && password === "1919")) {
    return reject();
  }

  twing.render(`pages${page.template ? `/${page.template}` : page.route}.twig`, {
    title: page.title,
    display_title: page.display_title,
    meta_title: page.meta_title,
    menu_title: page.menu_title,
    description: page.description,
    category: category.title,
    route: page.route,
    content: content,
  }).then((output) => {
    res.end(output);
  }).catch((error) => {
    handle404(res);
    console.log(error);
  });
}

function handle404(res) {
  res.status(404);

  twing.render("pages/404.twig", {
    title: "Page not found",
    meta_title: "Page not found",
    display_title: "Page not found",
    description: "Error 404",
    content: content,
  }).then((output) => {
    res.end(output);
  });
}

app.listen(port, console.log(`Server listening on http://${host}:${port}`));