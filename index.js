import express from "express";
import { join, resolve } from "path";
import { minify } from "html-minifier";
import slugify from "slugify";
import content from "./content.js";

import { TwingEnvironment, TwingLoaderFilesystem } from "twing";
import TwingDrupalFilters from "twing-drupal-filters";

const loader = new TwingLoaderFilesystem("./views");
loader.addPath("./views/templates", "tch");

const twing = new TwingEnvironment(loader);
TwingDrupalFilters(twing);

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

app.use(express.static(join(resolve(), "public")));

content.forEach((category) => {
  let categoryRoute = category.route || slugify(category.title, { lower: true });

  category.pages.forEach((page) => {
    const route = page.route || `/${categoryRoute}/${slugify(page.title, { lower: true })}`;

    app.get(route, (req, res) => {
      twing.render(`pages${page.template ? `/${page.template}` : route}.twig`, {
        title: page.title,
        display_title: page.display_title !== undefined ? page.display_title : page.title,
        meta_title: page.meta_title !== undefined ? page.meta_title : page.title,
        menu_title: page.menu_title !== undefined ? page.menu_title : page.title,
        description: page.description !== undefined ? page.description : "Default description",
        category: category.title,
        route: route,
        content: content,
      }).then((output) => {
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