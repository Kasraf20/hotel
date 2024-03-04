const mongoose = require("mongoose");
require('dotenv').config()

// const mongoURL = "mongodb://127.0.0.1:27017/hotel";
const mongoURL = process.env.DB_URL

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("connected to database");
});

db.on("disconnected", () => {
  console.log("disconnected database");
});

db.on("error", () => {
  console.log("error accured.");
});

module.exports = db;
