function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap; 
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap;   
};

