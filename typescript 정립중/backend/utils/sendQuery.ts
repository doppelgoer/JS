import DB from '../DB/index';
import Connection from 'mysql2/typings/mysql/lib/Connection';
//데이터베이스 연결
// function connectDB(): Connection | void {
//   let connectDB = DB.isConnected.connection();
//   // console.log(isConnected.isConnected);
//   if (DB.isConnected.isConnected) {
//     connectDB.connect();
//     return connectDB;
//   } else console.error('DB connect err in DBConnection.ts');
// }

const connection = DB.isConnected.connection();
connection.connect();
// let test = 1;
function sendQuery<T>(q: string, stateArr?: T[]) {
  return new Promise(function (resolve, reject) {
    if (connection) {
      connection.execute(q, stateArr, function (err, rows) {
        if (err) {
          console.log(`query error`);
          console.log(`${q}`);
          reject(err);
        }
        // console.log(111111, rows);
        // test++;
        resolve(rows);
      });
    }
  });
}
interface userData {
  day: string;
  accessor: number;
}
// let test3 = 1;
export async function getTodayUserData() {
  let getTodayUserRes = await sendQuery(querys.getTodayUserSql);
  // console.log(getTodayUserRes);
  // console.log(typeof getTodayUserRes);
  // console.log(getTodayUserRes);
  // console.log(test3, test3, test3, test3, test3, test3, test3);

  // test3++;
  return getTodayUserRes;
}

const querys = {
  getTodayUserSql: `SELECT left(regDate, 10) day, COUNT(*) accessor FROM useract GROUP BY left(regDate, 10) 
  HAVING day > (SELECT CURDATE() - INTERVAL 2 DAY FROM DUAL)`,
};
