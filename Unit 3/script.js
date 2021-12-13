const newTask = document.querySelector("#newTask");
const taskDescription = document.querySelector("#taskDescription");
const dueDate = document.querySelector("#dueDate");
const dueTime = document.querySelector("#dueTime");
const submitBtn = document.querySelector("#submitBtn");

// challenge 1 - Add custom instructions

submitBtn.addEventListener("click", () => {
  if (newTask.value === "") {
    newTask.setCustomValidity("Required and must contain no HTML characters.");
  } else {
    newTask.setCustomValidity("");
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
});
