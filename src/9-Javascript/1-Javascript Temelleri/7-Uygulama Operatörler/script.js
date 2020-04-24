// // Operatörler

// let val;
// const a=10;
// const b=5;
// const c=5;
// let   d=3;

// // 1- Aritmetik Operatörler

// val = a+b;
// val = a-b;
// val = a*b;
// val = a/b;
// val = a%b;
// val = d++;
// val = ++d;
// val = --d;
// val = d--;

// // 2- Atama Operatörleri

// val = a;
// val +=a; // val = val + a;
// val -=a; // val = val - a;
// val *=a; // val = val * a;
// val /=a; // val = val / a;
// val %=a; // val = val % a;


// // 3- Karşılaştırma Operatörleri

// val = a==b;
// val = b==c;
// val = b===c; // değer kontrolü & type
// val = 5 === '5';
// val = a!=b;
// val = a!==b;
// val = a > b;
// val = b < a;
// val = a >= b;
// val = 5 >= 5;
// val = a <= b;

// // 4- Mantıksal Operatörler

//    // && (And)
//    // true  && true  => true
//    // true  && false => false
//    // false && false => false

//    val=  (a>b) && (a>c) 
//    val = (a>b) || (a<c)
//    val = !(a>b)


//    // || (Or)
 
//    // true  && true  => true
//    // true  && false => true
//    // false && false => false

//    // ! (Not)

//    // !true  => false
//    // !false => true

// console.log(val);
// console.log(typeof val);


// Demo : Operators

// 1 - Can ve Ada 'nın boy ve kg bilgilerini alın.
// 2 - Alınan bilgilere göre kilo indekslerini hesaplayınız.
//  ** Formül : Kişinin Kilosu / Boy Uzunluğunun Karesi
// 3 - Hesaplanan indeks bilgisine göre karşılaştırma yapınız.
// 4 - Aşağıdaki tabloya göre can ve ada hangi gruba giriyor.

// 0 - 18,4: Zayıf
// 18,5 - 24,9: Normal
// 25,0 - 29,9: Fazla Kilolu
// 30,0 - 34,9: Şişman (Obez)

let IndexCan;
let IndexAda;

const kgCan = 60;
const kgAda = 40;

const heigtCan = 1.70;
const heigtAda = 1.50;

IndexAda = (kgAda) / (heigtAda*heigtAda);
IndexCan = (kgCan) / (heigtCan*heigtCan);

console.log(IndexAda.toFixed(2),IndexCan.toFixed(3));

let adaHigherIndex = IndexAda>IndexCan;
let canHigherIndex = IndexCan>IndexAda;

console.log("Ada'nın kilo indeksi can'ın kilo indeksinden daha büyük : "+adaHigherIndex);

console.log("Can'ın kilo indeksi ada'nın kilo indeksinden daha büyük : "+canHigherIndex);

let AdaZayif = (IndexAda>=0) && (IndexAda<=18.4);
let AdaNormal = (IndexAda>=18.5) && (IndexAda<=24.9);
let AdaKilolu = (IndexAda>=25) && (IndexAda<=29.9);
let AdaSisman = (IndexAda>=30) && (IndexAda<=34.9);

console.log("Ada zayıf :"+AdaZayif);
console.log("Ada'nın kilosu normal : "+AdaNormal);
console.log("Ada kilolu mu : "+AdaKilolu);
console.log("Ada şişman mı : "+AdaSisman);





