//if-else ашиглан гараас өгсөн 2 тооны ихийг олж console-руу харуулна уу.
function hello() {
  a = prompt("Та А тоог оруулна уу?");
  b = prompt("Та B тоог оруулна уу?");

  document.getElementById("original").innerHTML =
    "A тоо: " + a + " B тоо: " + b;

  if (isNaN(a) == true || isNaN(b) == true) {
    document.getElementById("original").innerHTML = "Not a number";
    document.getElementById("demo").innerHTML = "Please put a number";
  } else if (a > b) {
    document.getElementById("demo").innerHTML = "А тоо B тооноос их";
  } else if (a < b) {
    document.getElementById("demo").innerHTML = "B тоо A тооноос их";
  } else {
    console.log("Hello");
  }
}
