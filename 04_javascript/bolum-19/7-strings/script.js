// Strings

var ad = 'Sadık';
var soyad = 'Turan';
var yas = 40;
var sehir = 'Kocaeli';

var mesaj = 'Benim adım ' + ad + ' ve soyadım ' + soyad + '. ' + sehir + '\'de yaşıyorum.' + 'Emekliliğe ' + (65-yas) + ' yılım kaldı.';

// Template Strings
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum.Emekliliğe ${65 - yas} yılım kaldı.`; 

console.log(mesaj);