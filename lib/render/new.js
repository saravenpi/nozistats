module.exports = function(app, total, needle, cors, bodyParser) {

app.use(cors())
app.use(bodyParser.json());

  app.get("/new", function(req, res) {
    res.render("new", {
      data: {
        traffic: req.session.traffic
      }
    });
  });



  app.post("/new", function(req, res) {




console.log(req.body.username);
console.log(req.body.launchtime);

    needle.post(process.env.DISCORDWEBHOOK, {
      "username": "Noziro Stats",
      "embeds": [{
    "title": req.body.username,
    "description": "in " +  req.body.launchtime + " ms",
    "color": 4437377
  }]
}).on('done', function(err, resp) {
    console.log(resp);
  })

total.findOne({ description: "haha" }).exec(function(err, doc) {
  doc.views = doc.views + 1;
  doc.save();
console.log("new traffic data")
  res.render("new", {
    data: {
      traffic: req.session.traffic
    }
  });

});


  });
};
