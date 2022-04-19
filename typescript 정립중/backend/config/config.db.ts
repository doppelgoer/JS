// import { dbConfig } from '../interface/interface';
import { ConnectionOptions } from 'mysql2';

const mysqlConfig: ConnectionOptions = {
  host: '13.124.34.73',
  user: 'root',
  password: '112213',
  database: 'trip',
  port: 3306,
};
// const mysqlConfig: ConnectionOptions = {
//   host: '127.0.0.1',
//   user: 'root',
//   password: '112213',
//   database: 'trip',
//   port: 3306,
// };

export default mysqlConfig;
