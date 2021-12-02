let characterCounter;
characterCounter = document.getElementById("form-textarea");
characterCounter.addEventListener("keyup", countCharacters, false);

function countCharacters(event) {
  let textEntered, countRemaining, counter;
  textEntered = document.getElementById("form-textarea").value;
  counter = 300 - textEntered.length;
  countRemaining = document.getElementById("count");
  countRemaining.textContent = counter;
}
