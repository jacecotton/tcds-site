import fs from "fs";
import frontmatter from "front-matter";

const files = fs.readdirSync("./src/pages/", {recursive: true, withFileTypes: true});

const content = [];

function getFilePath(file) {
  // Normalize path segmentation and append file name.
  return `${file.path.startsWith("./") ? "" : "./"}${file.path}${file.path.endsWith("/") ? "" : "/"}${file.name}`;
}

function generateRoute(path) {
  // Add leading slash, remove file system-only elements, remove ".md" extension
  // from file names.
  path = path.replace("/src", "");
  
  return `/${path.split("/").filter(e => ![".", "pages"].includes(e)).join("/").replace(".md", "").replace("/index", "")}`.replace("/index", "/");
}

/**
 * Right now just iterating through pages with and without `parent` key
 * separately, but the differences in logic are minimal and it should all be
 * combined in one loop. Too lazy to do now.
 */

files.filter(file => file.name.includes(".md"))
  .filter((file) => {
    return !("parent" in frontmatter(fs.readFileSync(getFilePath(file), "utf8")).attributes);
  }).forEach((file) => {
    const path = getFilePath(file);
    const route = generateRoute(path);

    const metadata = frontmatter(fs.readFileSync(path, "utf8")).attributes;

    if(metadata.category) {
      const indexOfCategory = content.findIndex(category => category.title === metadata.category);
      const {category, ...rest} = metadata;

      rest.display_title = rest.display_title || rest.title;
      rest.meta_title = rest.meta_title === null || rest.meta_title === "" ? "" : rest.meta_title || rest.title;
      rest.menu_title = rest.menu_title || rest.title;
      rest.description = rest.description || "";
      rest.route = rest.route || route;

      if(file.name === "index.md") {
        rest.template = route + (route.endsWith("/") ? "index" : "/index");
      }
    
      if(indexOfCategory < 0) {
        content.push({
          title: metadata.category,
          pages: [rest],
        });
      } else {
        if(rest.route === `/${metadata.category.toLowerCase()}`) {
          content[indexOfCategory].pages.unshift(rest);
        } else {
          content[indexOfCategory].pages.push(rest);
        }
      }
    }
  });

files.filter(file => file.name.includes(".md"))
  .filter((file) => {
    return ("parent" in frontmatter(fs.readFileSync(getFilePath(file), "utf8")).attributes);
  }).forEach((file) => {
    const path = getFilePath(file);
    const route = generateRoute(path);

    const metadata = frontmatter(fs.readFileSync(path, "utf8")).attributes;

    if(metadata.parent) {
      const indexOfCategory = content.findIndex(category => category.title === metadata.category);

      if(indexOfCategory >= 0) {
        const indexOfParent = content[indexOfCategory].pages.findIndex(page => page.title === metadata.parent);
        const {category, parent, ...rest} = metadata;

        rest.display_title = rest.display_title || rest.title;
        rest.meta_title = rest.meta_title === null || rest.meta_title === "" ? "" : rest.meta_title || rest.title;
        rest.menu_title = rest.menu_title || rest.title;
        rest.description = rest.description || "";
        rest.route = rest.route || route;

        if(file.name === "index.md") {
          rest.template = route + (route.endsWith("/") ? "index" : "/index");
        }

        if(!("pages" in content[indexOfCategory].pages[indexOfParent])) {
          content[indexOfCategory].pages[indexOfParent].pages = [];
        }

        content[indexOfCategory].pages[indexOfParent].pages.push(rest);
      }
    }
  });

const weights = {
  "Introduction": 0,
  "Brand": 1,
  "Layout": 2,
  "Components": 3,
  "Templates": 4,
  "Accessibility": 5,
};

content.sort((a, b) => {
  return a.title in weights && b.title in weights && weights[a.title] < weights[b.title] ? -1 : 1;
});

content.forEach((category) => {
  category.pages.sort((a, b) => {
    return a.title === "Overview" || a.weight < b.weight ? -1 : 1;
  });
});

fs.writeFileSync("./content.json", JSON.stringify(content, null, 2));