module.exports = {
  name: 'join',
  description: 'join voice chat',
  args: false,
  cooldown: 5,
  execute(message, args) {
    if (!message.guild) {
      return;
    }

    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { console.log('Successfully connected.'); })
        .catch(e => { console.error(e); });
    }
    else {
      message.reply('Get in a voice channel, nerd!')
    }
  }
}