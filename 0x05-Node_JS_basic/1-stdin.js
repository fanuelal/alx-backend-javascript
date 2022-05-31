console.log('Welcome to Holberton School, what is your name?\n');
process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  const userName = process.stdin.read();
  process.stdout.write(`Your name is: ${userName}`);
});

process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
});
