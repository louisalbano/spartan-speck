module.exports = {
  name: 'leave',
  description: 'leave voice chat',
  args: false,
  cooldown: 5,
  execute(message, args) {
    if (!message.guild) {
      return;
    }

    if (message.member.voiceChannel && message.guild.voiceConnection) {
      if (message.member.voiceChannel === message.guild.voiceConnection.channel) {
        message.member.voiceChannel.leave()
        return;
      }
    }

    message.reply("You're not my mom, Dad!")
  }
}