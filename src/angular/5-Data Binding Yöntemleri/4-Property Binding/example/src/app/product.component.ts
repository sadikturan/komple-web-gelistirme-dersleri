import {Component} from "@angular/core";
import { ProductRepository } from './repository.model';
import { Product } from './product.model';

@Component({
    selector: "app",
    templateUrl: "product.component.html",
    styleUrls: ["product.component.css"]})
export class ProductComponent {
    model: ProductRepository = new ProductRepository();

    product: Product = this.model.getProductById(1);
}