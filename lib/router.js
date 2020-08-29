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

app.get('/', function(req, res){

  res.sendFile(`${__dirname}/index.html`);

});






require("./motor")(app, express, session);
require("./render/index")(app);
require("./render/new")(app);
require("./render/stats")(app);


const listener = app.listen(process.env.PORT || 5000)
