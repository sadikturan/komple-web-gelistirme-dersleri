import { Component } from "@angular/core";
import { ProductRepository } from './repository.model';
import { Product } from './product.model';
import { stat } from 'fs';

@Component({
    selector: "app",
    templateUrl: "product.component.html",
    styleUrls: ["product.component.css"]
})
export class ProductComponent {
    model: ProductRepository = new ProductRepository();

    newProduct: Product = new Product();

    get jsonProduct() {
        return JSON.stringify(this.newProduct);
    }

    addProduct(p: Product) {
        console.log("New Product: " + this.jsonProduct);
    }

    log(x) {
        console.log(x);
    }

    submitForm(form) {
        console.log(form);
    }

    getValidationErrors(state: any) {
        let ctrlName: string = state.name;
        let messages: string[] = [];

        if (state.errors) {
            for (let errorName in state.errors) {
                switch (errorName) {
                    case "required":
                        messages.push(`You must enter a ${ctrlName}`);
                        break;
                    case "minlength":
                        messages.push(`Min. 3 characters for ${ctrlName}`);
                        break;
                    case "pattern":
                        messages.push(`${ctrlName} contains illegal characters`);
                        break;
                }
            }
        }
        return messages;
    }

}