import { join, resolve } from "path";

export default {
  entry: "./assets/scripts/index.js",
  output: {
    path: join(resolve(), "public/scripts"),
    filename: "main.js",
  },
};