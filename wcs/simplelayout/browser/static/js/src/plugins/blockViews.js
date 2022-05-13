export default {
  install: (app) => {
    const modules = import.meta.globEager("../components/blockViews/*.vue");
    const views = {};
    Object.entries(modules).forEach(([path, m]) => {
      const name = path.split("/").pop().replace(/\.\w+$/, "");
      views[name] = m.default;
    });
    app.config.globalProperties.$blockviews = views;
    // app.provide("blockviews", options);
  },
};
