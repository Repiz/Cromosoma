const Discord = require("discord.js");
const client = new Discord.Client(
    {intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_BANS", "GUILD_VOICE_STATES", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INVITES", "GUILD_VOICE_STATES", "GUILD_PRESENCES", "DIRECT_MESSAGE_TYPING"]}
);
const ytch = require("yt-channel-info");


client.login(process.env.token);

client.on("message", (message) => {

})

setInterval(function(){
    var canale = client.channels.cache.get("906952878294441994")
    ytch.getChannelInfo("UCbLFhYI_nmzjK3yBvyPCdnQ")
    .then(response => {
        canale.setName(`🔴┊Iscritti: ${response.subscriberCount}`)
    })
}, 1000 * 900)


var embed = new Discord.MessageEmbed()
    .setColor("#ffff00")
    .setTitle("ID Server vanilla di il_boge")
    .setURL("https://www.twitch.tv/il_boge")
    .setAuthor("Cromosoma", "https://cdn.discordapp.com/attachments/784431869692870716/904782396577177700/Cromosoma.png")
    .setDescription("L'ID del server vanilla è " + "**" + "futuro id server" + "**")
    .setThumbnail("https://images-na.ssl-images-amazon.com/images/I/418cEZfh8-L.jpg")
    .addField("⚠️⚠️ Avvertenza ⚠️⚠️", " Ti ricordo di non condividere questo ID con nessuno, e ripeto nessuno, per evitare spiacevoli conseguenze nel server vanilla. Grazie", true)
    .setFooter("Hai utilizzato il comando .idvanilla")
    .setTimestamp();


client.on("message", (message) => {
    if(message.content == ".idvanilla"){
        if(message.member.roles.cache.has("884046793728471070")){
            message.author.send(embed)
        }
        else{
            message.channel.send(message.author.toString() + " non ha il ruolo 🥶Cromosoma Supremo🥶 renny caro!")
        }
    }
})


client.on("guildMemberAdd", member => {

    var utentiCount = member.guild.memberCount - 11;

    var canale = client.channels.cache.get("905510008010178590")
    canale.setName("🦽┊Membri: " + utentiCount)
})


client.on("guildMemberRemove", member => {

    var utentiCount = member.guild.memberCount - 11;

    var canale = client.channels.cache.get("905510008010178590")
    canale.setName("🦽┊Membri: " + utentiCount)

})

