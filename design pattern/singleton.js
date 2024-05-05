/////////////////////////////
//singleton 패턴
class DatabaseConnection {
  constructor() {
    this.databaseConnection = "dummytext";
  }

  getNewDBConnection() {
    return this.databaseConnection;
  }
}
class Singleton {
  constructor() {
    throw new Error("Use singleton.getInstance()");
  }
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new DatabaseConnection();
    }

    return Singleton.instance;
  }
}

module.exports = { Singleton };
