const mySecret = process.env['DISCORD_TOKEN']

const Discord = require("discord.js");
const config = require("./config.js");
const client = new Discord.Client({ 
  intents: 
  Object.values(Discord.GatewayIntentBits)
  }) 

client.on('ready', client => {
  console.log(`${client.user.tag}`)
});

client.on('messageCreate', async message => {
  if(message.content == 'おでんと言えば'){
    message.channel.send("だいこん！")
  };
  if(message.content == `こんにちは`){
    message.channel.send("こんにちは!")
  }
});

client.login(config.token);
