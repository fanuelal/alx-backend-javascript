console.log("Welcome to Holberton School, what is your name?");
process.stdin.resume();

process.stdin.on('readable', () => {
  const userName = process.stdin.read();
  process.stdout.write(`Your name is: ${userName}`);
  if (process.stdin.isTTY) {
    process.exit();
  } else {
    process.stdout.write('This important software is now closing\n');
    process.exit();
  }  
});
