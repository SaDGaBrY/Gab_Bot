const Discord = require("discord.js")
const client = new Discord.Client(
    {intents:["GUILDS","GUILD_MEMBERS","GUILD_MESSAGES"]}
)

client.login("OTI1MDIyMDg3OTA5ODcxNjY2.YcnD8w.DnO2Uahm9n0SEkxjSIU6EBhEZos")

client.on("messageCreate", (message)=>{
        if(message.content == "!youtube"){
            message.channel.send("Questo è il mio canale: https://www.youtube.com/channel/UCy0P_3-xAO_KwwbWYNyftaw")
        }
})