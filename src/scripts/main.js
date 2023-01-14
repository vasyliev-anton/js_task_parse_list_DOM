'use strict';

const listOfEmployees = document.querySelectorAll('li');

const arrayOfEmployees = [...listOfEmployees].map(x => {
  const salaryAmount = x.dataset.salary;
  const salary = salaryAmount.split(',').join('').slice(1);

  return {
    name: x.innerText,
    position: x.dataset.position,
    salary: Number(salary),
    age: x.dataset.age,
  };
});

const sortList = (list) => list.sort((a, b) => b.salary - a.salary);

function getEmployees(array) {
  const list = document.querySelector('ul');

  list.innerHTML = `
  ${array.map(employee => `
    <li
      data-position="${employee.position}"
      data-salary="${employee.salary}"
      data-age="${employee.age}"
    >
      ${employee.name}
    </li>
  `).join('')}
`;
}

getEmployees(sortList(arrayOfEmployees));
