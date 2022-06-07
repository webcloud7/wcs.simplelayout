const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const package_json = require("./package.json");
const patternslib_config = require("@patternslib/patternslib/webpack/webpack.config");
const mf_config = require("@patternslib/patternslib/webpack/webpack.mf");

module.exports = (env, argv) => {
  let config = {
    mode: env.prod ? "production" : "development",
    devtool: env.prod ? "source-map" : "inline-source-map",
    entry: { 
      "simplelayout.min": path.resolve(__dirname, "./wcs/simplelayout/browser/static/js/src/main.js")
    },
    output: {
      path: path.resolve(__dirname, "./wcs/simplelayout/browser/static/js/dist"),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./wcs/simplelayout/browser/static/js/src")
      }
    },
    plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        filename: "[name].css"
      })
    ],
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: "vue-loader"
        },
        {
          test: /\.png$/,
          use: {
            loader: "url-loader",
            options: { limit: 8192 }
          }
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: { hmr: !env.prod }
            },
            "css-loader"
          ]
        }
      ]
    },
  };

  config.plugins.push(
      mf_config({
          filename: "simplelayout-remote.min.js",
          package_json: package_json,
          remote_entry: config.entry["simplelayout.min"],
      })
  );

  return config;
};
