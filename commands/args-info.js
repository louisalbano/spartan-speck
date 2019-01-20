module.exports = {
  name: 'args-info',
  description: 'args test',
  args: true,
  usage: '<arg1> <arg2> etc.',
  cooldown: 5,
  execute(message, args) {
    if (args[0] === 'foo') {
      return message.channel.send('bar');
    }

    message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
  }
}