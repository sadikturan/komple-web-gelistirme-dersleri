// Uygulama: Nesneler (Objects)

/* 
    1- Sipariş bilgilerini object içerisinde saklayınız.
    2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: %20)
    3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

    sipariş id: 101
    sipariş tarihi: 31.12.2025
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 
        ürün id: 5
        ürün başlığı: IPhone 16 Pro
        ürün url: http://abc.com/iphone-16-pro
        ürün fiyatı: 75000

        ürün id: 6
        ürün başlığı: IPhone 16 Pro Max
        ürün url: http://abc.com/iphone-16-pro-max
        ürün fiyatı: 85000

    müşteri:
        müşteri id: 12


    sipariş id: 102
    sipariş tarihi: 30.11.2025
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 

        ürün id: 6
        ürün başlığı: IPhone 16 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 85000

    müşteri:
        müşteri id: 12    

*/


let siparis_1 = {
    "id": 101,
    "musteri_id": 12,
    "tarih": "31.12.2025",
    "odeme_sekli": "kredi kartı",
    "kargo_adresi": {
        "mahalle": "Yahya kaptan mah",
        "ilce": "İzmit",
        "sehir": "Kocaeli"
    },
    "urunler": [
        {
            "urun_id": 5,
            "urun_adi": "IPhone 16 Pro",
            "urun_url": "http://abc.com/iphone-16-pro",
            "fiyat": 75000
        },
        {
            "urun_id": 6,
            "urun_adi": "IPhone 16 Pro Max",
            "urun_url": "http://abc.com/iphone-16-pro-max",
            "fiyat": 85000
        }
    ]
}

let siparis_2 = {
    "id": 102,
    "musteri_id": 12,
    "tarih": "30.11.2025",
    "odeme_sekli": "kredi kartı",
    "kargo_adresi": {
        "mahalle": "Yahya kaptan mah",
        "ilce": "İzmit",
        "sehir": "Kocaeli"
    },
    "urunler": [   
        {
            "urun_id": 6,
            "urun_adi": "IPhone 16 Pro Max",
            "urun_url": "http://abc.com/iphone-16-pro-max",
            "fiyat": 85000
        }
    ]
}


let siparis1_toplam = (siparis_1.urunler[0].fiyat + siparis_1.urunler[1].fiyat) * 1.2;
let siparis2_toplam = (siparis_2.urunler[0].fiyat) * 1.2;

console.log(siparis1_toplam);
console.log(siparis2_toplam);

let toplam_siparis = siparis1_toplam + siparis2_toplam;

console.log("toplam sipariş: ", toplam_siparis);

let siparisler = [siparis_1, siparis_2];