const express = require("express");
const app = express();
const bodyParser = require("body-parser");
let mysql = require("mysql");
const { Singleton } = require("./singleton");
const CarFactory = require("./factory");
let connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "112213",
  database: "poko", // 데이터베이스 고르기
  port: "3306",
});
// console.log(111);
const test = Singleton.getInstance();
test.test = 11;
const test1 = Singleton.getInstance();
console.log(test);
console.log(test1);
console.log(test.databaseConnection);
console.log(test1.databaseConnection);
console.log(Singleton);

/////////////////////////////
//factory 패턴
const Audi = CarFactory.create("Audi");
const BMW = CarFactory.create("BMW");
const Mercedes = CarFactory.create("Mercedes");
const Audi2 = CarFactory.create("Audi");
Audi.showInfo();
Audi2.showInfo();
BMW.showInfo();
Mercedes.showInfo();
console.log(Audi);

// function test(title) {
//   return {
//     reTest1: function () {
//       return title;
//     },
//     reTest2: function (_title) {
//       title = _title;
//     },
//   };
// }
// let test123 = test("123");
// console.log(test123.reTest1());
// test123.reTest2("124235");
// console.log(test123.reTest1());
