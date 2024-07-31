const students = [
  { name: "Alice", point: 90 },
  { name: "Bob", point: 55 },
  { name: "Charlie", point: 78 },
  { name: "David", point: 22 },
  { name: "Eve", point: 68 },
  { name: "Frank", point: 36 },
  { name: "Grace", point: 95 },
  { name: "Hannah", point: 89 },
  { name: "Ivy", point: 83 },
  { name: "Jack", point: 41 },
  { name: "Katie", point: 87 },
  { name: "Liam", point: 84 },
  { name: "Mia", point: 79 },
  { name: "Noah", point: 93 },
  { name: "Olivia", point: 86 },
  { name: "Peter", point: 57 },
  { name: "Quinn", point: 94 },
  { name: "Ryan", point: 80 },
  { name: "Sophia", point: 75 },
  { name: "Tyler", point: 46 },
];

userInput = prompt("Та дүн оруулна уу? /A, B, C, D/");

aGrade = [];
bGrade = [];
cGrade = [];
dGrade = [];
fGrade = [];

for (let i = 0; i < students.length; i++) {
  if (students[i].point <= 100 && students[i].point > 89) {
    aGrade.push(students[i].name);
  } else if (students[i].point < 90 && students[i].point > 79) {
    bGrade.push(students[i].name);
  } else if (students[i].point < 80 && students[i].point > 69) {
    cGrade.push(students[i].name);
  } else if (students[i].point < 70 && students[i].point > 59) {
    dGrade.push(students[i].name);
  } else {
    fGrade.push(students[i].name);
  }
}

if (userInput == "A" || userInput == "a") {
  alert(aGrade);
} else if (userInput == "B" || userInput == "b") {
  alert(bGrade);
} else if (userInput == "C" || userInput == "c") {
  alert(cGrade);
} else if (userInput == "D" || userInput == "d") {
  alert(dGrade);
} else if (userInput == "F" || userInput == "f") {
  alert(fGrade);
} else {
  alert("Та зөв утга оруулна уу?");
}
