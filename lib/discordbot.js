module.exports = function(Discord) {
var client = new Discord.Client();
client.login(process.env.DISCORDTOKEN);
client.on("ready", function(){
  console.log("yay");
});
client.on("message", message => {

  if(message.content === "!ping") {
    message.reply("pong!")
  }
})
};
