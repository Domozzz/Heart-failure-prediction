const express = require("express");
const bodyParser = require("body-parser");
const db = require("./util/database");
// var multer = require('multer')().single();

const app = express();

// app.use(multer);
app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
// app.use(bodyParser.json()); // application/json

const carData = require("./routes/heart");

// fix error CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/heart", carData.routes);

app.listen(3001, () => {
  console.log("start Nodejs Port 3001");
});
