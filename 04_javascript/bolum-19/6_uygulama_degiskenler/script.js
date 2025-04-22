/* 
    1- İki öğrencinin aşağıdaki bilgilerini değişkenler içerisinde saklayınız.

        öğrenci 1: 
            isim                : ada bilgi
            doğum tarihi        : 2012
            matematik notları   : 70, 70, 80

        öğrenci 2: 
            isim                : yiğit bilgi
            doğum tarihi        : 2010
            matematik notları   : 40, 40, 50

    2- Öğrencilerinin yaş bilgilerini değişkende tutunuz.
    3- Öğrencilerinin ders ortalama notunu değişkende saklayınız.
    4- Öğrencilerin 50 geçme notuna göre başarı durumlarını değişkende saklayınız.
*/

var ogr1_ad = "Ada";
var ogr1_soyad = "Bilgi";
var ogr1_dogumTarihi = 2012;
var ogr1_mat1 = 70;
var ogr1_mat2 = 70;
var ogr1_mat3 = 80;
var ogr1_yas = 2025 - ogr1_dogumTarihi;
var ogr1_ortalama = (ogr1_mat1 + ogr1_mat2 + ogr1_mat3) / 3;
console.log(parseInt(ogr1_ortalama));

console.log(ogr1_ortalama >= 50)    // boolean

var ogr2_ad = "Yiğit";
var ogr2_soyad = "Bilgi";
var ogr2_dogumTarihi = 2010;
var ogr2_mat1 = 40;
var ogr2_mat2 = 40;
var ogr2_mat3 = 50;

var ogr2_yas = 2025 - ogr2_dogumTarihi;
var ogr2_ortalama = (ogr2_mat1 + ogr2_mat2 + ogr2_mat3) / 3;
console.log(ogr2_ortalama);
console.log(ogr2_yas);
console.log(ogr2_ortalama >= 50)    // boolean