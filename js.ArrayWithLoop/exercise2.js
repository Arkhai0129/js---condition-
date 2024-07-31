let dividableNumbers = [];
let numbers = prompt("Тоонууд оруулна уу");
let numberArray = numbers.split(" ");

for (let i = 0; i < numberArray.length; i++) {
  let num = parseInt(numberArray[i]);
  if (numberArray[i] % 3 == 0) {
    dividableNumbers.push(num);
  }
}

if (dividableNumbers.length == 0) {
  alert("Тийм утга байхгүй байна.");
} else {
  alert(dividableNumbers);
}
