import './common';
import Koa from 'koa';
import stoppable from 'stoppable';

import 'src/schema/sequelize';
import config from 'src/config';
import init from 'src/init';
import { createLogger } from 'src/util/logger';
import { applyRoute } from 'src/middleware';

const logger = createLogger(__filename);
const SERVER_STOP_TIMEOUT = config.server.timeout + 2000;

(async () => {
  const app = new Koa();
  app.proxy = true;

  try {
    // TODO 개발모드에서만 실행
    await init();
  } catch (error) {
    logger.error('Failed to execute init()', error);
    process.exit(1);
  }

  applyRoute(app);

  /**
   * Start server with stoppable
   */
  const { host, port } = config.server;
  const server = stoppable(
    app.listen(port, host, () => {
      if (process.send) {
        // PM2 4.1.0 이하의 경우 두 번 호출해야하는 이슈 존재 https://github.com/Unitech/pm2/issues/4271
        process.send('ready');
      }

      const clusterId = process.env.pm_id || 0;
      logger.info(`Cluster ${clusterId} running at ${host}:${port} (${process.env.NODE_ENV ?? 'development'})`);
    }),
    SERVER_STOP_TIMEOUT
  );

  /**
   * If SIGINT detected, stop receiving new connections and wait until ongoing request is finished
   */
  process.on('SIGINT', () => {
    logger.info('SIGINT signal received');
    server.stop((error, isGraceful) => {
      if (error) {
        logger.error('Process terminate error', error);
        process.exit(1);
      } else if (!isGraceful) {
        logger.error('Process terminated forcibly');
        process.exit(1);
      } else {
        logger.info('Process terminated gracefully');
        process.exit(0);
      }
    });
  });
})();
