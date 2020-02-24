// Demo : Arrays

// "Bmw,Mercedes,Opel,Mazda" elemanlarına sahip bir dizi oluşturun.

var arr = ["Bmw","Merdeces","Opel","Mazda"];
// var arr2 = new Array("Bmw","Merdeces","Opel","Mazda")

console.log(arr);

// Dizi kaç elemanlıdır ?
console.log(arr.length)

// Dizinin ilk ve son elemanı nedir ?
console.log(arr[0])
console.log(arr[3])
console.log(arr[arr.length-1])

// "Renault" değerini dizinin sonuna ekleyin.
// arr[4] = "Renault";
arr[arr.length] = "Renault";
arr[arr.length] = "Fiat";

arr.push('Toyota');

// "Toyota" değerini dizinin başına ekleyin.
arr.unshift('Seat');

// "Seat" değerini siliniz.
arr.shift('Seat');

// "Toyota" değerini siliniz.
arr.pop('Toyota');

// Dizi elemanlarını ters çevirin
arr.reverse()

// Dizi elemanlarını alfabetik olarak sıralayın.
arr.sort();

// [1,2,5,80] dizisini sıralayın.
var numbers =[1,2,5,80,15];

function compare(a,b){
    if(a>b) return 1;
    if(a==b) return 0;
    if (a<b) return -1;
}

console.log(numbers.sort(compare)); 

// "Opel" değeri dizinin bir elemanımıdır ?
console.log(arr);
console.log(arr.indexOf('Opel'));
console.log(arr.includes('Opel'));


// var str = "Chevrolet,Dacia";
// ifadesini diziye çeviriniz.

var str = "Chevrolet,Dacia";
var arr2 = str.split(',');
console.log(arr2)

// Oluşturulan 2 dizinin elemanlarını bir başka dizi ile birleştirin.
var arr3 = arr.concat(arr2);
console.log(arr3);

// Oluşturulan diziden son 2 elemanı siliniz.

// console.log(arr3.pop());
// console.log(arr3.pop());

// console.log(arr3.splice(6,2));
console.log(arr3.slice(6,8));

console.log(arr3);

/* Aşağıda verilen elemanları bir dizi içerisinde saklayınız.
     
     studentA : Yiğit Bilgi 2010
     StudentB : Sena Turan  1999
     studentC : Ahmet Turan 1998   

*/

var studentA = ['Yiğit','Bilgi',2010];
var studentB = ['Sena','Turan',1999];
var studentC = ['Ahmet','Turan',1998];

var students =[studentA,studentB,studentC];

console.log(students[0]);

console.log(students[0][0]);
console.log(students[0][1]);
console.log(students[0][2]);

console.log(students[1][0]);
console.log(students[1][1]);
console.log(students[1][2]);

console.log(students[2][0]);
console.log(students[2][1]);
console.log(students[2][2]);

console.log(students)
