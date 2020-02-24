// Strings

const firstName = 'Sadık';
const lastName = "Turan";
let hobbies = 'sinema spor kitap yazılım';
const age=35;

let val;

// string concatenation

val = firstName +" "+ lastName;
val = 'Sadık';
val +=' Turan';

val = 'Benim adım '+firstName+' '+ lastName+ ' ve yaşım ' + age + ' izmit\'te yaşıyorum.';

//string concat
val = firstName.concat(' ',lastName);

// string uppercase - lowercase
val = val.toUpperCase();
val = val.toLowerCase();

// string replace
val = '  '+val.replace('sadik','çınar')+'     ';

// trim
val = val.trim();

// substring 
// val = val.substring(3,8);

// slice
// val = val.slice(6); 

//val = val.indexOf('x');

//val = val[1];

//string length
//val = val.length;

val =hobbies.split(' ')

console.log(val);
console.log(typeof val);