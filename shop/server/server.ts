// const express = require("express");
import express from "express";
const app = express();
// const api = require("./routes/index");
import proxyRouter from "./index";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const path = require("path");
// const mysqlData = require(__dirname + "/../config.json").mysql;
//html content gzip으로 인코딩
// const compression = require("compression");
// app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/proxyRouter", proxyRouter);

const port = process.env.PORT || 80;

app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.static(path.join(__dirname, "../build")));
app.get("/", function (req, res) {
  console.log(12312312312);
  // res.send(express.static(path.join(__dirname, "../build/index.html")));
  res.send("hi");
});
app.get("/test", function (req, res) {
  console.log(12312312312);
  console.log(555);
  // res.send(express.static(path.join(__dirname, "../build/index.html")));
  res.send("hi");
});

app.get("/test1", function (req, res) {
  console.log(123123);

  console.log(process.env);
  let dbAddress: string;
  let dbPwd: number;
  // if (process.env.NODE_ENV === "dev") {
  //   dbAddress = "127.0.0.1";
  //   dbPwd = 1234;
  // } else if (process.env.NODE_ENV === "pro") {
  //   dbAddress = "192.168.0.1";
  //   dbPwd = 4321;
  // }
});
