import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/app/products';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  selectedProduct;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // let id = +this.route.snapshot.paramMap.get('id');
    // this.selectedProduct = products.find(i => i.id === id);

    this.route.paramMap
      .subscribe(params=> {
        let id = +params.get('id');
        this.selectedProduct = products.find(i=>i.id===id);
      })

  }

}
