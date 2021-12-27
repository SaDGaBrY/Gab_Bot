const Discord = require("discord.js")
const client = new Discord.Client(
    {intents:["GUILDS","GUILD_MEMBERS","GUILD_MESSAGES"]}
)

client.login(process.env.token)

client.on("messageCreate", (message)=>{
        if(message.content == "!youtube"){
            message.channel.send("Questo è il mio canale: https://www.youtube.com/channel/UCy0P_3-xAO_KwwbWYNyftaw")
        }
})