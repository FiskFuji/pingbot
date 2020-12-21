const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', async message => {
  if (message.author.bot) return;

  function sleep(milliseconds) {
    return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
    });
  }

  if (message.content === 'ping me') {
    client.user.setActivity(`Pinging ${message.author.username}`);
    console.log(`Pinged: ${message.author.username}`);

    message.channel.send('You pinged?');
    sleep(2000);
    message.channel.send(`<@${message.author.id}`);
  }

  if (message.content === 'ping me daddy') {
    let pingies = Math.floor(Math.random() * 5) + 1;  // no 0 pings

    client.user.setActivity(`Can't get enough pings`);
    console.log(`Pinging: ${message.author.username} ${pingies} times.`);

    for (let i = 0; i < pingies; ++i) {
      message.channel.send(`<@${message.author.id}`);
      sleep(1000);
    }
  }
});

client.login(process.env.BOT_TOKEN);
