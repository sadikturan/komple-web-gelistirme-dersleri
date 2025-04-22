// Fonksiyonlar

function selamlama(mesaj) {
    console.log(mesaj);
}

selamlama("merhaba");
selamlama("selam");

function yasHesapla(dogumYili) {
    let simdi = new Date().getFullYear();
    return simdi - dogumYili;
}

console.log(yasHesapla(2000));
console.log(yasHesapla(1983));

function emekliligeKacYilKaldi(dogumYili, isim) {
    let yas = yasHesapla(dogumYili);

    let kalan_sene = 65 - yas;

    if(kalan_sene > 0) {
        console.log(`${isim} emekli olmanıza ${kalan_sene} yıl kaldı.`);
    }
    else {
        console.log("zaten emekli oldunuz.");
    }
}

emekliligeKacYilKaldi(2000, "Ali");
emekliligeKacYilKaldi(1950, "Ayşe");
emekliligeKacYilKaldi(1980, "Can");