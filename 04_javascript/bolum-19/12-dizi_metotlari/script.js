// Dizi Metotları

let ogrenciler = ["Çınar","Yiğit","Ada"];

let sonuc;

sonuc = ogrenciler.length;
sonuc = ogrenciler.toString();
sonuc = ogrenciler.join(' ');

// eleman silme
// sonuc = ogrenciler.pop();
// sonuc = ogrenciler.shift();

// eleman ekleme
// sonuc = ogrenciler.push("Sena");
// sonuc = ogrenciler.unshift("Sena");

// eleman arama
// sonuc = ogrenciler.indexOf('Yiğit');
// sonuc = ogrenciler.lastIndexOf('Yiğit');
// sonuc = ogrenciler.includes('Yiğit');

// silme, ekleme
sonuc = ogrenciler.splice(0,1,"Ali","Canan");

console.log(sonuc);
console.log(ogrenciler);
