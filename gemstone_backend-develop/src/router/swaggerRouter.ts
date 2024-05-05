import { ROOT_PATH } from 'src/common';
import path from 'path';
import { koaSwagger } from 'koa2-swagger-ui';
import swaggerJSDoc from 'swagger-jsdoc';
import packageJson from 'package.json';
import Router from '@koa/router';

const spec = swaggerJSDoc({
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: packageJson.name,
      version: packageJson.version,
      description: packageJson.description,
    },
  },
  apis: [path.resolve(ROOT_PATH, './src/router/**/*.ts')],
}) as Record<string, unknown>;

export const swaggerMiddleware = koaSwagger({
  routePrefix: false,
  swaggerOptions: { spec },
}) as any;

const swaggerRouter = new Router();
swaggerRouter.get('/swagger', swaggerMiddleware);

export default swaggerRouter;
