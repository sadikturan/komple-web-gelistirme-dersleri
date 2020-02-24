// Template  Literals

const fullName = 'Sena Turan';
const city = 'Kocaeli';
const yearOfBirth = 2005;

let val;


val = 'my name is '+fullName+
      ' I\'m '+(2018-yearOfBirth)+' years old '+
      ' and I live in '+city;

val = `my name is ${fullName} I'm ${(2018-yearOfBirth>=18)?'over 18':'under 18'} and I live in ${city}`;


console.log(val);

