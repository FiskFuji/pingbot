const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', async message => {
  if (message.author.bot) return;

  if (message.content === 'ping me') {
    let maxPingies = 3;

    client.user.setActivity(`Pinging ${message.author.username}`);
    console.log(`Pinged: ${message.author.username}`);
    message.channel.send('You pinged?');

    let pingies = 0;
    let intervalId = setInterval(async() => {
      message.channel.send(`<@${message.author.id}`);

      if (++pingies === maxPingies) {
        clearInterval(intervalId);
      }
    }, 1000);
  }

  if (message.content === 'ping me daddy') {
    let maxPingies = Math.floor(Math.random() * 10) + 1;  // no 0 pings

    client.user.setActivity(`Can't get enough pings`);
    console.log(`Pinging: ${message.author.username} ${pingies} times.`);
    message.chanel.send(`Ooooh, more pings!`);

    let pingies = 0;
    let intervalId = setInterval(async() => {
      message.channel.send(`<@${message.author.id}`);

      if (++pingies === maxPingies) {
        clearInterval(intervalId);
      }
    }, 1000);
  }
});

client.login(process.env.BOT_TOKEN);
