module.exports = function(app, hour) {
  app.get("/stats", function(req, res) {

    hour.find({ description: "hoho"}).exec(function(err, woof) {

      req.session.array = woof[0].stats
      total.find({ description: "haha"}).exec(function(err, doc) {

        req.session.traffic = doc[0].views

        res.render("total", {
          data: {
            traffic: req.session.traffic,
            array: req.session.array
          }
        });


    });
    *


  });

  });
};
