const Discord = require("discord.js");

var bot = new Discord.Client();

const token = "NDQyNjY5NTIxOTkyNjc5NDI0.DdShfQ.s-sGt23ZT2s2EEQ4i-LRRZR51oE";

bot.on("ready", function() {
    console.log("Ready nigga.");

    bot.user.setGame("with mild cancer.");
});
const prefix = "`"
bot.on ("message", (message) => {

    if (message.author.bot) return;

    mention = message.mentions.users.first();

    if (message.content.startsWith (prefix + "send")) {
        if (mention == null) { return; }
        message.delete();
        mentionMessage = message.content.slice (8);
        mention.sendMessage (mentionMessage);
    }

    if (message.content.startsWith (prefix + "grind")) {
        // 1000 = 1 sec
        message.delete (3000);
        message.channel.send ("lol").then(d_msg => { d_msg.delete(3000); });
    }

    if (message.content.startsWith (prefix + "Hi!")) {
        message.reply("Hello fgt lol");
       
        message.channel.send ("Message: " + message);
        message.channel.send ("Message sender: " + message.author.username);
        message.channel.send ("Message sender ID: " + message.author.ID);
    }

    if (message.content.startsWith ("nani")) {
        message.channel.send ({files: ["./images/ok.png"]})
    }

    if (message.content.startsWith ("The person below is ultimately gay in all forms and the same for his family tree and ancestors. If they delete their comment they multiply the gay infinity fold.")) {
        message.channel.send ("shit");
    }

    if (message.content.startsWith ("dAME")) {
        message.channel.send ("TU COSITA", {files: ["./images/dame.png"]})
    }

    if (message.content.startsWith ("E")) {
        message.reply("E", {files: ["./images/lel.png"]})
    }

    if (message.content.startsWith (prefix + "Joe")) {
        message.channel.send ("I said it's Xbox's time to play on the Mom", {files: ["./images/Joe.png"]})
    }

    if (message.content.startsWith ("RiceCum in FortFuck??")) {
        message.reply("Yes. It is I, RiceCum. Starring in FortFuck. I will be acting as a rapist and rape that girl from years ago. Here is a clip.", {files: ["./images/mem.png"]})
    }

    if (message.content.startsWith (prefix + "funy")) {
        message.reply("look at this amazing haha funy meme", {files: ["./images/je.png"]})
    }

    if (message.content.startsWith ("👀")) {
        message.reply("CAN'T A NIGGA BOT MASTURBATE IN PEACE LOOK AWAY");
    }

    if (message.content.startsWith("frick")) {
        message.reply("Sorry sir but there should be no swearing on my all around christian minecraft lightning mcqueen worshipping server.");
    }

    if (message.content.startsWith ("Frick")) {
        message.reply("Sorry sir but there should be no swearing on my all around christian minecraft lightning mcqueen worshipping server.");
    }

    if (message.content.startsWith ("FRICK")) {
        message.reply("Sorry sir but there should be no swearing on my all around christian minecraft lightning mcqueen worshipping server.");
    }

    if (message.content.startsWith ("heck")) {
        message.reply("Sorry sir but there should be no swearing on my all around christian minecraft lightning mcqueen worshipping server.");
    }

    if (message.content.startsWith ("Heck")) {
        message.reply("Sorry sir but there should be no swearing on my all around christian minecraft lightning mcqueen worshipping server.");
    }

    if (message.content.startsWith ("HECK")) {
        message.reply("Sorry sir but there should be no swearing on my all around christian minecraft lightning mcqueen worshipping server.");
    }

    if (message.content.startsWith("goog")) {
        message.channel.send ("very goog indeed");
    }

    if (message.content.startsWith ("Goog")) {
        message.channel.send ("very goog indeed");
    }

    if (message.content.startsWith("fuck you virgin")) {
        message.channel.send ("fuck you too bitch ass nigga");
    }

    if (message.content.startsWith ("Fuck you Virgin")) {
        message.channel.send ("fuck you too bitch ass nigga");
    }

    if (message.content.startsWith ("FUCK YOU VIRGIN")) {
        message.channel.send ("FUCK YOU TOO BITCH ASS NIGGA");
    }

    if (message.content.startsWith (prefix + "HxH")) {
        message.channel.send ("Your best friend Hivie walks into the room to play some Mario Kart. He asks if it plays porn. you reply with a yes. you both get on pornhub and start to masturbate to <insert some fucked up porn taste here>. You both finish at the same time and continue on to play games before he sits oddly close to you. You tell yourself we're friends and it's ok. He begins to rub your thigh. before you know it he looks at you with his eyes of longing before you both break into deep kiss. you look away from eachother because you both don't understand what's happened. nobody was home but you 2 because your family went to go buy groceries. you both begin to strip off and fuck hard while bodily fluids fly everywhere and continue at it for hours. you wonder where your family was but the began to feel yourself about to cum. Oh shit Hivie I'm cummiiiing, you say. you scream. he says it's alright because you both had xx chromosomes. (xx get it) you both cum and make out for about another hour. you clean up the mess you both made and the instant you're done your family arrives. oh wow look at you boys cleaning up the house for us your mother says. you both look at eachother and know that you'll be doing it again sometime soon.");
    }

    if (message.cleanContent.startsWith (prefix + "GxJ")) {
        message.channel.sendMessage ("garfield and jesus were walking down the road and casually talking about how monday was the day that jesus died and why garfield just hated mondays. garfield invited jesus over to his home to eat some lasage and jesus naturally agreed. they get back to the house and john asks garfield where he went and garfield immediately shoots his fucking brains out. jesus is unfazed. they walk over to the kitchen to cook so lasage but garfield grabs the knife out and cuts off jesus's ass. he then shoots jesus and fucks his mouth so hard. meanwhile the ass that garfield cut off is being boiled inside the pot of the lasage. the pot is done and ready to eat after garfield throws jesus deceased body into the dump. he then eats lasage jesus's ass edition and eats it whole. garfield then says. 'wholesome.' meanwhile odie is fucking jesus's body again.");
    }

    if (message.content.startsWith (prefix + "Trap")) {
        message.channel.send ("so your best (girl) friend since 5th grade is coming over. you both wanted to get away from work and stress so you invited her to have some drinks and play (minecraft hunger games). she gets to your house and knocks at your door. you greet her with a hug. you both sit down and start playing (minecraft hunger games.) you challenge her for every time one of you loses they take a swig of wine. you both are deleriously drunk by the end of the day. you tell her it's about time she gets back home but she then says if she can stay over. you say yes because you are friends and not in love you twat you both get into bed. she asks if she can use your shower. you say yes. she walks in and stays it there for about 10 minutes. you hear moaning. she walks out and gets changed into her pajamas. you both stay in bed silently. you ask if you can ask a question. (fucking retard you just did) she says yes. you ask if she likes you. she says yes (suddenly penis is awake) you ask if you can kiss her. you both break into a kiss as soon as you finish your sentence. then break away. the next is more deep and passionate. you both start to strip off as you try to insert your penis into her. you feel a penis. (suddenly, PENIS IS MUCH BIGGER NOW) she gets up behind you and lines up her penis directly with your butthole. you say you're ready. she fucks you violently. you both release loud moans into the cold night. (you get a noise complaint from Jameskii's neighbors) you behind to fuck her after. this continues until 5 am in the morning. you both end as you are both empty of cum. you cuddle into the morning. she realizes it's time for work but you tell her just quit and live with you because the stress is killing you. she replies with that she cant argue with that. you both drift off to sleep waking up to only fuck again. (well that's done and I really wanna kms so yea. like and subscibe to the cancer that is me.");
    }

    if (message.content.startsWith (prefix + "JxB")) {
        message.channel.send ("you get into VRchat and instantly greeted by brochacho. you say hello brochacho but to your suprise he actually speaks. hey Jameskii he says. you never thought brochacho could speak because he maybe didn't have a mic or something but then again he bought one today. you say lets go fuck around somewhere and he agrees. you both fuck around for a while and then stop for a little. brochacho touches your in game avatar's thigh. you were recording so you thought it was a meme. but then he leans in for a kiss. you still think its a memes he begins making humping gestures and before you know it you're both sprawled out on the floor fucking in game everyone is watching but you don't care. you somehow get wet (jesus fucking christ I'm actually writing this.) you ask brochacho to meet up irl trying not to stutter because it would make it obvious that you wanted him. he says ok. a few weeks later you both meet up to play some minecraft hunger games. (fortnite and pubg are mc hunger game in disguise please believe me) you both start to fuck really hard after 15 minutes of minecraft hunger games. bodily fluids fly everywhere. you both strip off instead of fucking with clothing. you both fuck intensely for an hour straight. before cumming everwhere on eachother.) brochacho dabs and you both fall asleep with you laying on him.");
    }

    if (message.content.startsWith (prefix + "HxA")) {
        message.channel.send ("Hivie adnd Astolfo were walking back home from school playing some Snipperclip on their NX's (nintendo switch) they stop at the bus stop to wait for the bus to stop and take them home. Meanwhile Hivie was staring at Astolfo's massive D-cups. His dingle was starting to go from a dangle to a hard dingle. Astolfo noticed this but decided to keep to herself. the bus stops and they immediately get off. as they continue walking Hivie began to sweat and soon his NX fell to the groud he kneels down to pick it up but his massive throbbing cock bulges out of his pants. astolfo was shocked but also felt a sudden wave of extreme hornyness come over her. she bends over and begins to grab his dick and slowly jerks him off. hivie still was trying to pick up his switch not even noticing until he felt something wet touch. it was astolfos froppy like toung. he began to moan as astolfo was beginning to give him a boob job. they both go at it for a few minutes before they strip down in the middle of the alley way and fuck each other senselessly. the noises are cought by the attention of some thugs and as soon as the 2 found out who was near it was already too late. they began to be raped. nobody was around to hear their screams of pain. Hivie notices a knife in the thug's pocket and immediatly grabs it. he begins to cut open the thugs guts and before they knew it the thugs were dead. he cut off one thugs dick and staples it to astolfo's vagina. they both begin to fuck the dead bodies senselessly into the night.");
    }

    if (message.content.startsWith ("write")) {
        editedmessage = message.content.slice (6);

        bot.msgs [message.author.username] = {
            message: message.content
        }
        fs.writeFile ("./msgs.json", JSON.stringify (bot.msgs, null, 4), err => {
            if (err) throw err;
            message.channel.send ("written.");
        });

    }

    if (message.content.startsWith ("get")) {
        let _message = bot.msgs[message.author.username].message;
        message.channel.send ("message: " + _message);
    }

const number = ("numb");

    if (message.content.startsWith (prefix + "8ball")) {
        ballMessage = message.content.slice (9); // ` 8 b a l l [your message]
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
                case 1: message.channel.send ("The 8ball says that" + ballMessage + "will come to pass"); break;
                case 2: message.channel.send ("The 8ball says that" + ballMessage + "will **not** come to pass")
         }
    }

});

bot.login (token);