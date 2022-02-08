import { join, resolve } from "path";

export default {
  entry: "./src/scripts/index.js",
  output: {
    path: join(resolve(), "dist/scripts"),
    filename: "tcds.js",
  },
};