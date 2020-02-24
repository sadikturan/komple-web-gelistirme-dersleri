import { Product } from "./Product";

export class SimpleDataSource {
    private products: Array<Product>;

    constructor() {
        this.products = new Array<Product>(
            new Product(1,"Samsung S5","Telefon",1000),
            new Product(2,"Samsung S6","Telefon",2000),
            new Product(3,"Samsung S7","Telefon",3000),
            new Product(4,"Samsung S8","Telefon",4000)
        );
    }

    getProducs(): Product[] {
        return this.products;
    }
}
