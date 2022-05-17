import mysql, { ConnectionOptions } from "mysql2";

export const dbConfig: ConnectionOptions = {
  host: `127.0.0.1`,
  user: `root`,
  password: `112213`,
  database: `poko`,
  port: 3306,
};
