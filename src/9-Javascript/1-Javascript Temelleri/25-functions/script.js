// Functions

function yasHesapla(dogumYili){
    return 2018 - dogumYili;
}

let ageAda = yasHesapla(2012);
let ageYigit = yasHesapla(2010);
let ageCinar = yasHesapla(2017);

console.log(ageAda);
console.log(ageYigit);
console.log(ageCinar);

function EmekligeKacYilKaldi(dogumYili,isim){
    let yas = yasHesapla(dogumYili);
    let emeklilik = 65 - yas;

    if(emeklilik>0){
        console.log(`${isim} emekli olmana ${emeklilik} yıl kaldı`);
    }else{
        console.log('Zaten emekli oldunuz');
    }
}

EmekligeKacYilKaldi(2012,'Ada');
EmekligeKacYilKaldi(2010,'Yiğit');
EmekligeKacYilKaldi(1950,'Çınar');
