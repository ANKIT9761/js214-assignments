function highestPaid(employees) {
    let max = Math.max(...employees.map(employee => employee.salary));
    return employees.find(employee => employee.salary === max);
}

const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(highestPaid(employees)); // Output: { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }

function destructuringToSwap(employees) {
    const [firstEmployee, secondEmployee, thirdEmployee] = employees;
    return [thirdEmployee, secondEmployee, firstEmployee];
}

console.log(destructuringToSwap(employees)); // Output: [ { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }, { name: 'Jane Smith', age: 28, department: 'Finance', salary: 60000 }, { name: 'John Doe', age: 30, department: 'HR', salary: 50000 } ]
