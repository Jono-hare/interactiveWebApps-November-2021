const numberButton = document.querySelectorAll("[data-number]");
const operatorButton = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const displayOne = document.querySelector("[data-display-one]");
const displayTwo = document.querySelector("[data-display-two]");

let printNumber = "";
let firstNumber = "";
let secondNumber = "";
let operation = "";

// display functions
let currentDisplay = (text) => {
  displayTwo.innerText = text;
};

let secondDisplay = (operatorButton) => {
  displayOne.innerText = displayTwo.innerText + " " + operatorButton;
  displayOne.innerText = displayOne.innerText;
};

// Operation functions

let clear = function () {
  displayOne.innerHTML = "";
  displayTwo.innerHTML = 0;
};

const deleteInput = function () {
  displayTwo.innerHTML = 0;
};

const appendNumber = function (numberButton) {};

const divide = function () {};

const addInput = function () {};

const subtractInput = function (number) {};

const compute = function () {};

//  Event listeners

numberButton.forEach((numberButton) => {
  numberButton.addEventListener("click", () => {
    let printNumber = numberButton.innerHTML;
    currentDisplay(printNumber);
  });
});

operatorButton.forEach((operatorButton) => {
  operatorButton.addEventListener("click", () => {
    let printOperation = operatorButton.innerText;
    secondDisplay(printOperation);
  });
});

allClearButton.addEventListener("click", () => {
  clear();
});

deleteButton.addEventListener("click", () => {
  deleteInput();
});

//  Print numbers to display
