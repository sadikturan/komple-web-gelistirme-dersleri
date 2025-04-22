// If/Else Uygulamaları

// 1- Bir sayının 50-100 arasında olup olmadığını kontrol ediniz.

// let sayi = 30;

// if(sayi > 50 && sayi < 100)
// {
//     console.log("sayı 50-100 arasındadır.");
// }

// 2- Bir sayının pozitif çift sayı olup olmadığını kontrol ediniz.

// let sayi = 10;

// if(sayi % 2 == 0 && sayi > 0)
// {
//     console.log("sayı pozitif çift sayıdır.")
// }

// 3- x,y,z sayılarının büyüklük karşılaştırmasını yapınız. (ödev: else if kullanımı)

// let x = 60, y = 50, z = 30;

// if(x > y && x > z) {
//     console.log("x en büyük");
// }
// else if (y > x && y > z) {
//     console.log("y en büyük");
// }
// else if (z > x && z > y) {
//     console.log("z en büyük");
// }
// else {
//     console.log("hatalı bilgi");
// }


// 4- 2 vize (40%) ve 1 final (%60) noyuna göre ortalama hesaplayınız.

let vize1 = 10;
let vize2 = 10;
let final = 70;

// a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.
let ortalama = ((vize1 + vize2) / 2) * 0.4 + (final * 0.6);

console.log(ortalama);

// if(ortalama >= 50) {
//     console.log("geçti");
// }
// else {
//     console.log("kaldı");
// }

// b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.

// if(ortalama >= 50 && final >=50 ) {
//     console.log("geçti");
// }
// else {
//     console.log("kaldı");
// }

// c- Finalden 70 alındığında ortalama 50' nin altında olsa bile geçmiş sayılsın.

if(ortalama >= 50 || final >=70 ) {
    console.log("geçti");
}
else {
    console.log("kaldı");
}



