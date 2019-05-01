import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
product: any;
errorMSg : any;
product_id : any;
  constructor(private _route: ActivatedRoute,private _productService: ProductService,) { 
    
  }

  ngOnInit() {
this._route.params.subscribe(params => {
      this.product_id=params['id'];
    });
    this._productService.getProducts().subscribe(products => { console.log(products);
      this.product = products.filter(product => {  if(product.productId==this.product_id) return product;
      })[0];
      console.log(this.product);
      
    },
      error => this.errorMSg = error
    );
  }

}
