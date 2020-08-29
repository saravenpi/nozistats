module.exports = function(app, total, needle) {


  app.get("/new", function(req, res) {


      needle.post('https://discordapp.com/api/webhooks/710617824212549703/TD2aANY0yjxFn0n5qAU0cDPYkwOpMtP3FOwV6Dhgar6dcx8kh8kll7qY_rN32bdjdCK3', {
/*
        "embeds": [
  {
      "title": document.getElementById("username").innerHTML,
     "description": "in " +  Math.round((t1 - t0)) + " ms",
     "color": 4437377
  }
]*/

"content": "hey"
      })

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
