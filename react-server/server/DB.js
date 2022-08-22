let mysql = require('mysql');

const mysqlData = require(__dirname + '/../config.json').mysql;
let connection = mysql.createConnection({
  host: mysqlData.mysqlId,
  user: 'root',
  password: mysqlData.mysqlPwd,
  database: mysqlData.mysqlDB, // 데이터베이스 고르기
  port: '3306',
});
connection.connect();
const query = function (q) {
  return new Promise((resolve, reject) => {
    connection.query(q, function (err, rows, fields) {
      if (err) {
        console.log(q);
        reject(err);
      }
      resolve(rows);
    });
  });
};
module.exports = { connection, query };
