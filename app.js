// access the all id 
let fullName = document.getElementById("fullname");
let studRoll = document.getElementById("studroll");
let studNum = document.getElementById("mobnum");
let studEmail = document.getElementById("emailid");
let but = document.getElementById("but");
let tableBody = document.getElementById("tablebody");

// Load stored data on page load
window.onload = function () {
  const students = JSON.parse(localStorage.getItem("students")) || [];
  students.forEach(displayStudent);
};

// Add student on button click
but.addEventListener("click", addValue);

function addValue() {
  const student = {
    name: fullName.value.trim(),
    roll: studRoll.value.trim(),
    mobile: studNum.value.trim(),
    email: studEmail.value.trim()
  };

  // Validation
  if (!student.name || !student.roll || !student.mobile || !student.email) {
    alert("Please fill in all fields.");
    return;
  }

  // Get existing students
  let students = JSON.parse(localStorage.getItem("students")) || [];

  // Prevent duplicate roll numbers
  if (students.some(s => s.roll === student.roll)) {
    alert("A student with this roll number already exists.");
    return;
  }

  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));

  displayStudent(student);
  clearForm();
}

function displayStudent(student) {
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${student.name}</td>
    <td>${student.roll}</td>
    <td>${student.mobile}</td>
    <td>${student.email}</td>
    <td>
      <button onclick="deleteStudent('${student.roll}', this)">Delete</button>
      <button onclick="editStudent('${student.roll}', this)">Edit</button>
    </td>
  `;

  tableBody.appendChild(row);
}

function deleteStudent(roll, btn) {
  const row = btn.closest("tr");
  row.remove();

  let students = JSON.parse(localStorage.getItem("students")) || [];
  students = students.filter(s => s.roll !== roll);
  localStorage.setItem("students", JSON.stringify(students));
}

function editStudent(roll, btn) {
  const row = btn.closest("tr");
  const tds = row.querySelectorAll("td");

  fullName.value = tds[0].textContent;
  studRoll.value = tds[1].textContent;
  studNum.value = tds[2].textContent;
  studEmail.value = tds[3].textContent;

  // Remove row and localStorage entry
  row.remove();

  let students = JSON.parse(localStorage.getItem("students")) || [];
  students = students.filter(s => s.roll !== roll);
  localStorage.setItem("students", JSON.stringify(students));
}

function clearForm() {
  fullName.value = "";
  studRoll.value = "";
  studNum.value = "";
  studEmail.value = "";
}
