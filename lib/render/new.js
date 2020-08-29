module.exports = function(app, total) {


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
};
