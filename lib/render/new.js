module.exports = function(app) {


  app.get("/new", function(req, res) {



    hour.findOne({ description: "haha" }).exec(function(err, doc) {
      doc.stats = doc.stats + 1;
      doc.save();
      
      res.render("new", {
        data: {
          traffic: req.session.traffic
        }
      });

  });

  });
};
