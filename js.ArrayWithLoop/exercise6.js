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

let userInput = prompt("Та утга оруулна уу? /unasan || unaagui/");
let failed = [];
let passed = [];

for (let i = 0; i < students.length; i++) {
  if (students[i].point <= 100 && students[i].point < 60)
    passed.push(students[i].name);
  else {
    failed.push(students[i].name);
  }
}

if (userInput == "unasan" || "Unasan") {
  alert(failed);
} else if (userInput == "unaagui" || "Unaagui") {
  alert(passed);
}
