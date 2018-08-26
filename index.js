const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');

var hoje = new Date();
            var dd = hoje.getDate();
            var mm = hoje.getMonth()+1;
            var hh = hoje.getHours()-3;
            var min = hoje.getMinutes();
            var ss = hoje.getSeconds();
            var yyyy = hoje.getFullYear();
            if(dd<10){
                dd = '0'+dd;
            }
            if (mm<10) {
                mm = '0'+mm;
            }
            if (hh<10){
		if(hh<01){
		    hh = 3+hh;
		}
                hh = '0'+hh;
            }
            if (min<10){
                min = '0'+min;
            }
            var hoje = dd+ '/' +mm+ '/' +yyyy + ' às ' + hh + ':' + min;
	    var hojee = dd+ '/' +mm+ '/' +yyyy;

var prefix = "!";

client.on("ready", () => {
	
    client.channels.get('482330192736681997').send(':grinning:  | O bot foi reiniciado com sucesso!\n\nData: ' + hoje).then(msg => {
    	msg.delete(50000)
    })
	    
    const activities = ['no HyzenMC.', 'amor para vocês!😍', 'use h!ajuda para ver meus cmds.', 'criado por Paosz#5829.']
    let counter = 0
    setInterval(function() {
        client.user.setGame(activities[counter], "https://twitch.tv/paoszzz")
        counter+= 1
        counter %= activities.length
    }, 10000)
});


fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});
client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
 
  let args = message.content.split(" ").slice(1);
  // The list of if/else is replaced with those simple 2 lines:
 
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
 
});

client.on('guildMemberAdd', member => {
  let avatar = member.user.avatarURL

  let role = member.guild.roles.find('name', '♟ Membros');

  let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(avatar)
      .addField('Bem vindo ao discord.', `Bem vindo(a) ${member} ao discord oficial do Hyzen!\n Você foi o __${member.guild.memberCount}__ player a entrar em nosso servidor\n \nPara interagir com os player vá em: <#480418166628024321>\nPara ver os nossos anúncios vá em: <#444142515105562634>\n`)
      .setFooter(`Hyzen - Entrada`);
      client.channels.get('443967435113103362').send(embed);
      member.addRole(role)
})

client.on('guildMemberRemove', member => {
    let avatar = member.user.avatarURL
  
  
    let embed2 = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(avatar)
        .addField('Saiu do servidor.', `O ${member} saiu do Hyzen :c\n Agora temos __${member.guild.memberCount}__ em nosso servidor.\n`)
        .setFooter(`Hyzen - Saída`);
        client.channels.get('481133822130257922').send(embed);
  
    })
	

client.login(process.env.BOT_TOKEN);
