const ytdl = require('ytdl-core');
const Discord = require('discord.js');
//const { song } = require('../commands/musica/tocar.js');
const cor = "10371828"

const queue = new Map();

function play(guild, song) {
    const serverQueue = queue.get(guild.id);
  
    if (!song) {
        queue.delete(guild.id);
        serverQueue.serverA.me.voiceChannel.leave();
        return;
    }
  
    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
      .on('end', () => {
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
      })
      .on('error', error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 10);
    serverQueue.textChannel.send(`:cd: **|** Agora está tocando \`${song.title}\`, pedido por <@${serverQueue.messageAuth.id}>`)
    const musiclog = new Discord.RichEmbed()
        .setAuthor(song.canal)
        .setTitle(`:musical_note: ${song.title}`)
        .setColor("#22a7cc")
        .setThumbnail(song.tumb)
        .setFooter("Atlantic")
        .addField("Por:", `${serverQueue.messageAuth.username} (ID: ${serverQueue.messageAuth.id})`)
        .addField("Servidor:", `${serverQueue.serverA.name} (ID: ${serverQueue.serverA.id})`)
   serverQueue.channelLOG.send(musiclog)
}


module.exports = {
  play,
  queue
}