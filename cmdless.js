exports.cmdls = async function (message, msg, speedy, console, kizura , supress) {
    // RP Expressions
    if (msg.startsWith("(smile)")) { // look into this later
        message.delete().catch(O_o=>{}); 
        console.log(`# ${message.author.username} is smiling!`)
        if (!message.mentions.members.first()) {const msg = await message.channel.send(`***${message.member.displayName} is smiling!***`, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/870317910671904786/882637366358052944/unknown-28.png"}}})
        supress(msg)}
    }

    if (msg.startsWith("allgood")) { // look into this later
        message.delete().catch(O_o=>{}); 
        //console.log(`# ${message.author.username} thinks this is also fine`)
        if (!message.mentions.members.first()) 
        var randomimg = Math.floor(Math.random() * 2) + 1;
        console.log(randomimg)
        if (randomimg === 1) {   // Rand Option 1
        const msg = await message.channel.send(`***${message.member.displayName} Thinks This is Also Fine***`, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/805999578687471616/807301958682542080/valorant-spray-this-is-also-fine.png"}}})
        supress(msg)
        console.log(`# ${message.author.username} thinks this is also fine [Phoenix]`)
        }
        if (randomimg === 2) {   // Rand Option 2
        const msg = await message.channel.send(`***${message.member.displayName} Thinks This is Also Also Fine***`, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/832805651309789194/839847402114777128/ThisIsAlsoFine-1024x813.png"}}})
        supress(msg)
        console.log(`# ${message.author.username} thinks this is also also fine [Raze]`)
        }
    }

    if (msg.startsWith("jetth")) { // look into this later
        message.delete().catch(O_o=>{}); 
        console.log(`# ${message.author.username} is sending you love!`)
        if (!message.mentions.members.first()) {const msg = await message.channel.send(`***${message.member.displayName} is sending you love!***`, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/805999578687471616/815201328468066324/valorant-spray-3.png"}}})
        supress(msg)}
    }
    
    if (msg.startsWith("!salt")) { // look into this later
        message.delete().catch(O_o=>{}); 
        console.log(`# ${message.author.username} can smell some salt in the air!`)
        if (!message.mentions.members.first()) {const msg = await message.channel.send(`***${message.member.displayName} can smell some salt in the air!***`, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/805999578687471616/815206321972052058/Salt_Shaker.gif"}}})
        supress(msg)}
    }

    if (msg.startsWith("rebibe")) { // look into this later
        message.delete().catch(O_o=>{}); 
        console.log(`# ${message.author.username} is wondering how to revive somone!`)
        if (!message.mentions.members.first()) {const msg = await message.channel.send(`***${message.member.displayName} is wondering how to revive somone!***`, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/805999578687471616/817375938144239627/rebibe.png"}}}) 
        supress(msg)}
    }

    if (msg.startsWith("mbar")) { // look into this later
        message.delete().catch(O_o=>{}); 
        console.log(`# ${message.author.username} thinks this is Embarrassing`)
        if (!message.mentions.members.first()) {const msg = await message.channel.send(`***${message.member.displayName} thinks this is Embarrassing***`, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/805999578687471616/817375935590170644/embar.png"}}})
        supress(msg)}
    }

    if (msg.startsWith("meyes")) { // look into this later
        message.delete().catch(O_o=>{}); 
        console.log(`# ${message.author.username} just burnt their eyes!`)
        if (!message.mentions.members.first()) {const msg = await message.channel.send(`***${message.member.displayName} just burnt their eyes!***`, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/805999578687471616/817376390629818438/meyes.png"}}})
        supress(msg)}
    }

    if (msg.startsWith("jettq")) { // look into this later
        message.delete().catch(O_o=>{}); 
        console.log(`# ${message.author.username} has a questioning look!`)
        if (!message.mentions.members.first()) {const msg = await message.channel.send(`***${message.member.displayName} has a questioning look!***`, {embed: {color: 16758784, image: {url: "https://cdn.discordapp.com/attachments/805999578687471616/815213487928115210/Jett_Q.png"}}})
        supress(msg)}
    }
};