let sonuc;

sonuc = 10;
sonuc = "10";
sonuc = Number("10");
sonuc = parseInt("10.6");
sonuc = parseFloat("10.6");
sonuc = parseInt("10a");
sonuc = parseInt("a10");

sonuc = isNaN("10");

let sayi = 15.12355467;

sonuc = sayi.toPrecision(5);
sonuc = sayi.toFixed(5);

sonuc = Math.round(2.4);
sonuc = Math.round(2.6);
sonuc = Math.ceil(2.2);
sonuc = Math.floor(2.6);
sonuc = Math.sqrt(25);
sonuc = Math.pow(2,3);
sonuc = Math.abs(-10);
sonuc = Math.min(4,6,8,3,9);
sonuc = Math.max(4,6,8,3,9);
sonuc = Math.floor(Math.random() * 100) + 50;

console.log(typeof sonuc);
console.log(sonuc);