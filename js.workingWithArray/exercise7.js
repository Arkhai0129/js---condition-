let animals = prompt("Амьтны нэрнүүд оруулна уу?");
let animalsArray = animals.split(" ");

animalsArray.splice(0, 2);
alert(animalsArray);
