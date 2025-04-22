// Uygulama: Constructors

// Player Constructor

/*
    const oyuncu1 = new Player("Ahmet");
    const oyuncu2 = new Player("Çınar");
    const oyuncu3 = new Player("Yeliz");

    oyuncu1.start();        // Ahmet oyuna başladı.
    
    oyuncu2.stop();         // Çınar oyundan çıktı.
    
    oyuncu3.pause();        // Yeliz oyunu durdurdu.

    oyuncu1.add_score(50);

    oyuncu1.show_score();   // Ahmet isimli oyuncunun skoru 50.
*/

function Player(username) {
    this.username = username;
    this.score = 0;
    this.start = function() {
        return `${this.username} oyuna başladı.`;
    };
    this.stop = function() {
        return `${this.username} oyundan çıktı.`;
    };
    this.pause = function() {
        return `${this.username} oyunu durdurdu.`;
    };
    this.add_score = function(val) {
        this.score += val;
    };
    this.show_score = function() {
        return `${this.username} isimli oyuncunun skoru ${this.score}.`;
    }
}

const oyuncu1 = new Player("Ahmet");
const oyuncu2 = new Player("Çınar");
const oyuncu3 = new Player("Yeliz");

console.log(oyuncu1.start());
console.log(oyuncu2.stop());
console.log(oyuncu3.pause());

console.log(oyuncu1.show_score());
oyuncu1.add_score(50);
console.log(oyuncu1.show_score());

oyuncu2.add_score(50);
console.log(oyuncu2.show_score());

console.log(oyuncu3.show_score());