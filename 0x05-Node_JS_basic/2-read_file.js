const fs = require('fs');

function countStudents(path){
  try {
    const csv = fs.readFileSync(path, { encoding: 'utf8' });
    const headerArray = csv.split(/\r?\n|\n/);
    const dict = [];
    const noHA = headerArray[0].split(',');

    for (let i = 0; i < noHeaderArray.length; i += 1) {
      const data = noHeaderArray[i].split(',');
      if (data.length === headers.length) {
        const row = {};
        for (let j = 0; j < headers.length; j += 1) {
          row[headers[j].trim()] = data[j].trim();
        }
        dictList.push(row);
      }
    }

    // count and collect first names of students per field
    let countCS = 0;
    let countSWE = 0;
    const studentsCS = [];
    const studentsSWE = [];

    dictList.forEach((element) => {
      if (element.field === 'CS') {
        countCS += 1;
        studentsCS.push(element.firstname);
      } else if (element.field === 'SWE') {
        countSWE += 1;
        studentsSWE.push(element.firstname);
      }
    });

    const countStudents = countCS + countSWE;

    // print statements
    console.log(`Number of students: ${countStudents}`);
    console.log(`Number of students in CS: ${countCS}. List: ${studentsCS.toString().split(',').join(', ')}`);
    console.log(`Number of students in SWE: ${countSWE}. List: ${studentsSWE.toString().split(',').join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
