import express from "express";
import {join, resolve} from "path";
import content from "./content.json" with {type: "json"};

import {TwingEnvironment, TwingLoaderFilesystem} from "twing";
import TwingDrupalFilters from "twing-drupal-filters";

const loader = new TwingLoaderFilesystem("./views");
loader.addPath("./views/templates", "tc");

const twing = new TwingEnvironment(loader);
TwingDrupalFilters(twing);

const app = express();
const port = process.env.PORT || 3003;
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

/** MOCK API */

const data = [
  { title: 'Example title #1', link: '#example-1' },
  { title: 'Example title #2', link: '#example-2' },
  { title: 'Example title #3', link: '#example-3' },
  { title: 'Example title #4', link: '#example-4' },
  { title: 'Example title #5', link: '#example-5' },
  { title: 'Example title #6', link: '#example-6' },
  { title: 'Example title #7', link: '#example-7' },
  { title: 'Example title #8', link: '#example-8' },
  { title: 'Example title #9', link: '#example-9' },
  { title: 'Example title #10', link: '#example-10' },
];

app.get("/path/to/endpoint", (req, res) => {
  const {page} = req.query;

  if(!page) {
    return res.json(data);
  }

  const pageNumber = parseInt(page, 10);

  if(isNaN(pageNumber) || pageNumber < 1) {
    return res.status(400).json({error: "Invalid page parameter (must be positive whole number)"});
  }

  const resultsPerPage = 5;
  const startIndex = (pageNumber - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;

  const paginatedData = data.slice(startIndex, endIndex);
  
  res.json({
    totalResults: data.length,
    currentPage: pageNumber,
    resultsPerPage: resultsPerPage,
    results: paginatedData,
  });
});

/** END MOCK API */

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