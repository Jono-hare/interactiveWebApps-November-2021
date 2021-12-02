let string, scrambleLetters, soupArray;

document.getElementById("btn").onclick = function () {
  string = document.getElementById("inputText").value;
  scrambleLetters = function (string) {
    soupArray = Array.from(string).sort().join("");
    return soupArray;
  };
  document.getElementById("outputText").innerHTML = scrambleLetters(string);
};
