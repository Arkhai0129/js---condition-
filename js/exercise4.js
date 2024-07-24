//point хувьсагчид 0-100 хооронд оноо өгөх бөгөөд тухайн оноо нь ямар дүн авсныг if-else ашиглан console-руу хэвлэ.

function hello() {
  point = prompt("Та дүнгээ оруулна уу?");

  if (isNaN(point) == true) {
    document.getElementById("original").innerHTML = "Not a number";
    document.getElementById("demo").innerHTML = "Please put a";
  } else if (point <= 100 && point > 89) {
    document.getElementById("demo").innerHTML = "You got an A";
  } else if (point <= 89 && point > 79) {
    document.getElementById("demo").innerHTML = "You got an B";
  } else if (point <= 79 && point > 69) {
    document.getElementById("demo").innerHTML = "You got an C";
  } else if (point <= 69 && point > 59) {
    document.getElementById("demo").innerHTML = "You got an D";
  } else if (point > 100) {
    document.getElementById("demo").innerHTML = "Wrong";
  } else {
    document.getElementById("demo").innerHTML = "You got an F";
  }
}
