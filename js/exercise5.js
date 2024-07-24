//Гараас өгсөн x тооны утга дараах нөхцөл биелэж байх үед тохирох текст хэвлэнэ
// x тоо 3-д, 5-д хоёуланд нь хуваагдаж байвал => "FizzBuzz" гэж хэвлэнэ.
// x тоо зөвхөн 3-д хуваагдаж байвал => "Fizz" гэж хэвлэнэ.
// x тоо зөвхөн 5-д хуваагдаж байвал => "Buzz" гэж хэвлэнэ.
// x тоо 3, 5-н алинд нь ч хуваагдахгүй байвал => "input" гэж хэвлэнэ.
// Бусад тохиолдолд => 'Not number' гэж хэвлэнэ.

function hello() {
  x = prompt("Та дурын тоог оруулна уу?");

  document.getElementById("original").innerHTML = "Х тоо: " + x;

  if (isNaN(x) == true) {
    document.getElementById("original").innerHTML = "Not a number";
    document.getElementById("demo").innerHTML = "Please put a";
  } else if (x % 3 == 0 && x % 5 == 0) {
    document.getElementById("demo").innerHTML = "FizzBuzz";
  } else if (x % 3 == 0) {
    document.getElementById("demo").innerHTML = "Fizz";
  } else if (x % 5 == 0) {
    document.getElementById("demo").innerHTML = "Buzz";
  } else if (x % 5 == 1 && x % 3 == 1) {
    document.getElementById("demo").innerHTML = "Input";
  } else {
    document.getElementById("demo").innerHTML = "Not a number";
  }
}
