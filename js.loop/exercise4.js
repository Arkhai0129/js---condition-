let n = Number(prompt("Та дурын тоогоо оруулна уу"));
let numberPlus = 0;

for (let i = 0; i <= n; i++) {
  if (i % 2 == 0) {
    numberPlus += i;
  }
}
console.log(numberPlus);
