const express = require("express");
const app = express();
const session = require("express-session");
const mongoose = require("mongoose");
const cron = require("node-cron");
mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


var totalSchema = new mongoose.Schema({
  description: {type: String, default: "haha"},
  total: Number

})

var total = mongoose.model("total", totalSchema);







require("./motor")(app, express, session);
require("./render/index")(app);
require("./render/new")(app, hour);
require("./render/total")(app, hour);


const listener = app.listen(process.env.PORT || 5000)
