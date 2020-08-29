const express = require("express");
const app = express();
const session = require("express-session");
const mongoose = require("mongoose");
const cron = require("cron");
var request = require("request");
var cors = require('cors')
var bodyParser = require('body-parser')

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


var totalSchema = new mongoose.Schema({
  description: {type: String, default: "haha"},
  views: Number

});

var total = mongoose.model("total", totalSchema);

var hourSchema = new mongoose.Schema({
  description: {type: String, default: "hoho"},
  stats: [Number]

});

var hour = mongoose.model("hour", hourSchema);




require("./motor")(app, express, session);
require("./render/index")(app);
require("./render/new")(app, total, request, cors, bodyParser);
require("./render/total")(app, total);
require("./render/stats")(app, hour)
require("./schedule")(cron, total, hour)


const listener = app.listen(process.env.PORT || 5000)
