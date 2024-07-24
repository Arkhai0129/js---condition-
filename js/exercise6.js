// Замын цагдаагаас хурд хэтрүүлсэн эсэхийг шалгадаг програм зохиолгох хүсэлт ирлээ. Програмын шаардлага:
// Хурдны дээд хязгаар 80км/цаг
// Тухайн хурднаас 5км цаг хэтрэх бүрт 1 оноо хасах бөгөөд хэрэв 5 оноо алдах юм бол эрхээ хасуулна.
// Жишээ нь:
// Оролт: speed = 100;
// Гаралт: 4 оноо алдсан. Эрх хасагдаагүй.
// Жишээ нь:
// Оролт: speed = 120;
// Гаралт: 8 оноо алдсан. Эрх хасагдсан.

function hello() {
  speed = Number(prompt("Та хэдэн км цагийн хурдтай явсан бэ?"));
  speedLimit = 80;
  pointLost = (speed - speedLimit) / 5;

  if (pointLost < 5) {
    document.getElementById("demo").innerHTML = " эрх хасагдаагүй.";
  } else if (pointLost < 0) {
    document.getElementById("demo").innerHTML =
      "Оноо алдаагүй." + " эрх хасагдаагүй.";
  } else {
    document.getElementById("demo").innerHTML =
      pointLost + " оноо алдсан." + " эрх хасагдсан.";
  }
}
