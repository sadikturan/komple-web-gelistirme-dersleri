import {Component} from "@angular/core";
import { ProductRepository } from './repository.model';
import { FormControl } from '@angular/forms';

@Component({
    selector: "app",
    templateUrl: "product.component.html",
    styleUrls: ["product.component.css"]})
export class ProductComponent {
    name = new FormControl('Samsung S5');
    description = new FormControl('iyi telefon');
    price = new FormControl('1000');
    imageUrl = new FormControl('1.jpg');

    updateName() {
        this.name.setValue('Samsung S10');
    }
}