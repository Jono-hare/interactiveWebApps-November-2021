//  Print numbers to display

const keyNumbers = document.getElementsByClassName("keyNumber");
const displayPrint = document.getElementById("display");
// let display = displayPrint.innerText;

Array.from(keyNumbers).forEach(function (keyNumbers) {
  keyNumbers.onclick = function () {
    const keyPrintNum = keyNumbers.innerHTML;
    displayPrint.innerText = keyPrintNum;
    // display = keyPrintNum;
  };
});

// END > Print numbers to display

// Print operators to display

const keyOperators = document.getElementsByClassName("operator");

let inputNum = Array.from(keyOperators).forEach(function (keyOperators) {
  keyOperators.onclick = function () {
    const keyPrintOps = keyOperators.innerHTML;
    displayPrint.innerText = keyPrintOps;
  };
});

// END > Print operators to display

// Result computing

// function must accept 3 args
// input 1 should display on the screen
// chosen operator should display on the screen with input 1
// input 1 + operator + input 2 should now display
// enter btn should compute results and return them to the display

// End > Result computing
