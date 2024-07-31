let dividableNumbers = [];
let numbers = prompt("Тоонууд оруулна уу");
let numberArray = numbers.split(" ");

for (let i = 0; i < numberArray.length; i++) {
  let num = parseInt(numberArray[i]);

  if (num % 3 != 0 && num % 5 != 0) {
    dividableNumbers.push(num);
  }
}

if (dividableNumbers.length == 0) {
  alert("Тоонууд бүгд 5 эсвэл 3-т хуваагдана");
} else {
  alert(dividableNumbers);
}
