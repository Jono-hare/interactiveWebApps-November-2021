//  Print numbers to display

const keyNumbers = document.getElementsByClassName("keyNumber");
const displayPrint = document.getElementById("display");

Array.from(keyNumbers).forEach(function (keyNumbers) {
  keyNumbers.onclick = function () {
    const keyPrintNum = keyNumbers.innerHTML;
    displayPrint.innerText = keyPrintNum;
  };
});

// END > Print numbers to display

// Print operators to display

const keyOperators = document.getElementsByClassName("operator");

Array.from(keyOperators).forEach(function (keyOperators) {
  keyOperators.onclick = function () {
    const keyPrintOps = keyOperators.innerHTML;
    displayPrint.innerText = keyPrintOps;
  };
});

// END > Print operators to display
