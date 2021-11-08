const Discord = require("discord.js");
const client = new Discord.Client(
    {intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_BANS", "GUILD_VOICE_STATES", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INVITES", "GUILD_VOICE_STATES", "GUILD_PRESENCES", "DIRECT_MESSAGE_TYPING"]}
);
const ytch = require("yt-channel-info");


client.login(process.env.token);


setInterval(function(){
    var canale = client.channels.cache.get("906952878294441994")
    ytch.getChannelInfo("UCbLFhYI_nmzjK3yBvyPCdnQ")
    .then(response => {
        canale.setName(`🔴┊Iscritti: ${response.subscriberCount}`)
    })
}, 1000 * 900)


client.on("message", (message) => {

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

