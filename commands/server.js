module.exports = {
  name: 'server',
  description: 'Server info',
  execute(message, args) {
    message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
  }
}