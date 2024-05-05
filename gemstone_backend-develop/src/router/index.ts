import Router from '@koa/router';
import authRouter from 'src/router/authRouter';
import memberRouter from 'src/router/memberRouter';
import sampleRouter from './sampleRouter';
import swaggerRouter from './swaggerRouter';
import uploadRouter from 'src/router/uploadRouter';
import config from 'src/config';

const router = new Router();
router.use(authRouter.routes(), authRouter.allowedMethods());
router.use(memberRouter.routes(), memberRouter.allowedMethods());
router.use(sampleRouter.routes(), sampleRouter.allowedMethods());
if (config.server.swagger) router.use(swaggerRouter.routes(), swaggerRouter.allowedMethods());
router.use(uploadRouter.routes(), uploadRouter.allowedMethods());

export default router;
