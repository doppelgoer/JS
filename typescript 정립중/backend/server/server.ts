// const express = require("express");
import express from 'express';
const app = express();
// const api = require("./routes/index");
import proxyRouter from './index';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import '../DB/DBConnection';
// console
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

const port = process.env.PORT || 80;

app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.static(path.join(__dirname, '../build')));
// app.get('/', function (req, res) {
//   // res.send(express.static(path.join(__dirname, "../build/index.html")));
//   res.send('hi');
// });
import router from '../router/index';
app.use('/proxyRouter', proxyRouter);
app.use('', router);

// app.use()
// import { test } from '../middleware/getData';
// app.get('/test', test);
