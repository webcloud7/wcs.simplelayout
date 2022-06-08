export default {
  install: (app) => {
    // const modules = import.meta.globEager("../components/blockViews/*.vue");
    const modules = require.context("../components/blockViews", true, /\.vue$/);

    const views = {};
    modules.keys().forEach((fileName) => {
      const componentConfig = modules(fileName);

      const name = fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "");

      views[name] = componentConfig.default;
    });
    app.config.globalProperties.$blockviews = views;
    // app.provide("blockviews", options);
  },
};
