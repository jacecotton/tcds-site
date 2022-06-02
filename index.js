import express from "express";
import { join, resolve } from "path";
import { minify } from "html-minifier";
import slugify from "slugify";
import content from "./content.js";

import { TwingEnvironment, TwingLoaderFilesystem } from "twing";
import TwingDrupalFilters from "twing-drupal-filters";

// Configure template path.
const loader = new TwingLoaderFilesystem("./views");
// Configure custom namespace.
loader.addPath("./views/templates", "tch");
loader.addPath("./node_modules/@txch/tcds/assets/templates", "tcds");

// Set up Twing environment.
const twing = new TwingEnvironment(loader);
// Add Drupal-like Twig filter support.
TwingDrupalFilters(twing);

// Set up app.
const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

app.use(express.static(join(resolve(), "public")));

// Content from ./content.js. Each object is a category, which contains pages.
content.forEach((category) => {
  // Construct category route from the one provided, or from the slugified
  // category title.
  let categoryRoute = category.route || slugify(category.title, { lower: true });

  category.pages.forEach((page) => {
    // Construct page route by concatenating category route and slugified page
    // title, unless a fully custom route is provided.
    const route = page.route || `/${categoryRoute}/${slugify(page.title, { lower: true })}`;

    // Set up route and handler for each page.
    app.get(route, (req, res) => {
      // Just some basic dummy auth for demonstration purposes. If at some point
      // we want to seriously lock it down, let's not do this here. 🙂
      const reject = () => {
        res.setHeader("www-authenticate", "Basic");
        res.sendStatus(401);
      };

      const authorization = req.headers.authorization;

      if(!authorization) {
        return reject();
      }

      const [username, password] = Buffer.from(authorization.replace("Basic", ""), "base64").toString().split(":");

      // Again, just dummy info. Obviously not secure.
      if(!(username === "reviewer" && password === "1919")) {
        return reject();
      }

      // Render the twig template based on the page route, or custom template
      // path if specified.
      twing.render(`pages${page.template ? `/${page.template}` : route}.twig`, {
        title: page.title,
        // Display title is for the <h1> displayed on the page. If not specified
        // use generic title.
        display_title: page.display_title !== undefined ? page.display_title : page.title,
        // Meta title is for the <title> tag. If not specified use generic
        // title.
        meta_title: page.meta_title !== undefined ? page.meta_title : page.title,
        // Menu title is for the main nav. If not specified use generic title.
        menu_title: page.menu_title !== undefined ? page.menu_title : page.title,
        // Eventually fill out a default description.
        description: page.description !== undefined ? page.description : "Default description",
        // Pass through some meta info to the template.
        category: category.title,
        route: route,
        content: content,
      }).then((output) => {
        // Minify output.
        output = minify(output, {
          removeComments: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          useShortDoctype: true,
          removeOptionalTags: true,
        });

        res.end(output);
      }).catch((error) => {
        handle404(res);
        console.log(error);
      });
    });
  });
});

app.use((req, res) => {
  handle404(res);
});

function handle404(res) {
  res.status(404);

  twing.render("pages/404.twig", {
    title: "Page Not Found",
    meta_title: "Page Not Found",
    display_title: "Page Not Found",
    content: content,
  }).then((output) => {
    res.end(output);
  });
}

app.listen(port, () => {
  console.log(`Server listening on http://${host}:${port}`);
});