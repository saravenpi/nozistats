module.exports = function(cron, total, hour) {


cron.schedule('00 * * * *', () => {
  console.log('HOURLY TASKKKKK');

  total.findOne({ description: "haha" }).exec(function(err, woof) {

    wf = woof.views
    woof.views = 0;
    woof.save();


    hour.findOne({ description: "hoho" }).exec(function(err, doc) {

      dt = doc.stats;

      doc.stats = [dt[1], dt[2], dt[3], dt[4], dt[5], dt[6], dt[7], dt[8], dt[9], dt[10], dt[11], dt[12], dt[13], dt[14], dt[15], dt[16], dt[17], dt[18], dt[19], dt[20], dt[21], dt[22], dt[23], wf];
      doc.save();


  });


});



}, {
   scheduled: true,
   timezone: "Europe/Paris"
 });




 cron.schedule('0 0 * * Monday', () => {
   console.log('DAILY TASKKKKK');


total.findOne({ description: "haha" }).exec(function(err, ttt) {

  totalhour = ttt.views;

   hour.findOne({ description: "hoho" }).exec(function(err, woof) {

     function lastdaycount() {

     var array = [woof.stats, totalhour]
     var total=0;
     for(var i in array) { total += array[i]; }
     return total


     }
     wf = lastdaycount()

     day.findOne({ description: "hihi" }).exec(function(err, doc) {

       dt = doc.stats;
       doc.stats = [dt[1], dt[2], dt[3], dt[4], dt[5], dt[6], wf];
       doc.save();


   });


 });

});

 }, {
    scheduled: true,
    timezone: "Europe/Paris"
  });



};
