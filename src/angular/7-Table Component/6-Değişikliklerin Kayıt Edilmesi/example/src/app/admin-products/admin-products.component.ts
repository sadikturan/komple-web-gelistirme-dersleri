import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../repository.model';
import { Product } from '../product.model';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent {

  products;
  model: ProductRepository;
  selectedProduct: Product;

  constructor() { 
    this.model = new ProductRepository();
    this.products = this.model.getProducts();
  } 

  getSelected(product: Product): boolean {
    return product == this.selectedProduct;
  }

  editProduct(product: Product) {
    this.selectedProduct = product;
  }

  SaveChanges(name, description, price, imageUrl) {
    const p = this.model.getProductsById(this.selectedProduct.id);
    p.name = name;
    p.description = description;
    p.price = price;
    p.imageUrl = imageUrl;
    this.selectedProduct = null;
  }

}
