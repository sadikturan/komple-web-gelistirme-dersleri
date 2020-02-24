import { IProductService } from "./IProductService";
import {Product} from './Product';
import { SimpleDataSource } from "./SimpleDataSource";

export class ProductService implements IProductService {

    private dataSource: SimpleDataSource;
    private products: Array<Product>;

    constructor() {
        this.dataSource = new SimpleDataSource();
        this.products = new Array<Product>();
        this.dataSource.getProducs().forEach(p=> this.products.push(p));
    }
    
    getById(id: number): Product {
        return this.products.filter(p=>p.id === id)[0];
    }    
    getProducts(): Product[] {
        return this.products;
    }
    saveProduct(product: Product): void {
        if(product.id == 0 || product.id ==null) {
            product.id = this.generateId();
            this.products.push(product);
        }else {
            let index;

            for(let i=0; i<this.products.length;i++) {
                if(this.products[i].id === product.id) {
                    index = i;
                }
            }

            this.products.splice(index,1,product);
        }
    }
    deleteProduct(product: Product): void {
        let index = this.products.indexOf(product);
        if(index>0) {
            this.products.splice(index,1);
        }
    }

    private generateId(): number {
        let key = 1;
        while(this.getById(key) !=null) {
            key++;
        }
        return key;
    }


}