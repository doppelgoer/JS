import mysql, { Connection } from 'mysql2';
import config from '../config/index';

//패턴 적용 X
// let connection: Connection = mysql.createConnection(config.dbConfig);
// connection.connect();
// export default connection;

/**
 * @param DBC 싱글톤 패턴으로 db커넥션을 한번만 생성.
 */
class DBC {
  private static DBConnection: DBC;
  private _isConnected: boolean = false;
  public connection() {
    try {
      // console.log(test);
      let connection: Connection = mysql.createConnection(config.dbConfig);
      this._isConnected = true;
      console.log('DB connet complete');
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
