const Discord = require("discord.js");
const { handlemsg } = require(`${process.cwd()}/handlers/functions`)
module.exports = {
  name: "serveravatar",
  description: "Shows the ServerAvatar",
  run: async (client, interaction, cmduser, es, ls, prefix, player, message) => {
    //things u can directly access in an interaction!
    const { member, channelId, guildId, applicationId, commandName, deferred, replied, ephemeral, options, id, createdTimestamp } = interaction; 
    const { guild } = member;
    
    try {
      interaction?.reply({ephemeral: true, embeds: [new Discord.MessageEmbed()
      .setAuthor(handlemsg(client.la[ls].cmds.info.serveravatar.author, { servername: guild.name }), guild.iconURL({dynamic: true}), "https://discord.com/invite/Yfb2fnkduE")
      .setColor(es.color).setThumbnail(es.thumb ? es.footericon && (es.footericon.includes("http://") || es.footericon.includes("https://")) ? es.footericon : client.user.displayAvatarURL() : null)
      .addField("<:arrow:1249336173734924389> PNG",`[\`LINK\`](${guild.iconURL({format: "png"})})`, true)
      .addField("<:arrow:1249336173734924389> JPEG",`[\`LINK\`](${guild.iconURL({format: "jpg"})})`, true)
      .addField("<:arrow:1249336173734924389> WEBP",`[\`LINK\`](${guild.iconURL({format: "webp"})})`, true)
      .setURL(guild.iconURL({
        dynamic: true
      }))
      .setFooter(client.getFooter(es))
      .setImage(guild.iconURL({
        dynamic: true, size: 256,
      }))
    ]});
    } catch (e) {
      console.log(String(e.stack).grey.bgRed)
    }
  }
}
