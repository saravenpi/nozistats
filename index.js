const express = require("express");
const app = express();

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

app.get("/new", function(req,res) {

  hour.findOne({ description: "haha" }).exec(function(err, doc) {
    doc.stats = doc.stats + 1;
    doc.save();
    res.send("success")

});

});



app.get('/stats', function(req, res){

  hour.find({ description: "haha"}).exec(function(err, doc) {
    res.send(doc)

});

});


const listener = app.listen(3000, () => {
console.log("HERE WE GOOOOOOOOOO")
});
