const text = document.getElementById("aPara").innerHTML;

let alphabetSoup = function (text) {
  return [...text].sort().join("");
};
document.getElementById("btn").onclick = function () {
  let soup = document.getElementById("aPara").value;
  document.getElementById("emptyPara").innerHTML = "yes";
};

console.log(alphabetSoup(text));
console.log(text);
