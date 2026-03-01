const http = require('http');

/**
 * 4-http.js
 * A simple HTTP server using Node's built-in http module.
 */

const port = 1245;
const host = 'localhost';

// Create the server instance
const app = http.createServer((req, res) => {
  // Set the response header to plain text
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Send the body content
  res.end('Hello Holberton School!');
});

// Start listening on the specified port
app.listen(port, host, () => {
  // Optional: console.log(`Server running at http://${host}:${port}/`);
});

// Export the app variable as required
module.exports = app;
