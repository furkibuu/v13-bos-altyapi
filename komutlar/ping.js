module.exports = {
  "code": "ping","aliases": [], async run (client,message,args){
   
  message.reply(':ping_pong: Botun Geçikmesi '+client.ws.ping+'ms');

}};
