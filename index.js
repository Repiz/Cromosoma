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

/*client.on("message", (message) =>{
    if(message.content.includes("negri"||"porco dio")){
        message.delete();
    } else{
        return;
    }
})*/

//comando id vanilla, testa o croce

client.on("message", (message) => {
    if(message.content == ".idvanilla"){
        if(message.member.roles.cache.has("884046793728471070")){
            var persona = message.author.id;
            //definizione messaggio id vaniala
            var embed = new Discord.MessageEmbed()
                .setColor("#8800f2")
                .setTitle("ID Server vanilla di il_BOGE")
                .setURL("https://www.twitch.tv/il_boge")
                .setAuthor("Cromosoma", "https://cdn.discordapp.com/attachments/784431869692870716/904782396577177700/Cromosoma.png")
                .setDescription("L'ID del server vanilla è **futuro id server**")
                .setThumbnail("https://images-na.ssl-images-amazon.com/images/I/418cEZfh8-L.jpg")
                .addField("⚠️⚠️ Avvertenza ⚠️⚠️", " Ti ricordo di non condividere questo ID con nessuno, e ripeto nessuno, per evitare spiacevoli conseguenze nel server vanilla (coff coff renny coff coff). Grazie", true)
                .setFooter("Hai utilizzato il comando .idvanilla")
                .setTimestamp();
            
            var data = new Date();
            var ore = data.getHours();
            var minuti = data.getMinutes();

            //messaggio in #automod per vedere chi ha accesso all'id
            message.author.send(embed).then(client.channels.cache.get("908464001153921064").send("Da questo momento, ore " + ore + ":" + minuti + ", <@" + persona + "> **ha accesso** all'id del server vanilla.\nSperiamo bene... 😔"));
        }
        else {
            message.channel.send(message.author.toString() + " non ha il ruolo 🥶Cromosoma Supremo🥶, vai a spendere un po' di cromosomi da https://www.twitch.tv/il_boge!")
        }
    }

    //testa o croce con cooldown
    if(message.content == ".teocr") {
        if(cooldown.has(message.author.id)) {
            return;
        } else {
            var messaggi = ["Testa", "Croce"];
            var random = Math.floor(Math.random() * messaggi.length)
            message.channel.send("Tra testa o croce è uscito: " + messaggi[random] + "\n" + message.author.toString())
            cooldown.add(message.author.id)
            setTimeout(() => {
                cooldown.delete(message.author.id)
        }, 5000);   
            }
        }
    
    //gaymeter con cooldown
    if(message.content.startsWith(".gaymeter")) {
        if(cooldown.has(message.author.id)) {
            message.channel.send("cooldown");
        } else {
            var gayperson = message.mentions.members.first();
            if(!gayperson) {
                gayperson = message.author.id;
            };
            //"10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "60", "65", "70", "75", "80", "85", "312", "416",
            var percentuale = [ "90", "95", "100", "104", "208", "over 9000"];

            var gayperc = Math.floor(Math.random() * percentuale.length)
            
            if(percentuale[gayperc]<100) {
                var percmanc =100-percentuale[gayperc];
            } else {
                percmanc = "";
            }

            var gay = new Discord.MessageEmbed()
                .setColor("#ff56cf")
                .setTitle("Find Gay IA Machine")
                .setDescription("Analyzing <@" + gayperson + "> /\nBuild starting up/starting analyzing/checking gay or etero/\nGay found/checking percentage/Build finished up\nThe person (<@" + gayperson + ">) is " + percentuale[gayperc] + " % gay 🏳️‍🌈")
                .setThumbnail("https://snorkisaraitu.files.wordpress.com/2018/07/bandiera-lgbt.png")
                .setFooter("/Error 404/ETERO not found " + percmanc)
                .setTimestamp();
            message.channel.send(gay);

            cooldown.add(message.author.id)
            setTimeout(() => {
                cooldown.delete(message.author.id)
        }, 30000);
            }
    }
})

//counter membri server, messaggi di benvenuto e messaggi quando qualcuno esce dal server

var messaggio = ["500 cromosomi (Pazzo Sgravo)", "50 cromosomi (Ananas)", "78 cromosomi (Cane)", "254 cromosomi (Gamberetto)", "22 cromosomi (Fagiolo", "2 cromosomi (Formica)", "56 cromosomi (Elefante)", "64 cromosomi (Cavallo)", "60 cromosomi (Mucca)"];

client.on("guildMemberAdd", (member) => {
    //counter +
    var utentiCount = member.guild.memberCount - 10;
    var canale = client.channels.cache.get("905510008010178590")

    canale.setName("🦽┊Membri: " + utentiCount)
    //messaggio di benvenuto
    var random = Math.floor(Math.random() * messaggio.length)

    client.channels.cache.get("894917704610381834").send("👋 Hey " + member.toString() + ", benvenuto nel **" + member.guild.name + "**.\n🔢 Sei il **" + utentiCount + "° membro** del server.\n😎 Hai **" + messaggio[random] + "**.\n📃 Ti ricordo di **passare** in <#695213680656384010> e poi in <#894915662537957396> per prenderti i ruoli!\n✅ Buona permanenza!")
})

client.on("guildMemberRemove", member => {
    //counter -
    var utentiCount = member.guild.memberCount - 10;
    var canale = client.channels.cache.get("905510008010178590")

    canale.setName("🦽┊Membri: " + utentiCount)

    client.channels.cache.get("908464001153921064").send(member.toString + "è uscito dal server. Pensa che scarso!")
})

//bottoni in #regole con reaction roles e messaggio in #ruoli gaming con reaction roles

client.on("clickButton", (button) => {

    //ruoli
    var botruolo1 = new MessageButton()
        .setLabel("Cromosoma Semplice")
        .setStyle("red")
        .setID("generale")
        .setEmoji("🌐")       
    var botruolo2 = new MessageButton()
        .setLabel("Cromosoma Sociale")
        .setStyle("green")
        .setID("social")
        .setEmoji("👥")
    var botruolo3 = new MessageButton()
        .setLabel("Cromosoma Gamer")
        .setStyle("blurple")
        .setID("gaming")
        .setEmoji("🎮")

    if (button.id == "generale") {
        button.reply.defer()
        if(button.clicker.member.roles.cache.has("789467557433180221")) {
            button.clicker.member.roles.remove("789467557433180221")
        } else {
            button.clicker.member.roles.add("789467557433180221")
        }
    }

    if (button.id == "social") {
        button.reply.defer()
        if(button.clicker.member.roles.cache.has("893801930508365866")) {
            button.clicker.member.roles.remove("893801930508365866")
        } else {
            button.clicker.member.roles.add("893801930508365866")
        }
    }

    if (button.id == "gaming") {
        button.reply.defer()
        if(button.clicker.member.roles.cache.has("893802104479703081")) {
            button.clicker.member.roles.remove("893802104479703081")
        } else {
            button.clicker.member.roles.add("893802104479703081")
        }
    }

    //ruoli gaming
    var gamingroleM = new MessageButton()
        .setStyle("green")
        .setID("minecraft")
        .setEmoji("🟫")
    var gamingroleC = new MessageButton()
        .setStyle("blurple")
        .setID("clash")
        .setEmoji("👑")
    var gamingroleLL = new MessageButton()
        .setStyle("red")
        .setID("LOL")
        .setEmoji("🌲")
    var gamingroleR = new MessageButton()
        .setStyle("green")
        .setID("rocket")
        .setEmoji("🚗")
    var gamingroleV = new MessageButton()
        .setStyle("blurple")
        .setID("valorant")
        .setEmoji("🔻")
    var gamingroleOSU = new MessageButton()
        .setStyle("red")
        .setID("OSU")
        .setEmoji("🎵")
    var gamingroleS = new MessageButton()
        .setStyle("green")
        .setID("splitgate")
        .setEmoji("🌀")
    var gamingroleAS = new MessageButton()
        .setStyle("blurple")
        .setID("AmongUs")
        .setEmoji("🔪")

    if (button.id == "minecraft") {
        button.reply.defer()
        if(button.clicker.member.roles.cache.has("793819474582306876")) {
            button.clicker.member.roles.remove("793819474582306876")
        } else {
            button.clicker.member.roles.add("793819474582306876")
        }
    }
        
    if (button.id == "clash") {
        button.reply.defer()
        if(button.clicker.member.roles.cache.has("793821083295154186")) {
            button.clicker.member.roles.remove("793821083295154186")
        } else {
            button.clicker.member.roles.add("793821083295154186")
        }
    }
        
    if (button.id == "LOL") {
        button.reply.defer()
        if(button.clicker.member.roles.cache.has("793819687199965204")) {
            button.clicker.member.roles.remove("793819687199965204")
        } else {
            button.clicker.member.roles.add("793819687199965204")
        }
    }
        
    if (button.id == "rocket") {
        button.reply.defer()
        if(button.clicker.member.roles.cache.has("793819607852122118")) {
            button.clicker.member.roles.remove("793819607852122118")
        } else {
            button.clicker.member.roles.add("793819607852122118")
        }
    }
        
    if (button.id == "valorant") {
        button.reply.defer()
        if(button.clicker.member.roles.cache.has("793820710711197706")) {
            button.clicker.member.roles.remove("793820710711197706")
        } else {
            button.clicker.member.roles.add("793820710711197706")
        }
    }
            
    if (button.id == "OSU") {
        button.reply.defer()
        if(button.clicker.member.roles.cache.has("836253388987433021")) {
            button.clicker.member.roles.remove("836253388987433021")
        } else {
            button.clicker.member.roles.add("836253388987433021")
        }
    }
        
    if (button.id == "splitgate") {
        button.reply.defer()
        if(button.clicker.member.roles.cache.has("883459668679217163")) {
            button.clicker.member.roles.remove("883459668679217163")
        } else {
            button.clicker.member.roles.add("883459668679217163")
        }
    }
        
    if (button.id == "AmongUs") {
        button.reply.defer()
        if(button.clicker.member.roles.cache.has("914118978316668969")) {
            button.clicker.member.roles.remove("914118978316668969")
        } else {
            button.clicker.member.roles.add("914118978316668969")
        }
    }

})

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
