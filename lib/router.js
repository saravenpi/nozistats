const express = require("express");
const app = express();
const session = require("express-session");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


var hourSchema = new mongoose.Schema({
  description: {type: String, default: "haha"},
  stats: Number

})

var hour = mongoose.model("hour", hourSchema);







require("./motor")(app, express, session);
require("./render/index")(app);
require("./render/new")(app, hour);
require("./render/stats")(app, hour);


const listener = app.listen(process.env.PORT || 5000)
