const express = require("express");
const app = express();
const session = require("express-session");
const mongoose = require("mongoose");
const cron = require("node-cron");
var request = require("request");
var cors = require('cors');
var bodyParser = require('body-parser');
var rp = require("request-promise");
var Discord = require("discord.js");
var Canvas = require("canvas");
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

var daySchema = new mongoose.Schema({
  description: {type: String, default: "hihi"},
  stats: [Number]

});

var day = mongoose.model("day", daySchema);


//////////////////////

var truetotalSchema = new mongoose.Schema({
  description: {type: String, default: "huhu"},
  views: Number

});

var truetotal = mongoose.model("truetotal", truetotalSchema);



var dayUser = new mongoose.Schema({
  description: {type: String, default: "hehe"},
  users: [String]

});

var dayuser = mongoose.model("dayuser", dayUser);





var truehourSchema = new mongoose.Schema({
  description: {type: String, default: "hoho"},
  stats: [Number]

});

var truehour = mongoose.model("truehour", truehourSchema);



var truedaySchema = new mongoose.Schema({
  description: {type: String, default: "hyhy"},
  stats: [Number]

});

var trueday = mongoose.model("trueday", truedaySchema);





require("./motor")(app, express, session);
require("./render/index")(app);
require("./render/new")(app, total, truetotal, dayuser, request, cors, bodyParser);
require("./render/total")(app, total, truetotal);
require("./render/stats")(app, hour, total, day, truetotal, truehour, trueday);
require("./render/schedulesim")(app, total, hour, day);
require("./dayschedule")(cron, total, hour, day, truetotal, truehour, trueday, dayuser);
require("./hourschedule")(cron, total, hour, truetotal, truehour);
require("./discordbot")(Discord, Canvas);


const listener = app.listen(process.env.PORT || 5000)
