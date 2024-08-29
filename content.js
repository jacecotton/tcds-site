import fs from "fs";
import frontmatter from "front-matter";

const files = fs.readdirSync("./pages/", {recursive: true, withFileTypes: true});

const content = [];

files.filter(file => file.name.includes(".md")).forEach((file) => {
  // Normalize all paths and append file name.
  const path = `${file.path.startsWith("./") ? "" : "./"}${file.path}${file.path.endsWith("/") ? "" : "/"}${file.name}`;

  // Add leading slash, remove file system-only elements, remove ".md" extension
  // from file names.
  const route = `/${path.split("/").filter(e => ![".", "pages"].includes(e)).join("/").replace(".md", "")}`;

  const metadata = frontmatter(fs.readFileSync(path, "utf8")).attributes;

  if(metadata.category) {
    const indexOfCategory = content.findIndex(category => category.title === metadata.category);
    const {category, ...rest} = metadata;

    rest.display_title = rest.display_title || rest.title;
    rest.meta_title = rest.meta_title === null || rest.meta_title === "" ? "" : rest.meta_title || rest.title;
    rest.menu_title = rest.menu_title || rest.title;
    rest.description = rest.description || "Default description";
    rest.route = rest.route || route;
  
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