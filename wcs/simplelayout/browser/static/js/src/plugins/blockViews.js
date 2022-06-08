export default {
  install: (app) => {
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
  },
};
