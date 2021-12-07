const numberButton = document.querySelectorAll("#number");
const operatorButton = document.querySelectorAll("#operator");
const equalsButton = document.querySelector("#equals");
const deleteButton = document.querySelector("#delete");
const allClearButton = document.querySelector("#clearAll");
const displayOne = document.querySelector(".displayOne");
const displayTwo = document.querySelector(".displayTwo");

let printNumber = "";
let firstNumber = "";
let secondNumber = "";
let operation = "";

// display functions

let currentDisplay = (text) => {
  displayTwo.innerText = text;
  secondNumber = printNumber;
};

let secondDisplay = (operatorButton) => {
  printNumber = "";
  operation = operatorButton;
  displayOne.innerText = displayTwo.innerText + " " + operatorButton;
  displayOne.innerText = displayOne.innerText;
};

// Operation functions

let clear = function () {
  displayOne.innerHTML = "";
  displayTwo.innerHTML = 0;
  printNumber = "";
  firstNumber = "";
  secondNumber = "";
  operation = "";
};

const deleteInput = function () {
  displayTwo.innerHTML = 0;
  printNumber = "";
};

// Computing

const appendNumber = function (firstNumber, secondNumber, operation) {
  if (operation == "*") {
    displayTwo.innerHTML = Number(firstNumber) * Number(secondNumber);
  } else if (operation == "-") {
    displayTwo.innerHTML = Number(firstNumber) - Number(secondNumber);
  } else if (operation == "+") {
    displayTwo.innerHTML = Number(firstNumber) + Number(secondNumber);
  } else {
    displayTwo.innerHTML = Number(firstNumber) / Number(secondNumber);
  }
};

//  Event listeners

numberButton.forEach((numberButton) => {
  numberButton.addEventListener("click", () => {
    printNumber += numberButton.innerHTML;
    currentDisplay(printNumber);
    console.log("value of firstNumber" + " " + firstNumber);
    console.log("value of secondNumber" + " " + secondNumber);
    console.log("value of operation" + " " + operation);
  });
});

operatorButton.forEach((operatorButton) => {
  operatorButton.addEventListener("click", () => {
    operation = operatorButton.innerText;
    firstNumber = secondNumber;
    secondDisplay(operation);
    console.log("value of firstNumber" + " " + firstNumber);
    console.log("value of printNumber" + " " + printNumber);
    console.log("value of operation" + " " + operation);
  });
});

allClearButton.addEventListener("click", () => {
  clear();
});

deleteButton.addEventListener("click", () => {
  deleteInput();
});

equalsButton.addEventListener("click", () => {
  appendNumber(firstNumber, secondNumber, operation);
});
