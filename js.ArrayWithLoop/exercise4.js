// const alphabet = [
//   { alphabet: "A", order: "1" },
//   { alphabet: "B", order: "2" },
//   { alphabet: "C", order: "3" },
//   { alphabet: "D", order: "4" },
//   { alphabet: "E", order: "5" },
//   { alphabet: "F", order: "6" },
//   { alphabet: "G", order: "7" },
//   { alphabet: "H", order: "8" },
//   { alphabet: "I", order: "9" },
//   { alphabet: "J", order: "10" },
//   { alphabet: "K", order: "11" },
//   { alphabet: "L", order: "12" },
//   { alphabet: "M", order: "13" },
//   { alphabet: "N", order: "14" },
//   { alphabet: "O", order: "15" },
//   { alphabet: "P", order: "16" },
//   { alphabet: "Q", order: "17" },
//   { alphabet: "R", order: "18" },
//   { alphabet: "S", order: "19" },
//   { alphabet: "T", order: "20" },
//   { alphabet: "U", order: "21" },
//   { alphabet: "V", order: "22" },
//   { alphabet: "W", order: "23" },
//   { alphabet: "X", order: "24" },
//   { alphabet: "Y", order: "25" },
//   { alphabet: "Z", order: "26" },
// ];

let alphabet = [
  "0",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let inputText = prompt("Та текст оруулна уу?");
let textArray = inputText.split("");
let alphabetOrder;
let answer = [];

for (let i = 0; i < textArray.length; i++) {
  alphabetOrder = alphabet.indexOf(textArray[i]);
  answer.push(alphabetOrder);
}
console.log(answer);
