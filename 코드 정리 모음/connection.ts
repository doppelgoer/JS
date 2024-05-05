/**
 * connection.ts
 * server.ts
 */

// connection.ts 코드
import mysql, { Connection } from "mysql2";
import { dbConfig } from "../config/config.db";
// class DBConnection {
//   connection() {
//     try {
//       // console.log(test);
//       let connection: Connection = mysql.createConnection(dbConfig);
//       console.log("DB connet complete");
//       return connection;
//     } catch (e) {
//       console.log(13213);
//       throw e;
//     }
//   }
// }

// export default DBConnection;

// class Singleton {
//   private static instance: Singleton;

//   public name: string;

//   private constructor(name: string) {
//     this.name = name;
//   }

//   public static getInstance() {
//     if (!Singleton.instance) {
//       Singleton.instance = new Singleton("싱글턴이에요");
//     }
//     return Singleton.instance;
//   }
// }
// let test = Singleton.getInstance();
// console.log(test);

class DBC {
  //디비 연결
  private static DBConnection: DBC;
  private _isConnected: boolean = false;
  public connection() {
    try {
      // console.log(test);
      let connection: Connection = mysql.createConnection(dbConfig);
      this._isConnected = true;
      console.log("DB connet complete");
      return connection;
    } catch (e) {
      // this.connection()
      this._isConnected = false;
      throw e;
    }
  }
  private constructor() {}
  public static get getDBConnection() {
    if (!DBC.DBConnection) {
      DBC.DBConnection = new DBC();
    }
    return DBC.DBConnection;
  }
  public get isConnected() {
    return this._isConnected;
  }
}
export const isConnected: DBC = DBC.getDBConnection;

//server.ts 코드
import { isConnected } from "../DB/connection";
console.log(isConnected);

if (isConnected.isConnected === false) {
  const DBC = isConnected.connection();
  console.log(isConnected);
}
