const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('We good!');

  client.user.setPresence({
    activity: {
      name: "don't ping me so hard.. uwu",
      type: 0,
    }
  });
});

client.on('message', async message => {
  function sleep(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }

  if (message.author.bot) return;
  let pingChannel = client.channels.find(c => c.name === 'pingies');

  if (message.content.toLowerCase() === 'ping me') {
    if (!pingChannel) return;
    let maxPingies = 3;

    console.log(`Pinged: ${message.author.username}`);
    await sleep(5000);
    pingChannel.send('You pinged? (3)');

    let pingies = 0;
    let intervalId = setInterval(async() => {
      pingChannel.send(`<@${message.author.id}>`);

      if (++pingies === maxPingies) {
        clearInterval(intervalId);
      }
    }, 1000);
  }

  if (message.content.toLowerCase() === 'ping me daddy') {
    if (!pingChannel) return;
    let maxPingies = Math.floor(Math.random() * 10) + 1;  // no 0 pings

    console.log(`Pinging: ${message.author.username} ${maxPingies} times.`);
    await sleep(5000);
    pingChannel.send(`Moar pings! (${maxPingies})`);

    let pingies = 0;
    let intervalId = setInterval(async() => {
      pingChannel.send(`<@${message.author.id}>`);

      if (++pingies === maxPingies) {
        clearInterval(intervalId);
      }
    }, 1000);
  }

  if (message.content.toLowerCase() === 'pingies uwu' || message.content.toLowerCase() === 'pingies? uwu') {
    if (!pingChannel) return;
    let maxPingies = Math.floor(Math.random() * 35) + 1;  // no 0 pings

    console.log(`Pinging: ${message.author.username} ${maxPingies} times.`);
    await sleep(5000);
    pingChannel.send(`uwu yus pingies (${maxPingies})`);

    let pingies = 0;
    let intervalId = setInterval(async() => {
      pingChannel.send(`<@${message.author.id}>`);

      if (++pingies === maxPingies) {
        clearInterval(intervalId);
      }
    }, 800);
  }
});

client.login(process.env.BOT_TOKEN);
