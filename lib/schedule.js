module.exports = function(cron, total) {


cron.schedule('* * * * *', () => {
  console.log('SCHEDULED TASKKKKK');
}, {
   scheduled: true,
   timezone: "Europe/Paris"
 });


};
