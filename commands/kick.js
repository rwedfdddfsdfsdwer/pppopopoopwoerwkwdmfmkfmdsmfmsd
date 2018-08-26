const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

    message.delete().catch(O_o=>{});
    if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply(`você não tem permissão! ${emojinop}`).then(msg => msg.delete(6000));
    const comousar = new Discord.RichEmbed()
    .setAuthor("Hyzen - Punições", client.user.avatarURL)
    .setDescription(`Ao executar, ira kickar o membro mencionado.`)
    .setColor("#4a4a4a")
    .setFooter("© Hyzen - Paosz#5829")
    .addField("Como usar:", "`!kick @usuário <motivo>`")
     let member = message.mentions.members.first();
    if(!member)
        return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));
     if(!member.bannable) 
        return message.reply(", :x: eu não posso banir esse usuário, pois o cargo dele é maior que o meu.");

    let motivo = args.slice(1).join(' ');
    if(!motivo) motivo = "Motivo não informado.";
  
    await member.kick(`👮 Autor da expulsão: ${message.author.tag}  📋 Motivo: ` + motivo)
      .catch(error => message.reply(`Desculpa ${message.author} Eu não poderia expulsar por causa de: ${error}`));
      
      
    const kickmsg = new Discord.RichEmbed()
        .setTitle(`${message.author.tag} 🌀 Expulso`)
        .setDescription(`Você foi expulso do servidor **${message.guild.name}**! `)
        .setColor("#4a4a4a")
        .setThumbnail(member.user.avatarURL)
        .addField("📋 Motivo:", motivo)
        .setTimestamp()
        .setFooter("Hyzen - Moderação")
     
      
    const kikado = new Discord.RichEmbed()
        .setTitle(`${member.user.tag} 🌀 Expulso`)
        .setDescription(`**${member.user.tag}** foi expulso do servidor!`)
        .setColor("#4a4a4a")
        .setThumbnail(message.author.avatarURL)
        .addField("👮 Autor:", message.author)
        .addField("📋 Motivo:", motivo)
        .setTimestamp()
        .setFooter("Hyzen - Moderação")
        
    if(message.guild.channels.find("name", "punidos")){
        let guild = message.guild.channels.find("name", "punidos");   
        guild.send(kikado).catch(O_o=>{});
        member.send(kickmsg).catch(O_o=>{});
        message.channel.send(`:white_check_mark: | ${message.author} usuário punido com sucesso!`)
    }else if(message.guild.channels.find("name", "🚫punidos")){
        let guild = message.guild.channels.find("name", "🚫punidos");
        guild.send(kikado).catch(O_o=>{});
        member.send(kickmsg).catch(O_o=>{})
        message.channel.send(`:white_check_mark: | ${message.author} usuário punido com sucesso!`)
    } else if(message.guild.channels.find("name", "punições")){
        let guild = message.guild.channels.find("name", "punições");
        guild.send(kikado).catch(O_o=>{});
        member.send(kickmsg).catch(O_o=>{})
        message.channel.send(`:white_check_mark: | ${message.author} usuário punido com sucesso!`)
    }else if(message.guild.channels.find("name", "logs-hyzen-bot")){
        let guild = message.guild.channels.find("name", "logs-hyzen-bot");
        guild.send(kikado).catch(O_o=>{});
        member.send(kickmsg).catch(O_o=>{})
        message.channel.send(`:white_check_mark: | ${message.author} usuário punido com sucesso!`)
    } else {
        message.channel.send(kikado).catch(O_o=>{});
        member.send(kickmsg).catch(O_o=>{})
    }
}