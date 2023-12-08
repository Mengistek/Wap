console.log("******** Q1 ********")

let student = {
  lastName: "",
  firstName: "",
  grades: [],
  inputNewGrade: function (newGrade) {
    this.grades.push(newGrade);
  },
  computeAverageGrade: function () {
    return (
      this.grades.reduce((result, element) => result + element, 0) /
      this.grades.length
    );
  },
};

let student1 = Object.create(student);
let student2 = Object.create(student);
let student3 = Object.create(student);

student1.lastName = "Will";
student1.firstName = "David";
student1.grades = [];
student1.inputNewGrade(88);
student1.inputNewGrade(96);
student1.inputNewGrade(95);

student2.lastName = "Mengs";
student2.firstName = "Silbana";
student2.grades = [];
student2.inputNewGrade(84);
student2.inputNewGrade(78);
student2.inputNewGrade(95);

student3.lastName = "Adam";
student3.firstName = "mike";
student3.grades = [];
student3.inputNewGrade(82);
student3.inputNewGrade(91);
student3.inputNewGrade(99.5);

st1Avg = student1.computeAverageGrade();
st2Avg = student2.computeAverageGrade();
st3Avg = student3.computeAverageGrade();

console.log(st1Avg);
console.log(st2Avg);
console.log(st3Avg);

let students = [st1Avg, st2Avg, st3Avg];
// printing the Average of all the students
console.log(
  students.reduce((result, element) => result + element, 0) / students.length
);
