Discord = require("discord.js");
const client = new Discord.Client();
require('./util/cmdloader.js')(client);//requires the command loader
let token = process.env.token;
let prefix = "!";


client.on('ready', () => {
console.log('IM READY !');
client.user.setActivity(`My Owner Sword Fighter#0001`, { type: "Watching" });
        setTimeout(game2, 20000)
    });
    
    function game1() {
        client.user.setActivity(`Type !Help And See Full List Of My Commands`, { type: "Watching" });
        setTimeout(game2, 20000)
    }
    
    function game2() {
        client.user.setActivity(`With My Owner C:`, { type: "Playing" });
        setTimeout(game3, 30000)
    }
    
    function game3() {
       client.user.setActivity(`to ${client.commands.size} commands`, { type: "Watching" });
        setTimeout(game1, 20000);//these times are in ms, so 30,000 = 30 seconds
    }      //seconds/1000 = ms
client.on('message', message => {
 if (message.author.bot) return;
 if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  cmd = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);

  
//command handler
let commandfile = client.commands.get(cmd);
  let alias = client.aliases.get(cmd);

  if(commandfile){
      commandfile.run(client,message,args);
  }
  if(alias){
      alias.run(client,message,args);
  }
        
          
        
});
     
  client.login(process.env.token);
