import { Injectable } from '@angular/core';
import { IProduct } from '../product/product-list/product';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";

@Injectable()
export class ProductService {
  private _api = '../api/products/products.json';

  constructor(private _http: Http) { }

  getProducts(): Observable<IProduct[]> {
    return this._http.get(this._api)
      .map((response: Response) => {
        console.log(response.json());
        return response.json();
      })
      .do(data => {})
      .catch(this.handleError)
  }

  private handleError(err: any) {
    console.error(err);
    return Observable.throw(err);
  }
}