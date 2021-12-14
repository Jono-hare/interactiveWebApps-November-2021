const newTask = document.getElementById("newTask");
const taskDescription = document.querySelector("taskDescription");
const dueDate = document.getElementById("dueDate");
const dueTime = document.getElementById("dueTime");
const submitBtn = document.getElementById("submitBtn");

const taskText = document.getElementById("taskText");
const dateText = document.getElementById("dateText");
const timeText = document.getElementById("timeText");

let taskTrue = false;
let dateTrue = false;
let timeTrue = false;

const noHtml = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

// challenge 2 - Add custom instructions

function myValidation() {
  if (newTask.value.match(noHtml)) {
    taskText.style.display = "block";
    newTask.setCustomValidity("");
  } else if (newTask.value.length == 0) {
    newTask.setCustomValidity("Required and must contain no HTML characters.");
  } else {
    newTask.setCustomValidity("");
    taskText.style.display = "none";
  }

  if (dueDate.value == null || dueDate.value == "") {
    dueDate.setCustomValidity("Required, must select a date.");
  } else {
    dueDate.setCustomValidity("");
  }

  if (dueTime.value == null || dueTime.value == "") {
    dueTime.setCustomValidity("Required, must select a time.");
  } else {
    dueTime.setCustomValidity("");
  }
}

// Event listeners

submitBtn.addEventListener("click", () => {
  myValidation();
});
