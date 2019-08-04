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
      const channel = message.member.voiceChannel;
      channel.join().then(connection => {
        // Yay, it worked!
        console.log("Successfully connected.");
      }).catch(e => {
        // Oh no, it errored! Let's log it to console :)
        console.error(e);
      });
    }
    else {
      message.reply('Get in a voice channel, nerd!')
    }
  }
}