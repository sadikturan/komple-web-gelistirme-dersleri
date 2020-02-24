/* 
   Aşağıdaki object literal yapısını kullanarak en az 5 araç bilgisini tutunuz.
   
   Araç Bilgileri:

      id : bmw116d_1234
      model : 116d
      yil : 2015
      renk : white
      servis kayitlari : 
            id : bmw116d_1234_1 tarih : 30.01.2016 km : 13000 toplam ücret : 900
               servis detayı:
               id : 1 işlem : yağ değişimi ücret : 300
               id : 2 işlem : filtre değişimi ücret: 300
               id : 3 işlem : fren hidroliği ücret: 300
            
            id : bmw116d_1234_2 tarih : 10.01.2017 km : 28000 toplam ücret : 1800
               id : 1 işlem : yağ değişimi ücret : 350
               id : 2 işlem : filtre değişimi : 350
               id : 3 işlem : fren hidroliği : 300
               id : 3 işlem : balata değişimi : 800 

*/


var aracBilgileri = [
    {
        id : 'bmw116d_123',
        model : 'bmw 116d',
        yil : 2015,
        renk : 'Beyaz',
        servisKayitlari : [
        {
            id : 'bmw116d_123_1',
            tarih : '20.01.2016',
            km : '13000',
            ucret : 900,
            detay :[
                    { id : 'bmw116d_123_1_1', aciklama :'yağ değişimi',ucret : 300},
                    { id : 'bmw116d_123_1_2', aciklama :'filtre değişimi',ucret : 300},
                    { id : 'bmw116d_123_1_3', aciklama : 'fren hidroliği',ucret : 300}
                   ]
            },
            {
                id : 'bmw116d_123_2',
                tarih : '10.01.2017',
                km : '28000',
                ucret : 1800,
                detay : [
                        { id :'bmw116d_123_2_1',aciklama :'yağ değişimi', ucret:350},
                        { id :'bmw116d_123_2_2',aciklama :'filtre',ucret:350 },
                        { id : 'bmw116d_123_2_3',aciklama :'fren hidroliği',ucret:300},
                        { id : 'bmw116d_123_2_3',aciklama : 'balata',ucret:800}
                ]
            }
        ]
    },
    {
        id : 'bmw118i_123',
        model : 'bmw 118i',
        yil : 2015,
        renk : 'Beyaz',
        servisKayitlari : [
        {
            id : 'bmw118i_123_1',
            tarih : '20.01.2016',
            km : '13000',
            ucret : 900,
            detay :[
                    { id : 'bmw118i_123_1_1', aciklama :'yağ değişimi',ucret : 300},
                    { id : 'bmw118i_123_1_2', aciklama :'filtre değişimi',ucret : 300},
                    { id : 'bmw118i_123_1_3', aciklama : 'fren hidroliği',ucret : 300}
                   ]
            },
            {
                id : 'bmw116d_123_2',
                tarih : '10.01.2017',
                km : '28000',
                ucret : 1800,
                detay : [
                        { id :'bmw116d_123_2_1',aciklama :'yağ değişimi', ucret:350},
                        { id :'bmw116d_123_2_2',aciklama :'filtre',ucret:350 },
                        { id : 'bmw116d_123_2_3',aciklama :'fren hidroliği',ucret:300},
                        { id : 'bmw116d_123_2_3',aciklama : 'balata',ucret:800}
                ]
            }
        ]
    },
    {
        id : 'bmw320d_123',
        model : 'bmw 320d',
        yil : 2015,
        renk : 'Beyaz',
        servisKayitlari : [
        {
            id : 'bmw320d_123_1',
            tarih : '20.01.2016',
            km : '13000',
            ucret : 900,
            detay :[
                    { id : 'bmw320d_123_1_1', aciklama :'yağ değişimi',ucret : 300},
                    { id : 'bmw320d_123_1_2', aciklama :'filtre değişimi',ucret : 300},
                    { id : 'bmw320d_123_1_3', aciklama : 'fren hidroliği',ucret : 300}
                   ]
            },
            {
                id : 'bmw116d_123_2',
                tarih : '10.01.2017',
                km : '28000',
                ucret : 1800,
                detay : [
                        { id :'bmw116d_123_2_1',aciklama :'yağ değişimi', ucret:350},
                        { id :'bmw116d_123_2_2',aciklama :'filtre',ucret:350 },
                        { id : 'bmw116d_123_2_3',aciklama :'fren hidroliği',ucret:300},
                        { id : 'bmw116d_123_2_3',aciklama : 'balata',ucret:800}
                ]
            }
        ]
    }
];



console.log(aracBilgileri[0]);
console.log(aracBilgileri[0].id);
console.log(aracBilgileri[0].model);
console.log(aracBilgileri[0].renk);
console.log(aracBilgileri[0].servisKayitlari);
console.log(aracBilgileri[0].servisKayitlari[0]);

console.log(aracBilgileri[0].servisKayitlari[0].km);
console.log(aracBilgileri[0].servisKayitlari[0].ucret);
console.log(aracBilgileri[0].servisKayitlari[0].detay[0].ucret);

// console.log(aracBilgileri[1]);
// console.log(aracBilgileri[2]);





