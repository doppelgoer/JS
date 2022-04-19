// import { connectDB } from '../DB/DBConnection';
import { Request, Response } from 'express';
// function test() {
//   // let test = `SELECT * FROM member`;
//   // let testREs = await query1(test);
//   console.log('이거타냐?');
//   return async function (req: Request, res: Response) {
//     let test = `SELECT * FROM member`;
//     let testRes = await query1(test);
//     return testRes;
//   };
// }
interface userData {
  day: string;
  accessor: number;
}
// let test4 = 0;
import utils from '../utils';
export function getTodayUser(req: Request, res: Response, next: any) {
  // console.log('이거타냐?');
  // test4++;
  // console.log(test4, test4, test4, test4, test4, test4, test4, test4, test4, test4);

  let getTodayUserRes = utils.getTodayUserData();
  console.log(getTodayUserRes);
  console.log(typeof getTodayUserRes);
  // console.log(1111);
  res.send(getTodayUserRes);
  // next();
}
// export async function test1(req: Request, res: Response) {
//   // console.log('이거타냐?');
//   let test = `SELECT id FROM member WHERE mb_id='master1.myro@gmail.com'`;
//   let testRes = await query1(test);
//   // console.log(testRes);
//   // console.log(2222);
//   res.send(testRes);
// }

// export default test;
