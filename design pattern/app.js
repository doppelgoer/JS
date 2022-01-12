const express = require("express");
const app = express();
const bodyParser = require("body-parser");
let mysql = require("mysql");
const { Singleton } = require("./singleton");
let connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "112213",
  database: "poko", // 데이터베이스 고르기
  port: "3306",
});
console.log(111);
const test = Singleton.getInstance();
test.test = 11;
const test1 = Singleton.getInstance();
console.log(test);
console.log(test1);
console.log(test.databaseConnection);
console.log(test1.databaseConnection);
console.log(Singleton);
