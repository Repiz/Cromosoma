const Discord = require("discord.js");
const client = new Discord.Client(
    {intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS", "GUILD_BANS", "GUILD_VOICE_STATES", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INVITES", "GUILD_VOICE_STATES", "GUILD_PRESENCES", "DIRECT_MESSAGE_TYPING"]}
);
const ytch = require("yt-channel-info");
const YouTubeNotifier = require("youtube-notification");
const disbut = require("discord-buttons");
disbut(client);
const { MessageMenuOption, MessageMenu } = require("discord-buttons");
const { MessageButton, MessageActionRow } = require("discord-buttons");
const cooldown = new Set();

client.login(process.env.token);

//stato bot
client.on("ready", () => { 
    client.user.setStatus("online");
    client.user.setActivity('Come perdere cromosomi 100% vero no clickbait', { type: "LISTENING"})
})

//counter iscritti
setInterval(function(){
    var canale = client.channels.cache.get("906952878294441994")
    ytch.getChannelInfo("UCbLFhYI_nmzjK3yBvyPCdnQ")
    .then(response => {
        canale.setName(`🔴┊Iscritti: ${response.subscriberCount}`)
    })
}, 1000 * 900)

//automod (speriamo funzioni)

client.on("message", (message) =>{
    if(message.content.includes("negri"||"porco dio")){
        message.delete();
    } else{
        return;
    }
})


//definizione messaggio id vaniala
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
            var persona = message.author.id;
            var data = new Date();
            var ore = data.getHours();
            var minuti = data.getMinutes(); //messaggio in #automod per vedere chi ha accesso all'id
            message.author.send(embed).then(client.channels.cache.get("908464001153921064").send("Da questo momento, ore " + ore + ":" + minuti + ", <@" + persona + "> **ha accesso** all'id del server vanilla.\nSperiamo bene... 😔"));
        }
        else {
            message.channel.send(message.author.toString() + " non ha il ruolo 🥶Cromosoma Supremo🥶, vai a spendere un po' di cromosomi da https://www.twitch.tv/il_boge!")
        }
    }
})

//counter membri server
client.on("guildMemberAdd", member => {

    var utentiCount = member.guild.memberCount - 10;

    var canale = client.channels.cache.get("905510008010178590")
    canale.setName("🦽┊Membri: " + utentiCount)
})
client.on("guildMemberRemove", member => {

    var utentiCount = member.guild.memberCount - 10;

    var canale = client.channels.cache.get("905510008010178590")
    canale.setName("🦽┊Membri: " + utentiCount)

})

//messaggi di benvenuto (oppure addio)

var messaggio = ["500 cromosomi (Pazzo Sgravo)", "50 cromosomi (Ananas)", "78 cromosomi (Cane)", "254 cromosomi (Gamberetto)", "22 cromosomi (Fagiolo", "2 cromosomi (Formica)", "56 cromosomi (Elefante)", "64 cromosomi (Cavallo)", "60 cromosomi (Mucca)"];

client.on("guildMemberAdd", (member) => {
    var utentiCount = member.guild.memberCount - 10;
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

//menu per la moderazione

client.on("message", (message) => {
    if(message.content.startsWith(".mod")) {
        var utenteKick = message.mentions.members.first();

        if(!message.member.hasPermission("KICK_MEMBERS")) {
            message.channel.send("Cosa vuoi fare senza diritti?");
            return;
        }

        if(!message.member.hasPermission("MANAGE_ROLES")) {
            message.channel.send("Cosa vuoi fare senza diritti?");
            return;
        }

        if(!utenteKick) {
            message.channel.send("Magari tagga qualcuno")
            return;
        }

        var option1 = new MessageMenuOption()
            .setLabel("Mutare")
            .setDescription("Muta la persona che hai taggato")
            .setValue("opzione1")
            .setEmoji("🔈")

        var option2 = new MessageMenuOption()
            .setLabel("Kickare")
            .setDescription("Espelli la persona che hai taggato")
            .setValue("opzione2")
            .setEmoji("❌")

        var option3 = new MessageMenuOption()
            .setLabel("Bannare")
            .setDescription("Banna la persona che hai taggato")
            .setValue("opzione3")
            .setEmoji("⛔")

        var menu = new MessageMenu()
            .setPlaceholder("Seleziona l'azione che preferisci")
            .setID("menu")
            .setMinValues(1)
            .setMaxValues(1)
            .addOption(option1)
            .addOption(option2)
            .addOption(option3)

        message.channel.send("Azioni di moderazione", menu);
    }
})

//cosa fanno le 3 opzioni

client.on("clickMenu", (menu) => {
    if (menu.id == "menu") {
        
        menu.reply.defer()

        if(menu.values[0] == "opzione1") {
            utenteKick.roles.add("895734870377127946")
                .then(() => menu.message.channel.send("<@" + utenteKick + "> è stato mutato. Pensa che logorroico!"))
        }
        
        if(menu.values[0] == "opzione2") {
            utenteKick.kick()
                .then(() => menu.message.channel.send("<@" + utenteKick + "> è stato espulso dal server. F"))
        }

        if(menu.values[0] == "opzione3") {
            utenteKick.ban()
                .then(() => menu.message.channel.send("<@" + utenteKick + "> è stato bannato dal server. Così impara!"))
        }
    }
});

//bottone benvenuto con reaction roles

client.on("message", (message) => {
    if(message.content == ".eureca") {

        var botruolo1 = new MessageButton()
            .setLabel("Clicca per i ruoli")
            .setStyle("red")
            .setID("generale")
            .setEmoji("🌐")
        
        var botruolo2 = new MessageButton()
            .setLabel("Clicca per i ruoli")
            .setStyle("green")
            .setID("social")
            .setEmoji("👥")

        var botruolo3 = new MessageButton()
            .setLabel("Clicca per i ruoli")
            .setStyle("blurple")
            .setID("gaming")
            .setEmoji("🎮")

        var row = new MessageActionRow()
            .addComponent(botruolo1)
            .addComponent(botruolo2)
            .addComponent(botruolo3)

            message.channel.send("Prova", row)
    }
})

client.on("clickButton", (button) => {
    if (button.id == "generale") {
        button.reply.defer()
        button.clicker.member.roles.add("789467557433180221");
    }
})


//reaction roles
/*client.on("message", (message) => {
    Channel.messages.fetch("Reagite alle varie emoji qui sotto per ottenere il ruolo dei vostri giochi preferiti per vedere canali vocali e testuali proprio su quei giochi").then(react("🟫"));
    
    if(message.content.includes("Reagite alle varie emoji qui sotto per ottenere il ruolo dei vostri giochi preferiti per vedere canali vocali e testuali proprio su quei giochi")) { 
        message.channel.react("🟫");
    });


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
})*/

//notifiche yt (prova)
 
const notifier = new YouTubeNotifier({
  hubCallback: 'https://www.youtube.com/c/Mark3s',
  port: 3000,
  path: "/youtube"
});
notifier.setup();
notifier.on('notified', data => {
    client.channels.cache.get("833272308671578143").send('${data.channel.name} just uploaded a new video titled: ${data.video.title}')
});
