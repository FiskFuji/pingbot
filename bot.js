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

  if (message.content === 'ping me') {
    let maxPingies = 3;

    console.log(`Pinged: ${message.author.username}`);
    await sleep(5000);
    message.channel.send('You pinged? (3)');

    let pingies = 0;
    let intervalId = setInterval(async() => {
      message.channel.send(`<@${message.author.id}>`);

      if (++pingies === maxPingies) {
        clearInterval(intervalId);
      }
    }, 1000);
  }

  if (message.content === 'ping me daddy') {
    let maxPingies = Math.floor(Math.random() * 10) + 1;  // no 0 pings

    console.log(`Pinging: ${message.author.username} ${maxPingies} times.`);
    await sleep(5000);
    message.channel.send(`Moar pings! (${maxPingies})`);

    let pingies = 0;
    let intervalId = setInterval(async() => {
      message.channel.send(`<@${message.author.id}>`);

      if (++pingies === maxPingies) {
        clearInterval(intervalId);
      }
    }, 1000);
  }

  if (message.content === 'pingies uwu' || message.content === 'pingies? uwu') {
    let maxPingies = Math.floor(Math.random() * 35) + 1;  // no 0 pings

    console.log(`Pinging: ${message.author.username} ${maxPingies} times.`);
    await sleep(5000);
    message.channel.send(`uwu yus pingies (${maxPingies})`);

    let pingies = 0;
    let intervalId = setInterval(async() => {
      message.channel.send(`<@${message.author.id}>`);

      if (++pingies === maxPingies) {
        clearInterval(intervalId);
      }
    }, 800);
  }
});

client.login('NzkwNjQ4NjY1MzI4MzIwNTM0.X-Dq8w.Ks4IIgF-gVXAUVvSWDs02P49ZjQ');
