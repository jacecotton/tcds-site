import express from "express";
import { join, resolve } from "path";
import { minify } from "html-minifier";
import slugify from "slugify";
import content from "./content.js";
// import nodeInfo from "./package.json" assert { type: "json" };

import { TwingEnvironment, TwingLoaderFilesystem } from "twing";
import TwingDrupalFilters from "twing-drupal-filters";

// Configure template path.
const loader = new TwingLoaderFilesystem("./views");
// Configure custom namespace.
loader.addPath("./views/templates", "tch");
// loader.addPath("./node_modules/@txch/tcds/templates", "tcds");

// Set up Twing environment.
const twing = new TwingEnvironment(loader);
// Add Drupal-like Twig filter support.
TwingDrupalFilters(twing);

// Set up app.
const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

app.use(express.static(join(resolve(), "public")));

function getPageData(category, page) {
  if(category && page) {
    const categoryRoute = category.route || slugify(category.title, { lower: true });
    const pageRoute = page.route || `/${categoryRoute}/${slugify(page.title, { lower: true })}`;
    
    return {
      categoryRoute: categoryRoute,
      pageRoute: pageRoute,
    };
  }
}

// Content from ./content.js. Each object is a category, which contains pages.
content.forEach((category, categoryIndex) => {
  category.pages.forEach((page, pageIndex) => {
    // Set up route and handler for each page.
    app.get(getPageData(category, page)?.pageRoute, (req, res) => {
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

      const indexOfPreviousCategory = categoryIndex === 0 ? undefined : categoryIndex - 1;
      const indexOfNextCategory = categoryIndex === content.length - 1 ? 0 : categoryIndex + 1;

      const categoryOfNextPage = pageIndex !== category.pages.length - 1 ? category : content[indexOfNextCategory];
      const categoryOfPreviousPage = pageIndex > 0 ? category : content[indexOfPreviousCategory];

      const nextPage = pageIndex !== category.pages.length - 1 ? category.pages[pageIndex + 1] : categoryOfNextPage?.pages?.[0];
      const previousPage = pageIndex > 0 ? category.pages[pageIndex - 1] : categoryOfPreviousPage?.pages[categoryOfPreviousPage.pages.length - 1];

      // Render the twig template based on the page route, or custom template
      // path if specified.
      twing.render(`pages${page.template ? `/${page.template}` : getPageData(category, page)?.pageRoute}.twig`, {
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
        route: getPageData(category, page)?.pageRoute,
        content: content,
        next_page: {
          title: nextPage?.title,
          route: getPageData(categoryOfNextPage, nextPage)?.pageRoute,
          category: categoryOfNextPage?.title,
        },
        previous_page: {
          title: previousPage?.title,
          route: getPageData(categoryOfPreviousPage, previousPage)?.pageRoute,
          category: categoryOfPreviousPage?.title,
        },
        // tcds_version: nodeInfo.devDependencies["@txch/tcds"].substring(1),
        tcds_version: "1.0.15",
      }).then((output) => {
        // Minify output.
        output = minify(output, {
          removeComments: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: false,
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