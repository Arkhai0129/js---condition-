//x тоог тэгш эсвэл сондгойг эсэхийг шалгаж console-руу хэвлэнэ үү.

function hello() {
  x = prompt("Та дурын тоог оруулна уу?");

  document.getElementById("original").innerHTML = "Х тоо: " + x;

  if (isNaN(x) == true) {
    document.getElementById("original").innerHTML = "Not a number";
    document.getElementById("demo").innerHTML = "Please put a";
  } else if (x % 2 == 0) {
    document.getElementById("demo").innerHTML = "This is even number";
  } else {
    document.getElementById("demo").innerHTML = "This is odd number";
  }
}
