import express from 'express';
let proxyRouter = express.Router();

proxyRouter.get('/api', function (req: any, res: any) {
  res.send({ greeting: 'Hello' });
});

// module.exports = proxyRouter;
export default proxyRouter;
