/**
 * 1-stdin.js
 * A script that interacts with the user through standard input.
 */

// Display the initial welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for data coming from STDIN
process.stdin.on('data', (data) => {
  const name = data.toString();
  process.stdout.write(`Your name is: ${name}`);
});

// Listen for the end of the input stream
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
