import { aesDecrypt } from 'src/util/cryptoUtil';

import auth from 'src/config/config.auth';
import data from 'src/config/config.data';
import log from 'src/config/config.log';
import sequelize from 'src/config/config.sequelize';
import server from 'src/config/config.server';

const config = {
  auth,
  data,
  log,
  sequelize,
  server,
};

// Decryption
try {
  const NODE_KEY = process.env.NODE_KEY || '112213';
  config.sequelize.password = aesDecrypt(config.sequelize.password!, NODE_KEY);
} catch (error) {
  console.warn('Cannot decrypt config', error);
}

export default config;
