// Dates ve Times

let simdi = new Date();

// get methods
sonuc = simdi;
sonuc = simdi.getDate();    // gün
sonuc = simdi.getDay();     // 0-6 => 0: pazar 6: cumartesi
sonuc = simdi.getFullYear();     // yıl

// set methods
simdi.setFullYear(2026);
simdi.setMonth(7);
simdi.setDate(20);

let dogumTarihi = new Date(1990, 5, 15);

sonuc = dogumTarihi;

sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();

let milisecond = simdi - dogumTarihi;

let saniye = milisecond / 1000;
let dakika = saniye / 60;
let saat = dakika / 60;
let gun = saat / 24;

sonuc = gun;

console.log(sonuc);