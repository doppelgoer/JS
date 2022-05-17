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

// console.log(6723, test2);

// class Singleton {
//   private static instance: Singleton;

//   /**
//    * The Singleton's constructor should always be private to prevent direct
//    * construction calls with the `new` operator.
//    */
//   data: number;
//   private constructor(data: number) {
//     this.data = data;
//   }
//   /**
//    * The static method that controls the access to the singleton instance.
//    *
//    * This implementation let you subclass the Singleton class while keeping
//    * just one instance of each subclass around.
//    */
//   public static getInstance(test: number): Singleton {
//     if (!Singleton.instance) {
//       Singleton.instance = new Singleton(test);
//     }

//     return Singleton.instance;
//   }

//   /**
//    * Finally, any singleton should define some business logic, which can be
//    * executed on its instance.
//    */
//   public someBusinessLogic() {
//     // ...
//   }
// }
// let singleton1 = Singleton.getInstance(11);
// let singleton2 = Singleton.getInstance(22);
// console.log(11111, singleton1);
// console.log(2222, singleton2);
