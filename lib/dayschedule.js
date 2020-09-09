module.exports = function(cron, total, hour, day, truetotal, truehour, trueday, dayuser) {


cron.schedule('1 0 * * *', () => {
  console.log('DAILY TASKKKKK');


total.findOne({ description: "haha" }).exec(function(err, ttt) {

 totalhour = ttt.views;

  hour.findOne({ description: "hoho" }).exec(function(err, woof) {

    function lastdaycount() {

    var array = woof.stats
    array.push(totalhour)
    var totalday=0;
    for(var i in array) { totalday += array[i]; }
    return totalday


    }
    wf = lastdaycount();

    day.findOne({ description: "hihi" }).exec(function(err, doc) {

      dt = doc.stats;
      doc.stats = [dt[1], dt[2], dt[3], dt[4], dt[5], wf];
      doc.save();


  });


});

});





truetotal.findOne({ description: "huhu" }).exec(function(err, ttt) {

 totalhour = ttt.views;

  truehour.findOne({ description: "hoho" }).exec(function(err, woof) {

    function lastdaycount() {

    var array = woof.stats
    array.push(totalhour)
    var totalday=0;
    for(var i in array) { totalday += array[i]; }
    return totalday


    }
    wf = lastdaycount();

    trueday.findOne({ description: "hyhy" }).exec(function(err, doc) {

      dt = doc.stats;
      doc.stats = [dt[1], dt[2], dt[3], dt[4], dt[5], wf];
      doc.save();
        dayuser.findOne({ description: "hyhy" }).exec(function(err, yay) {
          yay.users = []
           yay.save();
        });

  });


});

});
}, {
   scheduled: true,
   timezone: "Europe/Paris"
 });

};
