import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../admin/product-list/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl : string = 'http://localhost:3000/products';

  constructor(private http : HttpClient) { }

  getAllProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(productId : number) : Observable<Product>{
    return this.http.get<Product>(this.apiUrl+'/'+productId);
  }
}
