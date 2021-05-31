import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../layout/category';
import { Product } from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpclient: HttpClient) { }


  addProduct(productBody): Observable<Product> {
    const productUrl = 'http://localhost:3000/products';
    return this.httpclient.post<Product>(productUrl, productBody);

  }

  getAllProduct(): Observable<Product> {

    const productUrl = 'http://localhost:3000/products';
    return this.httpclient.get<Product>(productUrl);

  }

  getProductById(productId): Observable<Product> {
    const productUrl = 'http://localhost:3000/products/' + productId;
    return this.httpclient.get<Product>(productUrl);

  }

  updateProduct(productId, productBody): Observable<Product> {
    const productUrl = 'http://localhost:3000/products/' + productId;
    return this.httpclient.put<Product>(productUrl, productBody);

  }

  deleteProduct(productId): Observable<Product> {
    const productUrl = 'http://localhost:3000/products/' + productId;
    return this.httpclient.delete<Product>(productUrl);

  }

  searchByCategory(categoryId): Observable<Product> {
    const productUrl = 'http://localhost:3000/products?categoryId=' + categoryId;
    return this.httpclient.get<Product>(productUrl);

  }

  getCategory(): Observable<Category> {
    const categoriesUrl = 'http://localhost:3000/categories';
    return this.httpclient.get<Category>(categoriesUrl);

  }

}
