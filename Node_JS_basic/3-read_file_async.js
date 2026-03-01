const fs = require('fs');

/**
 * Counts students from a CSV file asynchronously.
 * @param {string} path - The path to the CSV database.
 * @returns {Promise} - Resolves when processing is complete.
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Process the data once read
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      // Remove header
      const header = lines.shift();
      if (!header) {
        resolve();
        return;
      }

      const studentsByField = {};
      let totalStudents = 0;

      lines.forEach((line) => {
        const studentData = line.split(',');
        // Validate student data (firstname, lastname, age, field)
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

      // Log results to console
      console.log(`Number of students: ${totalStudents}`);
      for (const [field, names] of Object.entries(studentsByField)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
