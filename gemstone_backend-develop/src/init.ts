import fs from 'fs-extra';

import config from 'src/config';
import sequelize from 'src/util/sequelize';
import { insertInitialMemberData } from 'src/schema/sequelize/MemberModel';

export default async () => {
  // TODO 1번 노드만 실행하도록
  await fs.ensureDir(config.data.path);
  await fs.ensureDir(config.data.profile.path);
  await fs.ensureDir(config.data.temp.path);

  // TODO 별도의 init script로 분리
  await sequelize.sync();
  await insertInitialMemberData();
};
