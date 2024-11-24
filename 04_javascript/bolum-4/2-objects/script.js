// Objects

// Person, Product, Comment

const product = {
    // properties
    title: "Samsung S25",
    description: "Güzel bir telefon",
    price: 70000,
    stock: 0,
    // methods
    display: function() {
        return `Ürün başlığı: ${this.title} ürün açıklaması: ${this.desctiption} ve fiyat: ${this.price}`;
    },
    is_active: function() {
        return (this.stock > 0) ? "satışta": "stok yok";
    }
};

const product2 = {
    // properties
    title: "Samsung S25",
    description: "Güzel bir telefon",
    price: 70000,
    stock: 0,
    // methods
    display: function() {
        return `Ürün başlığı: ${this.title} ürün açıklaması: ${this.desctiption} ve fiyat: ${this.price}`;
    },
    is_active: function() {
        return (this.stock > 0) ? "satışta": "stok yok";
    }
};

// Kalıp => kopya1, kopya2

// Rectagle => baslik, genislik, yukseklik, alan, cevre
// Person => ad, soyad, dogumYil, yashesapla

console.log(product.title);
console.log(product.desctiption);
console.log(product.price);

console.log(product.display());
console.log(product.display());

console.log(product.is_active());