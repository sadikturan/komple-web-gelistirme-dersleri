// Function Constructor
function Product(title, description, price, stock) {
    // Properties
    this.title = title;
    this.description = description;
    this.price = price;
    this.stock = stock;
    // Methods
    this.display = function() {
        return `Ürün başlığı: ${this.title} ürün açıklaması: ${this.description} ve fiyat: ${this.price}`;
    },
    this.is_active = function() {
        return (this.stock > 0) ? "satışta": "stok yok";
    }
}

// Object
const product1 = new Product("Samsung S25", "iyi telefon", 60000, 100);
const product2 = new Product("Samsung S26", "iyi telefon", 70000, 0);
const product3 = new Product("Samsung S27", "iyi telefon", 80000, 300);

console.log(product1.display());
console.log(product2.display());
console.log(product3.display());

console.log(product1.is_active());
console.log(product2.is_active());
console.log(product3.is_active());