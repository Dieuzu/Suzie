exports.helpMe = async function (command, message, args, speedy) {
    if (command === "helpme") { // Help Me Command
        const sayMessage = args.join(" ");
        message.delete().catch(O_o=>{}); 
        
        message.author.send(`Heya ${message.author}!`, {
          "embed": {"title": "List of Commands", "description": "List of Commands to use the '๐๐๐๐๐ค๐ฃ (๐๐๐-๐ฎ๐ญ)' Bot! Enjoy!", "color": 16758784,"timestamp": message.createdAt, "image": {
              "url": "https://cdn.discordapp.com/attachments/832805651309789194/832833919920504882/FINAL.gif" // <===image Link here
            },
            "fields": [
              {"name": "!helpme",       "value": "You already know how this works!"},
              {"name": "!version",      "value": "Find out what Version i am!"},
              {"name": "!hug",          "value": "hug someone and show them they matter"},
              {"name": "!slap",         "value": "Slap somone today!"},
              {"name": "!kiss",         "value": "this should be obvious right ?"},
              {"name": "!kill",         "value": "WATCH THIS"},
              {"name": "!ping",         "value": "Pong? Wtf"},
              {"name": "!getid",        "value": "!getid @somone to get their id"},
              {"name": "!chill",        "value": "Gives the [๐Chill] Role"},
              {"name": "!gamer",        "value": "Gives the [๐ฎGamer] Role"},
              {"name": "!valorant",     "value": "Gives the [๐ฉ๐๐๐ข๐ฅ๐๐ก๐ง] Role"},
              {"name": "!league",       "value": "Gives the [๐๐ข๐] Role"},
              {"name": "!osu",          "value": "Gives the [๐ข๐ฆ๐จ] Role"},
              {"name": "!paimon",       "value": "Gives the [๐๐ฒ๐ป๐๐ต๐ถ๐ป ๐๐บ๐ฝ๐ฎ๐ฐ๐] Role"},
              {"name": "!overwatch",    "value": "Gives the [๐ข๐๐ฒ๐ฟ๐๐ฎ๐๐ฐ๐ต] Role"},
              {"name": "!apex",         "value": "Gives the [๐๐ฝ๐ฒ๐ ๐๐ฒ๐ด๐ฒ๐ป๐ฑ๐] Role"},
              {"name": "!spellbreak",   "value": "Gives the [๐ฆ๐ฝ๐ฒ๐น๐น๐ฏ๐ฟ๐ฒ๐ฎ๐ธ] Role"},
              {"name": "!minecraft",    "value": "Gives the [๐?๐ถ๐ป๐ฒ๐ฐ๐ฟ๐ฎ๐ณ๐] Role"},
              {"name": "!on",           "value": "oh no , no no no no"},
              {"name": "!salt",         "value": "Salty ?"},
            ]
          } 
        });

        if (message.author.id == speedy)  
          message.author.send(`You are Special ${message.author}! So here u go..`, {
            "embed": {"title": "A List of Commands Exclusive To You", "color": 16758784, "timestamp": message.createdAt, "image": {
                "url": "https://cdn.discordapp.com/attachments/832805651309789194/832833729072332870/embar.png" // <===image Link here
              },
              "fields": [
                {"name": "!say",        "value": "Make the bot say stuff!"},
                {"name": "!status",     "value": "Online/Idle/Invisible/Dnd"},
                {"name": "!stream",     "value": "Sets bot on streamer mode"},
                {"name": "!playing",    "value": "Sets bot on playing mode"},
                {"name": "!watching",   "value": "Sets bot on watching mode"},
                {"name": "!listening",  "value": "Sets bot on listening mode"},
                {"name": "!wipe",       "value": "mass deletes msgs (ex. !wipe 20)"},
                {"name": "!harem",      "value": "Oh boy! you are in trouble!"},
              ]
            }
        });
    }
};