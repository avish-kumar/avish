const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTg1MTU3NTk5MDU0NTI4NTIy.XRx8XQ.vWzlvG7NaQ7aAAoc_ZeC0mZ2C_E);//where BOT_TOKEN is the token of our bot 
