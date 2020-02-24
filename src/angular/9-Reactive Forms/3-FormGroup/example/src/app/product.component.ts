import { Component } from "@angular/core";
import { ProductRepository } from './repository.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: "app",
    templateUrl: "product.component.html",
    styleUrls: ["product.component.css"]
})
export class ProductComponent {

    productForm = new FormGroup({
        name : new FormControl('Samsung S5'),
        description : new FormControl('iyi telefon'),
        price : new FormControl('1000'),
        imageUrl : new FormControl('1.jpg')
    })   

    onSubmit() {
        console.log(this.productForm.value);
    }

    updateProduct() {
        this.productForm.patchValue({
            name: 'IPhone X',
            price: 5000
        });
    }
}