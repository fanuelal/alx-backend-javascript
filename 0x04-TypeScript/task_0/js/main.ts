interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentOne: Student = {
  firstName: 'Fanuel',
  lastName: 'Almaw',
  age: 22,
  location: 'bahirdar'
}
const studentTwo: Student = {
  firstName: 'max',
  lastName: 'well',
  age: 23,
  location: 'kenya'
}

const studentsList = [studentOne, studentTwo];

const table = document.createElement('table');
create tableBody = document.createElement('tbody');

studentsList.forEach((obj) => {
  const tr = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');
  nameCell.textContent = obj.firstName;
  locationCell.textContent = obj.location;
  tr.appendChild(nameCell);
  tr.appendChild(locationCell);
  tableBody.appendChiled(tr);
});
table.appendChild(tbody);
document.body.appendChild(table);