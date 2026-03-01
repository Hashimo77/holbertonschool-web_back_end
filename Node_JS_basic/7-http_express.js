const express = require('express');
const fs = require('fs');

const app = express();

/**
 * Helper function to read and process the CSV file asynchronously.
 * Returns a Promise that resolves with a formatted string or rejects with an error.
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Process the data: remove empty lines
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const header = lines.shift();

      if (!header) {
        resolve('Number of students: 0');
        return;
      }

      let totalStudents = 0;
      const studentsByField = {};
      let output = '';

      // Parse each student record
      lines.forEach((line) => {
        const studentData = line.split(',');
        if (studentData.length >= 4) {
          totalStudents += 1;
          const firstName = studentData[0];
          const field = studentData[3].trim();

          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          studentsByField[field].push(firstName);
        }
      });

      // Format the output string
      output += `Number of students: ${totalStudents}`;
      for (const [field, names] of Object.entries(studentsByField)) {
        output += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
      }

      resolve(output);
    });
  });
}

// Route for the root endpoint
app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

// Route for the students endpoint
app.get('/students', async (req, res) => {
  res.type('text/plain');
  let responseText = 'This is the list of our students\n';

  try {
    // Process the database file passed via command line argument
    const data = await countStudents(process.argv[2]);
    responseText += data;
    res.send(responseText);
  } catch (error) {
    responseText += error.message;
    res.send(responseText);
  }
});

app.listen(1245);

module.exports = app;
