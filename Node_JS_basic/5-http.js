const http = require('http');
const fs = require('fs');

/**
 * Helper function to process the CSV and return the formatted string.
 * Based on the logic from 3-read_file_async.js.
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const header = lines.shift();
      if (!header) {
        resolve('Number of students: 0');
        return;
      }

      const studentsByField = {};
      let totalStudents = 0;
      let output = '';

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

      output += `Number of students: ${totalStudents}`;
      for (const [field, names] of Object.entries(studentsByField)) {
        output += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
      }
      resolve(output);
    });
  });
}

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const data = await countStudents(process.argv[2]);
      res.end(data);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
