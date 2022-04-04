const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/proxyRouter", {
      target: "http://localhost:3000/",
      changeOrigin: true,
    })
  );
};
