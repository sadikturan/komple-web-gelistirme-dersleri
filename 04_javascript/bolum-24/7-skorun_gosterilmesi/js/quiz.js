function Quiz(sorular) {
    this.soruIndex = 0;
    this.dogruCevapSayisi = 0;
    this.sorular = sorular;
}

Quiz.prototype.soruGetir = function() {
    return this.sorular[this.soruIndex];
}