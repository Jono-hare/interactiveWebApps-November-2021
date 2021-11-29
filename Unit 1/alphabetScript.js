// First  attempt

// let text;
// text = document.getElementById("word").innerHTML;

// let alphabetSoup = function (text) {
//   return [...text].sort().join("");
// };

// document.getElementById("btn").onclick = function () {
//   document.getElementById("newWord").innerHTML = alphabetSoup(text);
// };

// console.log(text);
// console.log(alphabetSoup(text));

//  Could not complete
// Get the value of the text input with an element's .value property

// second attempt

let string, scrambleLetters, soupArray;

string = document.getElementById("word").innerHTML;

scrambleLetters = function (string) {
  soupArray = Array.from(string).sort().join("");
  return soupArray;
};

// soupArray.value = newWord;

document.getElementById("btn").onclick = function () {
  document.getElementById("word").innerHTML = scrambleLetters(string);
};
console.log(scrambleLetters(string));
console.log(soupArray);
