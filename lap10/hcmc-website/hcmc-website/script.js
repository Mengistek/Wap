class Patient {
  constructor(
    PatientID,
    FirstName,
    MiddleInitial,
    LastName,
    DoB,
    department,
    IsOutpatient
  ) {
    this.patientID = PatientID;
    this.firstName = FirstName;
    this.middleInitial = MiddleInitial;
    this.lastName = LastName;
    this.dOB = DoB;
    this.department = department;
    this.isOutpatient = IsOutpatient;
  }
  addPatient() {
    const properties = [
      this.patientID,
      this.firstName,
      this.middleInitial,
      this.lastName,
      this.dOB,
      this.department,
      this.isOutpatient,
    ];
    let tableBody = document.getElementById("tbodyPatientsList");
    let newT = document.createElement("tr");
    for (let i = 0; i < 7; i++) {
      let tableData = document.createElement("td");
      let content = document.createTextNode(properties[i]);
      tableData.appendChild(content);
      newT.appendChild(tableData);
    }
    tableBody.appendChild(newT);
  }
}
const patient1 = new Patient(
  "EP-001-000335",
  "Adam",
  "T",
  "Habtom",
  "1987-09-02",
  "Ear, Nose and Throat",
  "no"
);
const patient2 = new Patient(
  "P-001-000336",
  "Abraham",
  "D",
  "Tsegay",
  "1985-05-04",
  "Ear, Nose and Throat",
  "no"
);
const patient3 = new Patient(
  "EP-001-000337",
  "Mengs",
  "k",
  "Tekle",
  "1992-03-13",
  "Cardiology",
  "Yes"
);
const patient4 = new Patient(
  "P-001-000338",
  "Silvana",
  "H",
  "Habtom",
  "2005-09-21",
  "Ear, Nose and Throat",
  "no"
);

let patients = [patient1, patient2, patient3, patient4];
patients.forEach((patient) => {
  patient.addPatient();
});

document
  .getElementById("btnRegisterPatient")
  .addEventListener("click", function (event) {
   
   let patientIdNumber = document.getElementById("patientIdNumber");
   let firstName = document.getElementById("firstName");
   let middleInitials = document.getElementById("middleInitials");
   let lastName = document.getElementById("lastName");
   let dateOfBirth = document.getElementById("dateOfBirth");
   let ddlDepartment = document.getElementById("ddlDepartment");
   let radioIsOutPatient = document.querySelector(
      'input[name="radioIsOutPatient"]:checked'
    );

    
    if (
      !patientIdNumber.checkValidity() ||
      !firstName.checkValidity() ||
      !lastName.checkValidity() ||
      !dateOfBirth.checkValidity() ||
      !ddlDepartment.checkValidity() ||
      !radioIsOutPatient.checkValidity()
    ) {
      return;
    }

    event.preventDefault();

    const newPatient = new Patient(
      patientIdNumber.value,
      firstName.value,
      middleInitials.value,
      lastName.value,
      dateOfBirth.value,
      ddlDepartment.value,
      radioIsOutPatient.value
    );
    newPatient.addPatient();
  });

let elderlyCheck = document.getElementById("chkElderlyPatients");
elderlyCheck.addEventListener("change", funCheck);

let outPatient = document.getElementById("chkShowOutPatients");
outPatient.addEventListener("change", funCheck);

function funCheck() {
 let rows = document
    .getElementById("tbodyPatientsList")
    .getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    let cellOut = rows[i].getElementsByTagName("td")[6];
    let outPat = cellOut.textContent;

    
    let cellDate = rows[i].getElementsByTagName("td")[4];
    let dateOfBirth = cellDate.textContent;
    
    let year = parseInt(dateOfBirth.split("-")[0], 10);

    
    if (
      (outPatient.checked && outPat == "No") ||
      (elderlyCheck.checked && year > 1958)
    ) {
      rows[i].style.display = "none";
    } else {
      rows[i].style.display = "";
    }
  }
}
