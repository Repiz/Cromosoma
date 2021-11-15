const Discord = require("discord.js");
const client = new Discord.Client(
    {intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_BANS", "GUILD_VOICE_STATES", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INVITES", "GUILD_VOICE_STATES", "GUILD_PRESENCES", "DIRECT_MESSAGE_TYPING"]}
);
const ytch = require("yt-channel-info");
const cooldown = new Set();

client.login(process.env.token);

client.on("message", (message) => {

})

//stato bot
client.on("ready", () => { 
    client.user.setStatus("online");
    client.user.setActivity('Perdita Cromosomi', { type: "PLAYING"})
})

//counter iscritti
setInterval(function(){
    var canale = client.channels.cache.get("906952878294441994")
    ytch.getChannelInfo("UCbLFhYI_nmzjK3yBvyPCdnQ")
    .then(response => {
        canale.setName(`🔴┊Iscritti: ${response.subscriberCount}`)
    })
}, 1000 * 900)

//automod
client.on("message", (message) =>{
    if(message.content == "negri"){
        message.delete();
    }
})

//messaggio id
var embed = new Discord.MessageEmbed()
    .setColor("#8800f2")
    .setTitle("ID Server vanilla di il_BOGE")
    .setURL("https://www.twitch.tv/il_boge")
    .setAuthor("Cromosoma", "https://cdn.discordapp.com/attachments/784431869692870716/904782396577177700/Cromosoma.png")
    .setDescription("L'ID del server vanilla è " + "**" + "futuro id server" + "**")
    .setThumbnail("https://images-na.ssl-images-amazon.com/images/I/418cEZfh8-L.jpg")
    .addField("⚠️⚠️ Avvertenza ⚠️⚠️", " Ti ricordo di non condividere questo ID con nessuno, e ripeto nessuno, per evitare spiacevoli conseguenze nel server vanilla (coff coff renny coff coff). Grazie", true)
    .setFooter("Hai utilizzato il comando .idvanilla")
    .setTimestamp();

//comando id vanilla
client.on("message", (message) => {
    if(message.content == ".idvanilla"){
        if(message.member.roles.cache.has("884046793728471070")){
            message.author.send(embed)
        }
        else {
            message.channel.send(message.author.toString() + " non ha il ruolo 🥶Cromosoma Supremo🥶, spendi un po' di cromosomi da https://www.twitch.tv/il_boge!")
        }
    }
})

//counter membri server
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

//messaggi di benvenuto (oppure addio)

var messaggio = ["500 cromosomi (Pazzo Sgravo)", "50 cromosomi (Ananas)", "78 cromosomi (Cane)", "254 cromosomi (Gamberetto)", "22 cromosomi (Fagiolo", "2 cromosomi (Formica)", "56 cromosomi (Elefante)", "64 cromosomi (Cavallo)", "60 cromosomi (Mucca)"];

client.on("guildMemberAdd", (member) => {
    var utentiCount = member.guild.memberCount - 11;
    var random = Math.floor(Math.random() * messaggio.length)

    client.channels.cache.get("894917704610381834").send("👋 Hey " + member.toString() + ", benvenuto nel **" + member.guild.name + "**.\n🔢 Sei il **" + utentiCount + "° membro** del server.\n😎 Hai **" + messaggio[random] + "**.\n📃 Ti ricordo di **passare** in <#695213680656384010> e poi in <#894915662537957396> per prenderti i ruoli!\n✅ Buona permanenza!")
})

//testa o croce con cooldown

var messaggi = ["Testa", "Croce"];

client.on("message", (message) => {
    if(message.content == ".teocr") {
        if(cooldown.has(message.author.id)) {
            return;
        } else {
            var random = Math.floor(Math.random() * messaggi.length)
            message.channel.send("Tra testa o croce è uscito: " + messaggi[random] + "\n" + message.author.toString())
            cooldown.add(message.author.id)
            setTimeout(() => {
                cooldown.delete(message.author.id)
        }, 5000);   
            }
        }   
    });


//reaction roles

client.on("message", message => {
    if (message.content == ".react") {
        message.channels.cache.get("894996521265819728").react("🟫");
    }
})

client.on("messageReactionAdd", async function (messageReaction, user) {
    if (user.bot) return

    if (messageReaction.message.partial) await messageReaction.message.fetch();

    if (messageReaction.message.id == "894996521265819728") {
        if (messageReaction._emoji.name == "🟫") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.add("793819474582306876");
        }
    }
})
//Quando viene rimossa una reazione
client.on("messageReactionRemove", async function (messageReaction, user) {
    if (user.bot) return

    if (messageReaction.message.partial) await messageReaction.message.fetch();

    if (messageReaction.message.id == "idMessaggio") {
        if (messageReaction._emoji.name == "🟫") {
            var utente = messageReaction.message.guild.members.cache.find(x => x.id == user.id);
            utente.roles.remove("793819474582306876");
        }
    }
})

