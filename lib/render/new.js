module.exports = function(app, total, needle, cors, bodyParser) {

app.use(cors())
app.use(bodyParser.json());

  app.get("/new", function(req, res) {

    total.findOne({ description: "haha" }).exec(function(err, doc) {
      doc.views = doc.views + 1;
      doc.save();

      res.render("new", {
        data: {
          traffic: req.session.traffic
        }
      });

  });

  });



  app.post("/new", function(req, res) {

    needle.post(process.env.DISCORDWEBHOOK, {
  /*
      "embeds": [
  {
    "title": document.getElementById("username").innerHTML,
   "description": "in " +  Math.round((t1 - t0)) + " ms",
   "color": 4437377
  }
  ]*/

  "content": req.body
    })
  });
};
