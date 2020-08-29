module.exports = function(app, hour) {
  app.get("/stats", function(req, res) {
    hour.find({ description: "haha"}).exec(function(err, doc) {
      req.session.traffic = doc[0].stats

      res.render("stats", {
        data: {
          traffic: req.session.traffic
        }
      });


  });

  });
};
