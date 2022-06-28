const Discord = require("discord.js");
const client = global.client;

exports.execute = async (message) => {
  
 var JoinChannel = client.channels.cache.get("Ses ID");
 
 const { joinVoiceChannel } = require('@discordjs/voice');

 if(JoinChannel){
const connection = joinVoiceChannel({
	channelId: JoinChannel.id,
	guildId: JoinChannel.guild.id,
	adapterCreator: JoinChannel.guild.voiceAdapterCreator,
});
 } else {
   console.log("Ses kanalına bağlanamadım lütfen doğru ID girdiğinizden emin olun."),
     console.log("events/ready.js 6. sSatırı Doldurmayı Unuttun Galiba Kanka")
 }
    
 };
exports.conf = {
  event: "ready"
};
