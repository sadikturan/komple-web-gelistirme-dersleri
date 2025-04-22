// Nesneler (Objects)

// let kullanici = [
//     "Sadık",
//     "Turan",
//     40
// ];

// key - value

let kullanici1 = {
    "ad": "Sadık",
    "soyad": "Turan",
    "yas": 40,
    "adres": {
        "sehir": "kocaeli",
        "ilce": "İzmit"
    },
    "hobiler": ["sinema","spor"]
};

let kullanici2 = {
    "ad": "Çınar",
    "soyad": "Turan",
    "yas": 7,
    "adres": {
        "sehir": "kocaeli",
        "ilce": "İzmit"
    },
    "hobiler": ["sinema","spor"]
};

let kullanicilar = [kullanici1, kullanici2];

let sonuc;

sonuc = kullanici1;
sonuc = kullanici1["ad"];
sonuc = kullanici1["soyad"];
sonuc = kullanici1["adres"];
sonuc = kullanici1["adres"]["sehir"];
sonuc = kullanici1.adres.ilce;
sonuc = kullanici1.hobiler[0];

sonuc = kullanicilar[1].ad;

console.log(sonuc);

