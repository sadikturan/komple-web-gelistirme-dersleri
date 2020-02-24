/* 
   Demo Loops : Sayı Tahmin Oyunu

   1-10 arası rastgele sayı üretilen bir sayıyı aşağı yukarı ifadeleri ile buldurmaya çalışın.
   ** puanlama yapın.
   ** kullanıcı kaç kerede bileceğini belirtebilsin.
*/

var hak,can;
var tahmin,sayac=0;
var sayi = Math.floor((Math.random()*10)+1);
can = Number(prompt('kaç kerede bileceksiniz ?'));
hak = can;

console.log(sayi);

while(hak>0){
    hak--;
    sayac++;
    tahmin = Number(prompt('bir sayı giriniz'));

    if(sayi == tahmin){
        console.log(`Tebrikler ${sayac} defada bildiniz.`);
        console.log(`puan : ${100 - (100/can)*(sayac-1)}`);
        break;
    }else if (sayi > tahmin){
        console.log('yukarı');
    }else{
        console.log('aşağı');
    }

    if(hak==0){
        console.log('hakkınız bitti. sayı :'+sayi);
    }
}

