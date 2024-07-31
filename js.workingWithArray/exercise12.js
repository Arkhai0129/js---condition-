let first = prompt("Эхний массив утгууд");
let second = prompt("Хоёр дах массивын утга");

let firstArray = first.split(" ");
let secondArray = second.split(" ");

newArray = [...firstArray, ...secondArray];
alert(newArray);
