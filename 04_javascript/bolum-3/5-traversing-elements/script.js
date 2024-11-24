let sonuc;

const parent = document.querySelector(".parent");

sonuc = parent.children;
sonuc = parent.children[0];
sonuc = parent.children[0].innerText;
sonuc = parent.children[0].className;
sonuc = parent.children[0].nodeName;

parent.children[1].innerText = "Child Two";
parent.children[1].style.color = "red";

sonuc = parent.firstElementChild;
sonuc = parent.lastElementChild;

const child = document.querySelector(".child");

sonuc = child;
sonuc = child.parentElement;
sonuc = child.parentElement.parentElement;

sonuc = child.nextElementSibling;
sonuc = child.nextElementSibling.nextElementSibling;
sonuc = child.nextElementSibling.nextElementSibling.previousElementSibling;

console.log(sonuc);