


// switch statements

// let category = 'beyaz eşya';

// switch(category){

//     case 'telefon':
//        console.log('telefon kategorisi');
//     break;

//     case 'bilgisayar':
//        console.log('bilgisayar kategorisi');
//     break;   

//     default:
//        console.log('yanlış kategori');
// }


// let day;

// switch (new Date().getDay()) {
//     case 0:
//     case 6:
//         day = 'Hafta Sonu';
//         break;

//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:       
//         day = 'Hafta içi';
//         break;
// }

// console.log(`bugün ${day}`);



const age = 9;
const firstName ='Sena';

switch(true){
    case age>=0 && age<=12:
       console.log(`${firstName} is a child`);
    break;
    case (age >=13 && age <=19):
       console.log(`${firstName} is a teenager`);
    break;
    default:
       console.log(`${firstName} is an adult`);
}