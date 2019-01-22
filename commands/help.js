const { prefix } = require('../config.json');
const Discord = require('discord.js');

module.exports = {
  name: 'help',
  description: 'For when you need an adult.',
  aliases: ['commands'],
  usage: '[command name]',
  cooldown: 5,
  execute(message, args) {
    const data = [];
    const { commands } = message.client;


    if (!args.length) {
      data.push(commands.map(command => `\`${command.name}\``).join(', '));

      const helpText = new Discord.RichEmbed()
        .setColor('DARK_PURPLE')
        .setAuthor('SpartanSpeck')
        .setDescription('I\'m here to spam memes and chew gum.. And I\'m all out of memes.')
        .addField('\u200b', `My prefix is \`${prefix}\`, but you can always ask Dad to change it.`)
        .addField('Check out all my sweet commands!', data)
        .addField('\u200b', `**You can type \`${prefix}help [command name]\` to get more info on a specific command.**`);

      return message.channel.send(helpText);;
    }
    else {
      const name = args[0].toLowerCase();
      const command = commands.get(name) || commands.find(c => c.aliases.includes(name));

      if (!command) {
        return message.reply('Don\'t know that one, bud..');
      }

      data.push(`**Name:** ${command.name}`);

      if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
      if (command.description) data.push(`**Description:** ${command.description}`);
      if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

      data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

      message.channel.send(data, { split: true });
    }
  }
};