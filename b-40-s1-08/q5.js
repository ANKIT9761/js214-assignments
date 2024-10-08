const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ],
  };

function countCalculation(school) {
    let {teachers:mathTeacherCount,students:mathStudentCount} = school.departments.math;
    let {teachers:historyTeacherCount,students:historyStudentCount} = school.departments.history;
    return {
        mathTeachersCount: mathTeacherCount,
        historyTeachersCount: historyTeacherCount,
        mathStudentsCount: mathStudentCount,
        historyStudentsCount: historyStudentCount
    }
}

console.log(countCalculation(school))

function findTopStudent(school, subject) {
  let [topStudent] = school.students;

  for (const student of school.students) {
      const { name, scores: { [subject]: score } } = student; // Multilevel destructuring

      if (score > topStudent.scores[subject]) {
          topStudent = student;
      }
  }
  return topStudent;
}

console.log( findTopStudent(school, 'math'))

function addNewDept(school, newDepartment) {
  return {
    ...school,
    departments: {
      ...school.departments,
      ...newDepartment
    }
  }
}
const newDepartment={art: { teachers: 2, students: 50 }}
console.log(addNewDept(school,newDepartment))

function highestStudentCountDepartment(school) {
  let highestDepartment = '';
  let maxStudents = 0;

  for (const [department, { students }] of Object.entries(school.departments)) {
      if (students > maxStudents) {
          maxStudents = students;
          highestDepartment = department;
      }
  }

  return highestDepartment;
}

console.log(highestStudentCountDepartment(school));//math

function generateGreeting(name, language = "English") {
  let greeting = "Hello, ";
  if (language === "Spanish") {
    greeting = "Hola, ";
  } else if (language === "French") {
    greeting = "Bonjour, ";
  }
  return greeting + name;
}

console.log(generateGreeting("Alice")); // Output: "Hello, Alice!"
console.log(generateGreeting("Bob", "Spanish")); // Output: "¡Hola, Bob!"
console.log(generateGreeting("Charlie", "French")); // Output: "Bonjour, Charlie!"











 
 