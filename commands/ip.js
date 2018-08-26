const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

    if(message.channel.id != "482929569033093121") return message.reply(`você não pode executar comandos aqui, vá em <#482929569033093121>`).then(msg => msg.delete(5000))
   message.delete().catch(O_o=>{})
    const form = new Discord.RichEmbed()
       .setColor("#4a4a4a")
       .setAuthor("Hyzen - IP's")
       
       .setDescription("Aqui você ira encontrar todos os servidores (IP's)")
       .addField("O servidor está atualmente em desenvolvimento.")
       
       .setTimestamp()
       .setFooter(`Hyzen - IP's`)
    
    message.channel.send(message.author , form).then(msg => msg.delete(3000));

}