const express = require('express');
const app = express();
const api = require('./routes/index');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
// const mysqlData = require(__dirname + '/../config.json').mysql;
//html content gzip으로 인코딩
const compression = require('compression');
app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', api);
let mysql = require('mysql');
const router = require('./routes/index');

const port = process.env.PORT || 81;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.static(path.join(__dirname, '../build')));
app.get('/', function (req, res) {
  res.send(express.static(path.join(__dirname, '../build/index.html')));
});
app.get('/test', function (req, res) {
  setTimeout(() => {
    res.send('1231');
  }, 2000);
  console.log(123);
});
