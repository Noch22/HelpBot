const Discord = require('discord.js');
const bot = new Discord.Client();
 
var prefix = ("=");

bot.on('ready', function() {
    bot.user.setGame('Nouvelles commandes ! => =help')
    console.log("Connected");
    

});


bot.login(process.env.TOKEN);


bot.on('message', message => { 
    if (message.content === prefix + "regles"){
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu ne peux pas faire ça malheureux !");
    var embed = new Discord.RichEmbed()
        .setTitle("⚠️ Règles ⚠️")
        .setDescription("Les règles sont simples :")
        .addField("Être poli(e)", "Réspecter tout le monde", true)
        .addField("Respecter le staff", "Ecouter ce qu'on vous dit et le respecter", true)
        .addField("Ne pas insulter quiconque", "Sous peine de bannissement", true)
        .addField("N'hésitez pas :", "ABONNEZ-VOUS A MA CHAINE [YOUTUBE](https://www.youtube.com/c/NochYoutube)", true)
        .setColor('0x#42f49b')
        .setThumbnail("https://cdn.pixabay.com/photo/2012/04/12/20/12/x-30465_960_720.png")
    message.channel.sendEmbed(embed);
}

if (message.content.startsWith(prefix + "sondage")) {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu ne peux pas faire ça malheureux !");
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ")
        var embed1 = new Discord.RichEmbed()
        .setTitle("Sondage")
        .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
        .setColor("0xB40404")
        .setTimestamp()
    message.guild.channels.find("name", "general").sendEmbed(embed1)
    .then(function (message) {
        message.react("✅")
        message.react("❌")
    
    }).catch(function() {
    });
    }
    
  if(message.content === prefix + "help"){
        var embed2 = new Discord.RichEmbed()
        .setTitle("📌 Commandes 📌")
        .addField("_ _", "_ _")
        .addField("_ _", "_ _")
        .addField("Help", "Afficher ce message : =help")
        .addField("_ _", "_ _")
        .addField("Report", "Raporter un joueur aux modérateurs et plus : =report [@utilisateur] [raison]")
        .addField("_ _", "_ _")
        .addField("Botinfo", "Voir les informations du bot : =botinfo")
        .addField("_ _", "_ _")
        .addField("Serveur info", "Voir les informations du serveur avec : =serverinfo")
        .addField("_ _", "_ _")
        .addField("Invitation", "Inviter le bot sur son propre serveur via la commande : =invite")
        .addField("_ _", "_ _")
        .addField("8ball", "Pose moi une question, je t'y répondrai ;) =8ball [question]")
        .addField("_ _", "_ _")
        .addField("Créateur", "Voir les infos du créateur avec =createur")
        .addField("_ _", "_ _")
        .setFooter("HelpBot | Nσcн'#9400")
        .setColor("#00c7ff")
      
        message.author.sendMessage(embed2);
        message.channel.send(`${message.author}, les commandes vous on été envoyer en privé.`)
        }

    if(message.content === prefix + "help"){
        if(message.member.hasPermission("KICK_MEMBERS")){
        var modembed = new Discord.RichEmbed()
        .setTitle("__❌ Modération ❌__")
        .addField("_ _", "_ _")
        .addField("Kick", "Permet de kick un utilisateur : =kick [@utilisateur] [raison]")
        .addField("_ _", "_ _")
        .addField("Ban", "Permet de bannir un utilisateur : =ban [@utilisateur] [raison]")
        .addField("_ _", "_ _")
        .addField("Règles", "Permet de publier des règles 'de bases', : =regles")
        .addField("_ _", "_ _")
        .addField("Sondage", "Permet de faire un sondage dans le channel `general` : =sondage [sondage]")
        .addField("_ _", "_ _")
        .setFooter("HelpBot | By Nσcн'#9400")
        .setColor("#ff0000")
        
        message.author.sendMessage(modembed);
    }
}

    if(message.content === prefix + "invite"){
        var invbed = new Discord.RichEmbed()
        .setTitle("Invite moi !👌")
        .addField("_ _", "_ _")
        .addField("⬇️ Clique dessous ⬇️", "_ _")
        .addField("_ _", "_ _")
        .addField("_ _", "**_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ [✅](https://discordapp.com/api/oauth2/authorize?client_id=442428607583748117&permissions=268643430&scope=bot)**")
        .addField("_ _", "_ _")
        .addField("⬇️Veuillez lire ce Google Doc pour le bon fonctionnement du bot.⬇️", "**_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ [📌](https://docs.google.com/document/d/18k3XueExGDpX8fYjaFWENwbck1YCFRcKi4wPF-OPo0w/edit#heading=h.84h9h64i8f1l)**")
        .setFooter("Helpbot | By Nσcн'#9400")
        message.channel.send(invbed);

    }



    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
    if(cmd === `${prefix}kick`){
  
      //!kick @daeshan askin for it
  
      let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!kUser) return message.channel.send("Impossible de trouver l'utilisateur !");
      let kReason = args.join(" ").slice(22);
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu ne peux pas faire ça malheureux !");
      if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cette personne ne peux pas être kick !");
  
      let kickEmbed = new Discord.RichEmbed()
      .setDescription("~Kick~")
      .setColor("#e56b00")
      .addField("Utilisateur expulsé", `${kUser} with ID ${kUser.id}`)
      .addField("Expulsé par", `<@${message.author.id}> with ID ${message.author.id}`)
      .addField("Expulsé dans", message.channel)
      .addField("Expulsé à", message.createdAt)
      .addField("Pour", kReason);
  
      let kickChannel = message.guild.channels.find(`name`, "incidents");
      if(!kickChannel) return message.channel.send("Can't find incidents channel.");
      message.guild.member(kUser).kick(kReason);
      kickChannel.send(kickEmbed);
      message.guild.channels.find("name", "general").send(`${kUser} expulsé pour ${kReason} :angry: `)
  
      return;
    }
  
    if(cmd === prefix + `ban`){
  
      let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!bUser) return message.channel.send("Impossible de trouver l'utilisateur !");
      let bReason = args.join(" ").slice(22);
      if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Tu ne peux aps faire ça malheureux !");
      if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cette personne ne peut pas être banni(e) !");
  
      let banEmbed = new Discord.RichEmbed()
      .setDescription("~Ban~")
      .setColor("#bc0000")
      .addField("Utilisateur banni", `${bUser} id : ${bUser.id}`)
      .addField("Banni par", `<@${message.author.id}> id : ${message.author.id}`)
      .addField("Banni dans le channel ", message.channel)
      .addField("Banni à", message.createdAt)
      .addField("Banni Pour", bReason);
  
      let incidentchannel = message.guild.channels.find(`name`, "incidents");
      if(!incidentchannel) return message.channel.send("Je ne peux pas trouver le channel reports");
  
      message.guild.member(bUser).ban(bReason);
      incidentchannel.send(banEmbed);
      message.guild.channels.find(`name`, "general").send(`:warning: L'utilisateur ${bUser} à été banni pour ${bReason} :warning: `)
  
  
      return;
    }
  
  
    if(cmd === prefix + `report`){
  
      //!report @ned this is the reason
  
      let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!rUser) return message.channel.send("Utilisateur Introuvable");
      let rreason = args.join(" ").slice(22);
  
      let reportEmbed = new Discord.RichEmbed()
      .setDescription("Reports")
      .setColor("#15f153")
      .addField("Utilisateur report", `${rUser} with ID: ${rUser.id}`)
      .addField("Report par", `${message.author} with ID: ${message.author.id}`)
      .addField("Dans le salon", message.channel)
      .addField("À", message.createdAt)
      .addField("Pour", rreason);
  
      let reportschannel = message.guild.channels.find(`name`, "reports");
      if(!reportschannel) return message.channel.send("Je ne peux pas trouver le channel reports");
  
  
      message.delete().catch(O_o=>{});
      reportschannel.send(reportEmbed);
  
      return;
    }
  
    if(cmd === prefix + `botinfo`){
      let bicon = bot.user.displayAvatarURL;
      let botembed = new Discord.RichEmbed()
      .setTitle("Bot Information")
      .setColor("#15f153")
      .setThumbnail(bicon)
      .addField("Nom du bot", bot.user.username)
      .addField("Crée le", bot.user.createdAt)
      .addField("Présent sur :", `${bot.guilds.size} serveurs`)
      .addField("Crée par", "Nσcн'#9400")
      .setFooter("Helpbot | By Nσcн'#9400");
  
      message.channel.send(botembed);
    }

    if(cmd === prefix +"serverinfo"){
        let servicon = message.guild.iconURL
        let serembed = new Discord.RichEmbed()
        .setTitle("Serveur Informations")
        .setColor("#15f153")
        .setThumbnail(servicon)
        .addField("Nom du serveur", `${message.guild.name} (${message.guild.nameAcronym})`, true)
        .addField("Propriétaire du serveur", message.guild.owner.user.tag, true)
        .addField("Membres", message.guild.memberCount)
        .addField("Nom du salon AFK", message.guild.afkChannel)
        .setFooter("Helpbot | By Nσcн'#9400");
    message.channel.send(serembed);
    }

    if (message.content.startsWith(prefix + "8ball")) {
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ")
        if(!args[1]) return message.channel.send("Pose moi une vrai question ;)")
        message.delete(10);
        let reponses = ["Oui", "Non", "Peut-être", "Je n'en sais rien !", "Alors là ! tu me pose une colle ! ;)", "Je ne dirais rien :smirk:", "Ah ! je l'ai sur le bout de la langue !"];
        let result = Math.floor(Math.random() * reponses.length)    
        var embed1 = new Discord.RichEmbed()
            .setTitle(":8ball: 8Ball ! :8ball:")
            .addField("Ta question :", thingToEcho, true)
            .addField("Ma réponse :", reponses[result], true)
            .setColor("#c2f204")
            .setFooter("Helpbot | By Nσcн'#9400")
            .setTimestamp();
        message.channel.sendEmbed(embed1).catch(function() {
        });
        }

       if(message.content.startsWith(prefix + "createur")) {
           var crem = new Discord.RichEmbed()
           .setTitle(":robot: Créateur :robot:")
           .addField("_ _", "_ _")
           .addField("Créer par ", "Noch'")
           .addField("_ _", "_ _")
           .addField("Ses résaux sociaux", "_ _")
           .addField("Discord", "Nσcн'#9400")
           .addField("YouTube", "**_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ [✅](https://www.youtube.com/c/NochYoutube)**")
           .setFooter("Helpbot | By Nσcн'#9400");

           message.channel.send(crem);
       }
});
