import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from '../../shared/product.service';
import { UserService } from '../../shared/user.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  errorMSg: any;
  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageHeight: number = 30;
  pToggle: boolean = false;
  _listFilter: string;
  user: string;

  listFilterProducts: IProduct[];
  products: IProduct[];
  
  constructor(
    private _productService: ProductService, 
    private userservice: UserService) {
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.listFilterProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.pToggle = !this.pToggle;
  }

  ngOnInit() {
    console.log('Product list initiated!');
    this._productService.getProducts().subscribe(products => { console.log(products);
      this.products = products;
      this.listFilterProducts = this.products;
    },
      error => this.errorMSg = error
    );
    this.loadUser();
  }

  private loadUser() {
    this.userservice.cast.subscribe(user => this.user = user);
  }

  changeUser() {
    this.userservice.changeUser(this.user);
  }

}
