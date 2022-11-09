"use strict";
exports.__esModule = true;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, "Samsung S5", "Telefon", 1000), new Product_1.Product(2, "Samsung S6", "Telefon", 2000), new Product_1.Product(3, "Samsung S7", "Telefon", 3000), new Product_1.Product(4, "Samsung S8", "Telefon", 4000));
    }
    SimpleDataSource.prototype.getProducs = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
