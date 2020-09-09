module.exports = function(app, total, truetotal) {
  app.get("/total", function(req, res) {

    total.find({ description: "haha"}).exec(function(err, doc) {

      req.session.traffic = doc[0].views




      truetotal.find({ description: "huhu"}).exec(function(err, doc2) {

        req.session.truetraffic = doc2[0].views

        res.render("total", {
          data: {
            traffic: req.session.traffic,
            truetaffic: req.session.truetraffic
          }
        });


    });


  });

  });
};
