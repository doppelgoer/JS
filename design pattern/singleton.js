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

function Singleton1() {
  let instance;
  function DatabaseConnection() {
    // this.databaseConnection = "dummytext";
    return {
      databaseConnection: "dummytext",
    };
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = DatabaseConnection();
      }
      return instance;
    },
  };
}
// module.exports = Singleton1();
module.exports = Singleton;
