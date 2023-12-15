console.log("******* Q2 ******");
function Student1(lastName, firstName, grades) {
  this.lastName = lastName;
  this.firstName = firstName;
  this.grades = grades;
}

Student1.prototype.inputNewGrade = function (newGrade) {
  {
    this.grades.push(newGrade);
  }
};
Student1.prototype.computeAverageGrade = function () {
  {
    return (
      this.grades.reduce((result, element) => result + element, 0) /
      this.grades.length
    );
  }
};

let student4 = new Student1("Mengs", "Adam", []);
let student5 = new Student1("Silbana", "Habtom", []);
let student6 = new Student1("Mike", "will", []);

student4.inputNewGrade(83);
student4.inputNewGrade(99);
student4.inputNewGrade(87);

student5.inputNewGrade(85);
student5.inputNewGrade(95.5);
student5.inputNewGrade(89.5);

student6.inputNewGrade(88.5);
student6.inputNewGrade(91);
student6.inputNewGrade(92);

st1Avg = student4.computeAverageGrade();
st2Avg = student5.computeAverageGrade();
st3Avg = student6.computeAverageGrade();

console.log("Grade Average of Student 1: ", st1Avg);
console.log("Grade Average of Student 2: ", st2Avg);
console.log("Grade Average of Student 3: ", st3Avg);

let students2 = [st1Avg, st2Avg, st3Avg];
// printing the Average of all the students
console.log(
  "Grade Average of all the students: ",
  students.reduce((result, element) => result + element, 0) / students.length
);
