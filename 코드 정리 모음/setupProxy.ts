/**
 * setupProxy.ts
 * index.ts
 */

//setupProxy.ts
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/proxyRouter", {
      target: "http://localhost:3000/",
      changeOrigin: true,
    })
  );
};

//index.ts
let express = require("express");
let proxyRouter = express.Router();

proxyRouter.get("/api", function (req: any, res: any) {
  res.send({ greeting: "Hello" });
});

// module.exports = proxyRouter;
export default proxyRouter;
