const fs = require('fs');

/**
 * Counts students from a CSV file synchronously.
 * @param {string} path - The path to the CSV database.
 */
function countStudents(path) {
  try {
    // Read the file synchronously using UTF-8 encoding
    const data = fs.readFileSync(path, 'utf8');

    // Split by newlines and filter out empty lines or lines with only whitespace
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Remove the header (first line)
    const header = lines.shift();
    if (!header) return;

    const studentsByField = {};
    let totalStudents = 0;

    for (const line of lines) {
      const studentData = line.split(',');
      // Basic validation: ensure we have at least a name and a field
      if (studentData.length >= 4) {
        totalStudents += 1;
        const firstName = studentData[0];
        const field = studentData[3].trim();

        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstName);
      }
    }

    console.log(`Number of students: ${totalStudents}`);

    for (const [field, names] of Object.entries(studentsByField)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
