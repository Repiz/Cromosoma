<<<<<<< HEAD
const Discord = require("discord.js");
const client = new Discord.Client();
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
    if (["negri", "porco dio", "negro"].includes(message.content.toLowerCase())){
        message.delete();
    } else{
        return;
    }
})*/

//comando id vanilla, testa o croce

var utenteKick = null;

client.on("message", (message) => {
    if (message.content == ".info") {
        var totalPage = 8; //Ricordati qui si settare le tue pagine totali
        var page = 1;
        //TUTTE LE PAGINE - Puoi crearne quante ne vuoi
        var page1 = new Discord.MessageEmbed()
            .setColor("#ff0000")
            .setTitle("REGOLE DEL SERVER")
            .setDescription("Usa le frecce (<:frecciasinistra:916027890326458458> e <:frecciadestra:916023146451177503>) per cambiare pagina!\n\n**Elenco regole da rispettare per rimanere nel server:**\n\n- **rispettare tutti** gli utenti del server;\n\n- **no parolacce e bestemmie**;\n\n- **no a razzismo, sessismo** o qualsiasi forma di discriminazione o insulto;\n\n- **no ai contenuti +18** (lascio a voi intendere);\n\n- **usare i canali per il loro scopo** in base al nome che hanno (magari non parlare di Minecraft nel canale di LOL, per dire!);\n\n- **non spammare** messaggi, foto, link, ecc.\n\n- **no alla generazione di flame** in qualsiasi chat del server (insultatevi da un'altra parte, qui non ci interessa!!!).")
            .setFooter("REGOLE  (Pagina 1/" + totalPage + ")")
        var page2 = new Discord.MessageEmbed()
            .setColor("#0000ff")
            .setTitle("CANALI (1)")
            .setDescription("Usa le frecce (<:frecciasinistra:916027890326458458> e <:frecciadestra:916023146451177503>) per cambiare pagina!\n\n**A cosa servono i vari canali del server:**\n\n**-** <#905510008010178590> → Numero delle persone presenti nel server.\n\n**-** <#906952878294441994> → Iscritti al canale YouYube di il_BOGE.\n\n**-** <#894917704610381834> → Messaggio di benvenuto per ogni persona che entra nel server.\n\n**-** <#695213680656384010> → Regole del server (magari leggile e rispettale o esplodi) e **ruoli primari** del server.\n\n**-** <#894917844633022524> → Canale per chiedere informazioni riguardo tutto (Discord, YouTube, Twitch, ecc.).\n\n**-** <#894917921833385995> → Annunci e avvisi del server.\n\n**-** <#894918128771928094> → Elezioni dei mod (bast candidarsi per tempo).\n\n**-** <#893735468871589899> → Canale per aprire un ticket (vedi pagina N).\n\n**-** <#684299310359248928> → Chat generale per parlare con la gente di qualsiasi cosa.\n\n**-** <#793824598281814016> → Chat per memare e utilizzare <@270904126974590976>.\n\n**-** <#895012863675088897> → Canale per utilizzare il bot della musica (prefisso !).\n\n**-** <#684299310359248929> → Chat vocale generale, potete parlare di qualsiasi cosa qui.")
            .setFooter("CANALI-1  (Pagina 2/" + totalPage + ")")
        var page3 = new Discord.MessageEmbed()
            .setColor("#ffff00")
            .setTitle("CANALI (2)")
            .setDescription("Usa le frecce (<:frecciasinistra:916027890326458458> e <:frecciadestra:916023146451177503>) per cambiare pagina!\n\n**A cosa servono i vari canali del server:**\n\n**-** <#895013262721183784> → Canale vocale per ascoltare la musica con il bot.\n\n**-** <#850077112399429652> → Chat vocale dedicata a chi potenzia il server (<@&853291581251911731>), gli abbonati (<@&870550083425406987>) e i VIP (<@&884047172956463125>) di Twitch, in sostanza a chi ha abbastanza soldi da spendere...\n\n**-** <#733209545891119105> → Direi che è autoesplicativo, però... Chat in cui aspettare la gente.\n\n**-** <#828576069207588876> → Chat per rimanere aggiornati quando un <@&793819420472508447> crea contenuti.\n\n**-** <#838483196009906207> → Qui ci sono le texture pack di Minecraft dei <@&793819420472508447>.\n\n**-** <#827950617275138078> → Qui potete condividere le vostre belle giocate, clip divertenti, clip di qualche streamer/youtuber che conoscete, insomma... ogni genere di clip.\n\n**-** <#906949054347493457> → <@448212668143370240> si spamma 😩\n\n**-** <#733208464972709898>, <#733207803858255890>, <#834373355553292348> → Canali vocali dedicati ai <@&793819420472508447> per fare ciò che il nome del canale presuppone.\n\n**-** <#895337906955223150> → Canale invisibile alla plebe (sì, anche tu che stai leggendo ne fai parte) dove <@448212668143370240> e <@764201025283948565> tiltano e <@764201025283948565> dà di matto (povero il mio creatore...).\n\n**-** <#883469763010002994> → Canale palco per chiaccerare con noi aristocratici (iniziamo a usarlo magari...).")
            .setFooter("CANALI-2  (Pagina 3/" + totalPage + ")")
        var page4 = new Discord.MessageEmbed()
            .setColor("#00ff00")
            .setTitle("CANALI GAMING (1)")
            .setDescription("Usa le frecce (<:frecciasinistra:916027890326458458> e <:frecciadestra:916023146451177503>) per cambiare pagina!\n\n**A cosa servono i vari canali testuali dedicati all'arte del gaming:**\n\n**-** <#894915662537957396> → Canale in cui schiacciando i bottoni ti verranno tolti/aggiunti i ruoli dei videogiochi a seconda che tu li abbia già o no.\n\n**-** <#888144777223237732> → Chat generale dei videogiochi.\n\n**-** <#888131846020407306> → Canale in cui il bot <@672822334641537041> invia un messaggio appena un gioco a pagamento diventa gratis.\n\n**-** <#883462242304151552> → Chat per parlare di Minecraft, per scambiarsi gli ip dei server, parlare dei nuovi aggiornamenti, ecc...\n\n**-** <#883462364379373698> → Chat per parlare di League of Legendes.\n\n**-** <#883462730412081253> → Chat per parlare di Valorant.\n\n**-** <#883462872070496326> → Chat per parlare di Splitgate.\n\n**-** <#883464246330015754> → Chat per parlare di Clash Royale, mandarsi le amicizie in gioco, scambiarsi i nomi dei clan, ecc...\n\n**-** <#907355996744192041> → Chat per parlare di Clash Mini.")
            .setFooter("CANALI GAMING-1  (Pagina 4/" + totalPage + ")")
        var page5 = new Discord.MessageEmbed()
            .setColor("#00ffff")
            .setTitle("CANALI GAMING (2)")
            .setDescription("Usa le frecce (<:frecciasinistra:916027890326458458> e <:frecciadestra:916023146451177503>) per cambiare pagina!\n\n**A cosa servono i vari canali vocali dedicati all'arte del gaming:**\n\n**-** <#812748801725956106> → Chat vocale dei videogiochi generale.\n\n**-** <#888130204499865640> → Chat per tryhardare MALE su qualsiasi gioco.\n\n**-** <#733214778226507777> → Chat per parlare mentre si gioca a Minecraft in un qualunque server pvp.\n\n**-** <#774667214858092544> → Chat per parlare mentre si gioca a Minecraft in vanilla singleplayer o multiplayer.\n\n**-** <#733210460626616350> → Canale per parlare mentre si gioca a LOL.\n\n**-** <#733211288271978536> → Canale per parlare mentre si gioca a Valorant.\n\n**-** <#882932024913047572> → Chat per parlare mentre si gioca a Splitgate.\n\n**-** <#764170119793737808> → Chat per parlare mentre si gioca a Rocket League.\n\n**-** <#836273607486865429> → Canale per parlare mentre si gioca a OSU.\n\n**-** <#914120017375805450> → Canale per parlare mentre si gioca ad Among Us.\n\n**-** <#733213861347590276> → Chat per parlare mentre si gioca a un gioco mobile qualsiasi.\n\n**-** <#873112980659773500>, <#873112720868782151> → Canali utilizzati dai <@&793819420472508447> per organizzare meglio le manhunt in modo che i giocatori dei rispettivi ruoli possano parlare tra loro.")
            .setFooter("CANALI GAMING-2  (Pagina 5/" + totalPage + ")")
        var page6 = new Discord.MessageEmbed()
            .setColor("#faa81a")
            .setTitle("RUOLI PRIMARI")
            .setDescription("Usa le frecce (<:frecciasinistra:916027890326458458> e <:frecciadestra:916023146451177503>) per cambiare pagina!\n\n**Ruoli ottenibili nel server:**\n*Ruoli primari:*\n\n**-** <@&789467557433180221> → Ti dà accesso alle categorie <#894861747004014622> e <#684299310359248926>, che comprendono i canali: <#894917844633022524>, <#894917921833385995>, <#894918128771928094>, <#893735468871589899>, <#905191090582327416>; <#684299310359248928>, <#793824598281814016>, <#895012863675088897>, <#684299310359248929>, <#895013262721183784>, <#850077112399429652> (ma non puoi entrarci), <#733209545891119105>.\n\n**-** <@&893801930508365866> → Ti dà accesso alla categoria <#878913627715948544>, che comprende i canali: <#828576069207588876>, <#838483196009906207>, <#827950617275138078>, <#906949054347493457>, <#883469763010002994>.\n\n**-** <@&893802104479703081> → Ti dà accesso alla categoria <#733210191008497704> e quindi ai canali <#894915662537957396>, <#888144777223237732>, <#888131846020407306>, <#812748801725956106>, <#888130204499865640>.\n\n**Tutti e 3 i ruoli danno accesso al canale** <#700036249817448579>")
            .setFooter("RUOLI-1  (Pagina 6/" + totalPage + ")")
        var page7 = new Discord.MessageEmbed()
            .setColor("#8800f2")
            .setTitle("RUOLI GAMING")
            .setDescription("Usa le frecce (<:frecciasinistra:916027890326458458> e <:frecciadestra:916023146451177503>) per cambiare pagina!\n\n**Ruoli ottenibili nel server:**\n*Ruoli gaming:*\n\n**-** <@&793819474582306876> → Accesso ai canali <#883462242304151552>, <#733214778226507777>, <#774667214858092544>, <#873112980659773500> e <#873112720868782151>.\n\n**-** <@&793821083295154186> → Accesso ai canali <#883464246330015754>, <#907355996744192041> e <#733213861347590276>.\n\n**-** <@&793819687199965204> → Accesso ai canali <#883462364379373698> e <#733210460626616350>.\n\n**-** <@&793819607852122118> → Accesso al canale <#764170119793737808>.\n\n**-** <@&793820710711197706> → Accesso ai canali <#883462730412081253> e <#733211288271978536>.\n\n**-** <@&836253388987433021> → Accesso al canale <#836273607486865429>.\n\n**-** <@&883459668679217163> → Accesso ai canali <#883462872070496326> e <#882932024913047572>.\n\n**-** <@&914118978316668969> → Accesso al canale <#914120017375805450>.")
            .setFooter("RUOLI-2  (Pagina 7/" + totalPage + ")")
        var page8 = new Discord.MessageEmbed()
            .setColor("#1e9498")
            .setTitle("RUOLI SPECIALI")
            .setDescription("Usa le frecce (<:frecciasinistra:916027890326458458> e <:frecciadestra:916023146451177503>) per cambiare pagina!\n\n**Ruoli speciali ottenibili nel server:**\n\n**-** <@&884046793728471070> → Ottenibile spendendo 2500 punti canale sul Twitch di <@448212668143370240>, dà accesso all'id del server vanilla privato di <@448212668143370240> (e cacciateli sti punti!).\n\n**-** <@&870550083425406987> → Ruolo esclusivo per gli abbonati al canale Twitch di <@448212668143370240>, i ruoli <@&870550083425406988>, <@&870550083425406989>, <@&870550083425406990> indicano la quantità di soldi che avete speso per abbonarvi in ordine crescente; dà il permesso di entrare nel canale <#850077112399429652>.\n\n**-** <@&884047172956463125> → Ruolo esclusivo per i VIP del canale Twitch di <@448212668143370240>, dà il permesso di entrare nel canale <#850077112399429652>.\n\n**-** <@&853291581251911731> → Ruolo per chi potenzia il server (grazie se lo fai bro), dà il permesso di entrare nel canale <#850077112399429652>.\n\n**-** <@&793819420472508447> → Ottenibile semplicemente palesando a un mod che si streamma o pubblicano video YouTube, permette di avere accesso a canali esclusivi dedicati allo streaming e alle registrazioni: <#733208464972709898>, <#733207803858255890>, <#834373355553292348>, <#873112980659773500>, <#873112720868782151>.\n\n*Definizione ruoli:*\nLe parentesi **quadre []** nel nome del ruolo indicano un **ruolo di competenza** nel server, quali mod, admin e bot; le parentesi **graffe {}** indicano i **ruoli estetici**.")
            .setFooter("RUOLI-3  (Pagina 8/" + totalPage + ")")
        message.channel.send(page1).then(msg => {
            msg.react('<:frecciasinistra:916027890326458458>').then(r => {
                msg.react('<:frecciadestra:916023146451177503>')
                const reactIndietro = (reaction, user) => reaction.emoji.name === 'frecciasinistra' && user.id === message.author.id
                const reactAvanti = (reaction, user) => reaction.emoji.name === 'frecciadestra' && user.id === message.author.id
                const paginaIndietro = msg.createReactionCollector(reactIndietro)
                const paginaAvanti = msg.createReactionCollector(reactAvanti)
                paginaIndietro.on('collect', (r, u) => { //Freccia indietro
                    page--
                    page < 1 ? page = totalPage : ""
                    msg.edit(eval("page" + page))
                    r.users.remove(r.users.cache.filter(u => u === message.author).first())
                })
                paginaAvanti.on('collect', (r, u) => { //Freccia avanti
                    page++
                    page > totalPage ? page = 1 : ""
                    msg.edit(eval("page" + page))
                    r.users.remove(r.users.cache.filter(u => u === message.author).first())
                })
            })
        })
    };

    if (message.content.startsWith(".foto")) {
        if(cooldown.has(message.author.id)) {
            return;
        } else {
        if (message.content.trim() == ".foto") {
            var utente = message.member;
        }
        else {
            var utente = message.mentions.members.first();
            }
            if (!utente) {
                message.channel.send("Error 404/User not found")
            }
            var immaginep = new Discord.MessageEmbed()
                .setColor("#00ff00")
                .setTitle(utente.user.tag)
                .setDescription("Ecco l'**immagine profilo** di " + utente.toString() + ":")
                .setImage(utente.user.displayAvatarURL({
                    dynamic: true,
                    format: "png",
                    size: 512
                }))
            message.channel.send(immaginep);
            cooldown.add(message.author.id)
            setTimeout(() => {
                cooldown.delete(message.author.id)
        }, 15000);   
            }
    }

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
            return;
        } else {
            var gayperson = message.mentions.members.first();
            if(!gayperson) {
                gayperson = message.author.id;
            };
        
            var percentuale = ["10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "60", "65", "70", "75", "80", "85", "90", "95", "100", "104", "208", "312", "416", "over 9000"];

            var gayperc = Math.floor(Math.random() * percentuale.length)
            
            if(percentuale[gayperc]<100) {
                var percmanc =100-percentuale[gayperc];

                var gay = new Discord.MessageEmbed()
                .setColor("#ff56cf")
                .setTitle("Find Gay IA Machine")
                .setDescription("/Analyzing <@" + gayperson + ">\n/Build starting up/starting analyzing/checking gay or etero\n/Gay found/checking percentage/Build finished up/\nThe person (<@" + gayperson + ">) is " + percentuale[gayperc] + " % gay 🏳️‍🌈")
                .setThumbnail("https://snorkisaraitu.files.wordpress.com/2018/07/bandiera-lgbt.png")
                .setFooter("/Process exited/ETERO percentage is " + percmanc + " %")
                .setTimestamp();
                
            message.channel.send(gay);

            cooldown.add(message.author.id)
            setTimeout(() => {
                cooldown.delete(message.author.id)
            }, 30000);

            } else {

                var gay = new Discord.MessageEmbed()
                .setColor("#ff56cf")
                .setTitle("Find Gay IA Machine")
                .setDescription("/Analyzing <@" + gayperson + ">\n/Build starting up/starting analyzing/checking gay or etero\n/Gay found/checking percentage/Build finished up/\nThe person (<@" + gayperson + ">) is " + percentuale[gayperc] + " % gay 🏳️‍🌈")
                .setThumbnail("https://snorkisaraitu.files.wordpress.com/2018/07/bandiera-lgbt.png")
                .setFooter("/Error 404/ETERO not found")
                .setTimestamp();

            message.channel.send(gay);

            cooldown.add(message.author.id)
            setTimeout(() => {
                cooldown.delete(message.author.id)
        }, 30000);
            }
        }
    }

    if(message.content.startsWith(".clear")) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.send("Non puoi compiere un'azione così nobile!");
            return
        }
        if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            message.channel.send("Non posso eliminare i messaggi visto che non ho il permesso!");
            return
        }

        var numeromessaggi = message.content.slice(7);
        numeromessaggi = parseInt(numeromessaggi);

        if(!numeromessaggi) {
            message.channel.send("Inserisci un numero!");
            return
        }

        message.channel.bulkDelete(numeromessaggi, true);
        message.channel.send("Ho eliminato " + numeromessaggi + " messaggi da questo canale")
        .then(message => {
            message.delete({timeout:3000})
        })
    }

    if(message.content.startsWith(".mod")) {
        utenteKick = message.mentions.members.first();

        if(!message.member.hasPermission("KICK_MEMBERS" && "MANAGE_ROLES")) {
            message.channel.send("Cosa vuoi fare senza diritti?");
            return;
        }
        if(!utenteKick) {
            message.channel.send("Magari tagga qualcuno")
            return;
        }
        if (!message.mentions.members.first().kickable) {
            message.channel.send("Il mio ruolo è sotto il suo, non posso niente contro la sua potenza");
            return
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

//cosa fanno le 3 azioni di moderazione

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

//counter membri server, messaggi di benvenuto e messaggi quando qualcuno esce dal server

client.on("guildMemberAdd", (member) => {
    //counter +
    var utentiCount = member.guild.memberCount - 10;
    var canale = client.channels.cache.get("905510008010178590")

    canale.setName("🦽┊Membri: " + utentiCount)
    //messaggio di benvenuto
    var messaggio = ["500 cromosomi (Pazzo Sgravo)", "50 cromosomi (Ananas)", "78 cromosomi (Cane)", "254 cromosomi (Gamberetto)", "22 cromosomi (Fagiolo", "2 cromosomi (Formica)", "56 cromosomi (Elefante)", "64 cromosomi (Cavallo)", "60 cromosomi (Mucca)"];
    var random = Math.floor(Math.random() * messaggio.length)

    client.channels.cache.get("894917704610381834").send("👋 Hey " + member.toString() + ", benvenuto nel **" + member.guild.name + "**.\n🔢 Sei il **" + utentiCount + "° membro** del server.\n😎 Hai **" + messaggio[random] + "**.\n📃 Ti ricordo di **passare** in <#695213680656384010> e poi in <#894915662537957396> per prenderti i ruoli!\n✅ Buona permanenza!")
})

client.on("guildMemberRemove", member => {
    //counter -
    var utentiCount = member.guild.memberCount - 10;
    var canale = client.channels.cache.get("905510008010178590")

    canale.setName("🦽┊Membri: " + utentiCount)

    //messaggio in #automod quando qualcuno esce dal server
    var membroscarso = member.id;
    client.channels.cache.get("908464001153921064").send("<@" + membroscarso + "> è uscito dal server. Pensa che scarso!")
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
  port: 8080,
  path: "/youtube"
});
notifier.setup();
notifier.on('notified', data => {
    client.channels.cache.get("833272308671578143").send('${data.channel.name} just uploaded a new video titled: ${data.video.title}')
});
=======
const Discord = require("discord.js");
const client = new Discord.Client();
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

var utenteKick = null;

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
            return;
        } else {
            var gayperson = message.mentions.members.first();
            if(!gayperson) {
                gayperson = message.author.id;
            };
        
            var percentuale = ["10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "60", "65", "70", "75", "80", "85", "90", "95", "100", "104", "208", "312", "416", "over 9000"];

            var gayperc = Math.floor(Math.random() * percentuale.length)
            
            if(percentuale[gayperc]<100) {
                var percmanc =100-percentuale[gayperc];

                var gay = new Discord.MessageEmbed()
                .setColor("#ff56cf")
                .setTitle("Find Gay IA Machine")
                .setDescription("/Analyzing <@" + gayperson + ">\n/Build starting up/starting analyzing/checking gay or etero\n/Gay found/checking percentage/Build finished up/\nThe person (<@" + gayperson + ">) is " + percentuale[gayperc] + " % gay 🏳️‍🌈")
                .setThumbnail("https://snorkisaraitu.files.wordpress.com/2018/07/bandiera-lgbt.png")
                .setFooter("/Process exited/ETERO percentage is " + percmanc + " %")
                .setTimestamp();
                
            message.channel.send(gay);

            cooldown.add(message.author.id)
            setTimeout(() => {
                cooldown.delete(message.author.id)
            }, 30000);

            } else {

                var gay = new Discord.MessageEmbed()
                .setColor("#ff56cf")
                .setTitle("Find Gay IA Machine")
                .setDescription("/Analyzing <@" + gayperson + ">\n/Build starting up/starting analyzing/checking gay or etero\n/Gay found/checking percentage/Build finished up/\nThe person (<@" + gayperson + ">) is " + percentuale[gayperc] + " % gay 🏳️‍🌈")
                .setThumbnail("https://snorkisaraitu.files.wordpress.com/2018/07/bandiera-lgbt.png")
                .setFooter("/Error 404/ETERO not found")
                .setTimestamp();

            message.channel.send(gay);

            cooldown.add(message.author.id)
            setTimeout(() => {
                cooldown.delete(message.author.id)
        }, 30000);
            }
        }
    }

    if(message.content.startsWith(".clear")) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.send("Non puoi compiere un'azione così nobile!");
            return
        }
        if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            message.channel.send("Non posso eliminare i messaggi visto che non ho il permesso!");
            return
        }

        var numeromessaggi = message.content.slice(7);
        numeromessaggi = parseInt(numeromessaggi);

        if(!numeromessaggi) {
            message.channel.send("Inserisci un numero, non porcheria!");
            return
        }

        message.channel.bulkDelete(numeromessaggi, true);
        message.channel.send("Ho eliminato " + numeromessaggi + " messaggi da questo canale")
        .then(message => {
            message.delete({timeout:3000})
        })
    }

    if(message.content.startsWith(".mod")) {
        utenteKick = message.mentions.members.first();

        if(!message.member.hasPermission("KICK_MEMBERS" && "MANAGE_ROLES")) {
            message.channel.send("Cosa vuoi fare senza diritti?");
            return;
        }
        if(!utenteKick) {
            message.channel.send("Magari tagga qualcuno")
            return;
        }
        if (!message.mentions.members.first().kickable) {
            message.channel.send("Il mio ruolo è sotto il suo, non posso niente contro la sua potenza");
            return
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

//cosa fanno le 3 azioni di moderazione

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

//counter membri server, messaggi di benvenuto e messaggi quando qualcuno esce dal server

client.on("guildMemberAdd", (member) => {
    //counter +
    var utentiCount = member.guild.memberCount - 10;
    var canale = client.channels.cache.get("905510008010178590")

    canale.setName("🦽┊Membri: " + utentiCount)
    //messaggio di benvenuto
    var messaggio = ["500 cromosomi (Pazzo Sgravo)", "50 cromosomi (Ananas)", "78 cromosomi (Cane)", "254 cromosomi (Gamberetto)", "22 cromosomi (Fagiolo", "2 cromosomi (Formica)", "56 cromosomi (Elefante)", "64 cromosomi (Cavallo)", "60 cromosomi (Mucca)"];
    var random = Math.floor(Math.random() * messaggio.length)

    client.channels.cache.get("894917704610381834").send("👋 Hey " + member.toString() + ", benvenuto nel **" + member.guild.name + "**.\n🔢 Sei il **" + utentiCount + "° membro** del server.\n😎 Hai **" + messaggio[random] + "**.\n📃 Ti ricordo di **passare** in <#695213680656384010> e poi in <#894915662537957396> per prenderti i ruoli!\n✅ Buona permanenza!")
})

client.on("guildMemberRemove", member => {
    //counter -
    var utentiCount = member.guild.memberCount - 10;
    var canale = client.channels.cache.get("905510008010178590")

    canale.setName("🦽┊Membri: " + utentiCount)

    //messaggio in #automod quando qualcuno esce dal server
    var membroscarso = member.id;
    client.channels.cache.get("908464001153921064").send("<@" + membroscarso + "> è uscito dal server. Pensa che scarso!")
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
>>>>>>> 4f82b6e9f6df9b94356bb69159631a32f3f562db
