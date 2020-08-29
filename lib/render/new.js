module.exports = function(app, total, needle, cors, bodyParser) {

app.use(cors())
app.use(bodyParser.json());
/*
  app.get("/new", function(req, res) {

  });*/



  app.post("/new", function(request, response) {




console.log(request.body.username);
console.log(request.body.launchtime);

    needle.post(process.env.DISCORDWEBHOOK, {
      "username": "Noziro Stats",
      "embeds": [{
    "title": request.body.username,
    "description": "in " +  request.body.launchtime + " ms",
    "color": 4437377
  }]
});

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
};
