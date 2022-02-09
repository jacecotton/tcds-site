import { join, resolve } from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config = {
  uncompiled_script_entrypoint: "./assets/scripts/index.js",
  uncompiled_style_entrypoint: "./assets/styles/main.scss",
  output: {
    base_path: join(resolve(), "public/"),
    style_bundle: "styles/main.css",
    script_bundle: "scripts/main.js",
  },
};

export default {
  entry: [config.uncompiled_script_entrypoint, config.uncompiled_style_entrypoint],
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { },
          },
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  ["autoprefixer", {
                    grid: "autoplace",
                  }],
                ]
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: ["./tcds/src/styles"],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: config.output.style_bundle,
    }),
  ],
  output: {
    filename: config.output.script_bundle,
    path: config.output.base_path,
  },
};