console.log("******** Q3 ********");

function Student2(lastName, firstName, grades) {
  this.lastName = lastName;
  this.firstName = firstName;
  this.grades = grades;
}

Student2.prototype.inputNewGrade = function (newGrade) {
  this.grades.push(newGrade);
};
Student2.prototype.computeAverageGrade = function () {
  return (
    this.grades.reduce((result, element) => result + element, 0) /
    this.grades.length
  );
};

let student7 = new Student2("Mengs", "Adam", []);
let student8 = new Student2("Silbana", "Habtom", []);
let student9 = new Student2("mike", "David", []);

student7.inputNewGrade(88);
student7.inputNewGrade(96);
student7.inputNewGrade(95);

student8.inputNewGrade(88);
student8.inputNewGrade(79);
student8.inputNewGrade(85);

student9.inputNewGrade(91);
student9.inputNewGrade(94);
student9.inputNewGrade(89);

st1Avg = student7.computeAverageGrade();
st2Avg = student8.computeAverageGrade();
st3Avg = student9.computeAverageGrade();

console.log("Grade Average of Student 1: ", st1Avg);
console.log("Grade Average of Student 2: ", st2Avg);
console.log("Grade Average of Student 3: ", st3Avg);

let students3 = [st1Avg, st2Avg, st3Avg];
// printing the Average of all the students
console.log(
  "Grade Average of all the students: ",
  students.reduce((result, element) => result + element, 0) / students.length
);

Array.prototype.sort(() => {
  (a, b) => {
    return a - b;
  };
});

// sorting students by their firstName
const studentsByNames = [
  student7.firstName,
  student8.firstName,
  student9.firstName,
];
console.log(studentsByNames.sort());

// sorting students by their average grade
const studentsByAverage = [st1Avg, st2Avg, st3Avg];
console.log(studentsByAverage.sort());
