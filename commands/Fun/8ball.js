let Discord = require('discord.js');

exports.run = (client, message) => {

//Just The arrays/list of available answers
var list = [
    'It is certain',
     'Maybe No?',
     'No You!',
    'What Do You Think?',
    'Srsly?',
    'Nah',
    'Hmmmmmmmmmmmm?',
    'Nup',
    'Do You Think Im Stupid?',
    'noooooooooooo it is not',
    'i cant',
    'Come Ask Later Plz Im Tired',
    'Come Ask Later',
    'It is decidedly so',
    'Without a doubt',
    'Yes definitely',
    'You may rely on it',
    'As I see it, yes',
    'Most likely',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful'
];
//The randomizer    Math.floor = rounds to the nearest integers     Math.random = Generates random number between a number between 0 and 1      list.length = Grabs the length of the list 
var rand = Math.floor(Math.random() * list.length);

//Send's a reply to the user who wrote the message
var embed = new Discord.RichEmbed()
.setTitle('**8ball Question**')
.addField("**Bot Replies :**", list[rand])
.setFooter("Get Mojang & Spotify Premium Accounts ! With only 4 Euro Just Visit https://selly.gg/@BanGamer And Buy 2 Mojang Premium Accounts With Only 4 Euro ! not 42$ Only 4 Euro!")
.setColor("RANDOM")

message.channel.send(embed)
	
	
	
	 

}


if (talkedRecently.has(msg.author.id)) {
            msg.channel.send("Wait 1 minute before getting typing this again. - " + msg.author);
    } else {

           // the user can type the command ... your command code goes here :)

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(msg.author.id);
        }, 60000);
    }
	
module.exports.help = {
	name: "8ball",
	alias: "8b"
}
