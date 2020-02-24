import { Component } from "@angular/core";
import { ProductRepository } from './repository.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ImageValidators } from './image.validators';

@Component({
    selector: "app",
    templateUrl: "product.component.html",
    styleUrls: ["product.component.css"]
})
export class ProductComponent { 

    productForm = new FormGroup({
        name: new FormControl('',
            [
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(20)
            ]
        ),
        description: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required),
        imageUrl: new FormControl('', [
            Validators.required,
            ImageValidators.isValidExtension
        ])
    })

    get name() {
        return this.productForm.get('name');
    }

    get imageUrl() {
        return this.productForm.get('imageUrl');
    }

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