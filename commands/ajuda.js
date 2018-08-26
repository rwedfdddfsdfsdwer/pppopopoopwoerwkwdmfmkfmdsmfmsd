const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    if(message.channel.id != "482929569033093121") return message.reply(`você não pode executar comandos aqui, vá em <#482929569033093121>`).then(msg => msg.delete(5000))
    message.delete().catch(O_o=>{});
    const msg1 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setDescription(`Olá ${message.author.username} veja abaixo nossos comandos.
 **»h!ajuda** Veja todos os meus comandos.
 **»h!ban [@]** Ira banir um usuário do servidor. __COMANDO ADMINISTRATIVO__
 **»h!mute [@]** Ira mutar um usuário do servidor. __COMANDO ADMINISTRATIVO__
 **»h!avatar [@]** Veja a foto do usuário mencionado. 
 **»h!formulario ** Ira lhe enviar os formulários da rede 
 **»h!ip ** Ira mutar um usuário do servidor. 
 **»h!kick [@]** Ira kickar um usuário do servidor. __COMANDO ADMINISTRATIVO__`)
    message.member.send(msg1).then(msg=> {
      


            
            })
        }
