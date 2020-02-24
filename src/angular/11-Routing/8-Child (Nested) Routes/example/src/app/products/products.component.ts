import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = products;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // route params
    // this.route.paramMap.subscribe(params=> {
    //   let id= params.get('id')
    // });
    // let id = this.route.snapshot.paramMap.get('id');

    // query params

    this.route.queryParamMap.subscribe(params=> {
      console.log(params);
    });

    let page = this.route.snapshot.queryParamMap.get('page');
    console.log(page);

  }

  loadProducts() {
    this.router.navigate(['/products'], {
      queryParams: {
        page: 1
      }
    });
  }

}
