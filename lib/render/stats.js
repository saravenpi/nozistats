module.exports = function(app, hour) {
  app.get("/stats", function(req, res) {

    hour.find({ description: "hoho"}).exec(function(err, doc) {

      req.session.array = doc[0].stats

      res.render("stats", {
        data: {
          array: req.session.array
        }
      });


  });

  });
};
