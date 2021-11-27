// testing code
let divColor = document.getElementsByClassName("box");
Array.from(divColor).forEach((box) => {
  console.log(box.id);
});
for (i = 0; i < divColor; i++) {
  document.getElementById(divColor[i]).style.background = getElementById(
    divColor[i]
  );
}

// Working code

function red() {
  document.getElementById("red").style.background = "red";
  document.getElementById("text-red").innerHTML = "Red";
}
function orange() {
  document.getElementById("orange").style.background = "orange";
  document.getElementById("text-orange").innerHTML = "Orange";
}
function yellow() {
  document.getElementById("yellow").style.background = "yellow";
  document.getElementById("text-yellow").innerHTML = "Yellow";
}
function green() {
  document.getElementById("green").style.background = "green";
  document.getElementById("text-green").innerHTML = "Green";
}
function blue() {
  document.getElementById("blue").style.background = "blue";
  document.getElementById("text-blue").innerHTML = "Blue";
}
function violet() {
  document.getElementById("violet").style.background = "#4B0082";
  document.getElementById("text-violet").innerHTML = "Violet";
}
function pink() {
  document.getElementById("pink").style.background = "#BD31FF";
  document.getElementById("text-pink").innerHTML = "Pink";
}
