// Operatörler

let sonuc;
let a = 20, b = 10, c= 10;

// 1- Aritmetik Operatörler
sonuc = (a + b);
sonuc = (a - b);
sonuc = (a * b);
sonuc = (a / b);
sonuc = (a % b);
// sonuc = a++;       // sonuc = a + 1
// sonuc = ++a;       // sonuc = a + 1
// sonuc = a--;       // sonuc = a - 1
// sonuc = --a;       // sonuc = a - 1

// 2- Atama Operatörleri
sonuc = a;
sonuc += (a + b);   // sonuc = sonuc + (a + b)
sonuc += a          // sonuc = sonuc + a;
sonuc -= a          // sonuc = sonuc - a;
sonuc *= a          // sonuc = sonuc * a;
sonuc /= a          // sonuc = sonuc / a;
sonuc %= a          // sonuc = sonuc % a;

// 3- Karşılaştırma Operatörleri
sonuc = (a == b)  // true, false
sonuc = (a == c)  // true, false
sonuc = (a != b)
sonuc = (2 === "2")
sonuc = (a > b)
sonuc = (a >= b)
sonuc = (a < b)
sonuc = (a <= b)

// 4- Mantıksal Operatörler

console.log(sonuc);

