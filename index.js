const { prefix, token } = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!');
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) {
    return;
  }

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  console.log(command);
  if (command === 'ping') {
    message.channel.send('Pong.');
  }
  else if (command === 'beep') {
    message.channel.send('Boop.');
  }
  else if (command === 'server') {
    message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
  }
  else if (command === 'args-info') {
    if (!args.length) {
      return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }
    else if (args[0] === 'foo') {
      return message.channel.send('bar');
    }
    message.channel.send(`Command name: ${command}\nArguments: ${args}`);
  }
  else if (command === 'kick') {
    // grab the "first" mentioned user from the message
    // this will return a `User` object, just like `message.author`
    const taggedUser = message.mentions.users.first();

    if (!message.mentions.users.size) {
      return message.reply('you need to tag a user in order to kick them!');
    }

    message.channel.send(`You wanted to kick: ${taggedUser.username}`);
  }
  else if (command === 'avatar') {
    if (!message.mentions.users.size) {
      return message.channel.send(`Your avatar: <${message.author.displayAvatarURL}>`);
    }

    const avatarList = message.mentions.users.map(user => {
      return `${user.username}'s avatar: <${user.displayAvatarURL}>`;
    });

    // send the entire array of strings as a message
    // by default, discord.js will `.join()` the array with `\n`
    message.channel.send(avatarList);
  }
  else if (command === 'prune') {
    const amount = parseInt(args[0]);

    if (isNaN(amount)) {
      return message.reply('that doesn\'t seem to be a valid number.');
    }

    // ...
  }
});

client.login(token);