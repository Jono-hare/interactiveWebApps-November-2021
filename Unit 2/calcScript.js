const numbers = document.getElementsByClassName("keyNumber");
const operators = document.getElementsByClassName("operator");
const displayPrint = document.getElementById("display");

Array.from(numbers).forEach(function (numbers) {
  numbers.onclick = function () {
    const keyPrint = numbers.id;
    displayPrint.innerText = keyPrint.id;
  };
});

console.log(numbers);

console.log(operators);
// console.log(pushBtn(numbers));
// console.log(document.getElementById("numbers").value);
