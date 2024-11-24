// For Döngüsü

// console.log(1);
// console.log(2);
// console.log(3);

// // ...

// console.log(100);


// for(let i = 1; i <= 100; i++)
// {
//     // kodlar
//     console.log(i);    
// }


let sayilar = [1,2,3,5,6,8,9,0,12,45,13,25,67];
let toplam = 0;

for(let index = 0; index < sayilar.length; index++)
{
    console.log(sayilar[index]);

    toplam += sayilar[index];
}

console.log(toplam);