let data = prompt("Наснууд оруулна уу?");
let age = data.split(" ");

message = age.indexOf("40");

if (message == -1) {
  alert("Ийм утга байхгүй байна.");
} else {
  alert("Ийм утга байна.");
}
