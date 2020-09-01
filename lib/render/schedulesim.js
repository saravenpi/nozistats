module.exports = function(app, total, hour, day) {



  app.get("/schedulesim", function(req, res) {
    
    console.log('DAILY TASKKKKK');

    hour.findOne({ description: "hoho" }).exec(function(err, woof) {

      wf = woof.stats

      day.findOne({ description: "hihi" }).exec(function(err, doc) {

        dt = doc.stats;

        doc.stats = [dt[1], dt[2], dt[3], dt[4], dt[5], dt[6], wf];
        doc.save();


    });


  });
res.send("yop")
  });



};
