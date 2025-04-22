// Diziler

// let urun1 = "IPhone 15";
// let urun2 = "IPhone 16";
// let urun3 = "IPhone 17";

let urunler = ["IPhone 15", "IPhone 16", "IPhone 17"];
let fiyatlar = [50000, 60000, 70000];
let renkler = ["gold","black","silver"];

let sonuc;

sonuc = `${urunler[0]} - ${fiyatlar[0]} - ${renkler[0]}`;
sonuc = `${urunler[1]} - ${fiyatlar[1]} - ${renkler[1]}`;
sonuc = `${urunler[2]} - ${fiyatlar[2]} - ${renkler[2]}`;

let urun1 = [
    "IPhone 15", 
    50000, 
    ["gold","black","silver"]
];

let urun2 = ["IPhone 16", 60000, "black"];
let urun3 = ["IPhone 17", 70000, "silver"];

// güncelleme

urun1[0] = "IPhone 15 Pro";

sonuc = `${urun1[0]} ${urun1[1]} ${urun1[2][0]}`;

console.log(sonuc);