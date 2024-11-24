let sonuc;

// 1- document.getElementById()

// sonuc = document.getElementById("title");
// sonuc = document.getElementById("title").id;
// sonuc = document.getElementById("title").className;
// sonuc = document.getElementById("title").classList;

// document.getElementById("title").style.fontSize = "40px";
// document.getElementById("title").style.color = "red";
// document.getElementById("title").style.display = "none";

// document.getElementById("title").innerText = "Alışveriş Listesi";
// document.getElementById("title").innerHTML = "<p>Alışveriş Listesi</p>";

// 2-document.querySelector() => id, class, elementName

// sonuc = document.querySelector("#title");
// sonuc = document.querySelector(".app-title");
// sonuc = document.querySelector("h1");
// sonuc = document.querySelector("input[type='submit'");

// sonuc = document.querySelector("li:nth-child(3)");
// sonuc = document.querySelector("li:nth-child(3)").innerText = "Eleman 3";
// sonuc = document.querySelector("li:nth-child(3)").style.color = "red";

const parentElement = document.querySelector("ul");
console.log(parentElement);

const firstElement = parentElement.querySelector("li");
firstElement.style.color = "blue";

console.log(firstElement);