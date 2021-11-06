const Discord = require("discord.js");
const client = new Discord.Client(
    {intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_BANS", "GUILD_VOICE_STATES", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INVITES", "GUILD_VOICE_STATES", "GUILD_PRESENCES", "DIRECT_MESSAGE_TYPING"]}
);

client.login(process.env.token);

client.on("messageCreate", (message) => {
    if (message.content == "https://tenor.com/view/sussy-baka-sus-dog-yo-momma-gif-21425378"){
        message.delete();
    }
});

var server = message.member.guild;
var botCount = server.member.cache.filter(member => member.user.bot).size;
var utentiCount = server.memberCount - botCount;

client.on("guildMemberAdd", member => {
    var canale = client.channels.cache.get("905510008010178590")
    canale.setName("🦽┊Membri: " + utentiCount)
})

client.on("guildMemberAdd", member => {
    var canale = client.channels.cache.get("906498797637619752")
    canale.setName("🤖┊Bots: " + botCount)

})

client.on("guildMemberRemove", member => {
    var canale = client.channels.cache.get("905510008010178590")
    canale.setName("🦽┊Membri: " + utentiCount)
})

client.on("guildMemberRemove", member => {
    var canale = client.channels.cache.get("906498797637619752")
    canale.setName("🤖┊Bots: " + botCount)

})




