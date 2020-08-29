module.exports = function(cron, total, hour) {


cron.schedule('* */1 * * *', () => {
  console.log('SCHEDULED TASKKKKK');

  total.findOne({ description: "haha" }).exec(function(err, doc) {
    var vw = doc.views;

    doc.views = 0;
    doc.save();


    hour.findOne({ description: "hoho" }).exec(function(err, doc) {

      var dt = doc[0].stats;

      doc.stats = [dt[1], dt[2], dt[3], dt[4], dt[5], dt[6], dt[7], dt[8], dt[9], dt[10], dt[11], dt[12], dt[13], dt[14], dt[15], dt[16], dt[17], dt[18], dt[19], dt[20], dt[21], dt[22], vw];
      doc.save();



  });


});



}, {
   scheduled: true,
   timezone: "Europe/Paris"
 });


};
