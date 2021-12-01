// testing code
const colorCollection = document.getElementsByClassName("box");

Array.from(colorCollection).forEach(function (colorCollection) {
  colorCollection.onclick = function () {
    const bgColor = colorCollection.id;
    colorCollection.style.backgroundColor = bgColor;
    colorCollection.innerText = colorCollection.id;
  };
});

console.log(colorCollection);
console.log(Array.from(colorCollection));

// Call with Justin

// array.forEach((element) => {});

// Array.from;

// Working code

// function red() {
//   document.getElementById("red").style.background = "red";
//   document.getElementById("text-red").innerHTML = "Red";
// }
// function orange() {
//   document.getElementById("orange").style.background = "orange";
//   document.getElementById("text-orange").innerHTML = "Orange";
// }
// function yellow() {
//   document.getElementById("yellow").style.background = "yellow";
//   document.getElementById("text-yellow").innerHTML = "Yellow";
// }
// function green() {
//   document.getElementById("green").style.background = "green";
//   document.getElementById("text-green").innerHTML = "Green";
// }
// function blue() {
//   document.getElementById("blue").style.background = "blue";
//   document.getElementById("text-blue").innerHTML = "Blue";
// }
// function violet() {
//   document.getElementById("purple").style.background = "#4B0082";
//   document.getElementById("text-purple").innerHTML = "Violet";
// }
// function pink() {
//   document.getElementById("violet").style.background = "#BD31FF";
//   document.getElementById("text-violet").innerHTML = "Pink";
// }
