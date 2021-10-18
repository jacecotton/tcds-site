const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

const { TwingEnvironment, TwingLoaderFilesystem } = require("twing");
const TwingDrupalFilters = require("twing-drupal-filters");

const loader = new TwingLoaderFilesystem("./views");
loader.addPath("./views/templates", "tch");
const twing = new TwingEnvironment(loader);

TwingDrupalFilters(twing);

app.use(express.static(path.join(__dirname, "public")));

const content = require("./content")();
require("./src/tcds/scripts/utilities/slugify");

content.forEach((category) => {
  let categoryRoute = category.route || category.title.slugify();

  category.pages.forEach((page) => {
    const route = page.route || `/${categoryRoute}/${page.title.slugify()}`;

    app.get(route, (req, res) => {
      twing.render(`pages/${page.template || route}.twig`, {
        title: page.title,
        display_title: page.display_title !== undefined ? page.display_title : page.title,
        meta_title: page.meta_title !== undefined ? page.meta_title : page.title,
        menu_title: page.menu_title !== undefined ? page.menu_title : page.title,
        description: page.description !== undefined ? page.description : "Default description",
        category: category.title,
        route: route,
        content: content,
      }).then((output) => {
        res.end(output);
      }).catch((error) => {
        handle404(res);
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
    content: content,
  }).then((output) => {
    res.end(output);
  });
}

app.listen(port, () => {
  console.log(`Server listening on http://${host}:${port}`);
});