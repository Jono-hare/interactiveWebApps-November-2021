let text = document.getElementById("aPara").innerHTML;

let alphabetSoup = function (text) {
  return [...text].sort().join("");
};

document.getElementById("btn").onclick = function () {
  document.getElementById("emptyPara").innerHTML = alphabetSoup(text);
};

console.log(text);
console.log(alphabetSoup(text));

//  Could not complete
// Get the value of the text input with an element's .value property
