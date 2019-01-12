let Discord = require('discord.js');

exports.run = (client, message) => {
let id = message.content.split(' ').slice(1,2).join(' ');
let member = "@everyone";
  let dUser = message.guild.members.get(id);
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.reply("**you cant Use This Command Because You Dont Have One From Those Roles Administrator**``/``**Owner**``/``**Moderator OR You Are Missing Administrator Permission**");
  
client.send.message(member, message)  

  message.react('ðŸ‘Œ');
	
}
module.exports.help = {
	name: "send",
	alias: "SEND"
}
