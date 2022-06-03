function selamlama(msg) {
    console.log(msg);
}

selamlama("selam");
selamlama("merhaba");
selamlama("iyi günler");

function yasHesapla(dogumYili) {
    return new Date().getFullYear() - dogumYili;
}

let yasAhmet = yasHesapla(1985);
let yasAyse = yasHesapla(1987);

console.log(yasAhmet, yasAyse);

function emekliligeKacYilKaldi(dogumYili, isim) {
    let yas = yasHesapla(dogumYili);
    let kalan_sene = 65 - yas;

    if (kalan_sene > 0) {
        console.log(`${isim}, emekli olmanıza ${kalan_sene} yıl kaldı.`);
    } else {
        console.log("zaten emekli oldunuz.");
    }
}

emekliligeKacYilKaldi(1980, "Ali");
emekliligeKacYilKaldi(1950, "Ayşe");