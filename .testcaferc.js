const os = require("os");

module.exports = {
  baseUrl: process.env.E2E_HOST || "http://localhost:65035/plone",
};
