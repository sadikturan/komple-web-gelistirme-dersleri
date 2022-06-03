function Quiz(sorular) {
    this.sorular = sorular;
    this.soruIndex = 0;
    this.dogruCevapSayisi = 0;
}

Quiz.prototype.soruGetir = function() {
    return this.sorular[this.soruIndex];
}