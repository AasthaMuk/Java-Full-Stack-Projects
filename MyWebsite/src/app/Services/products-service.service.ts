import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Models/product';
import { Category } from '../Models/category';


@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private httpClient:HttpClient) { }
  
  // SERVICE METHODS :
  //=================================================================================


  // 1. service for "create-product" component , pass a body to the service method
  createProduct(productBody: Product){

    const  url = 'http://localhost:3000/products';
    return this.httpClient.post(url,productBody); // returns an Observable

  }


  // 2. service for "view-product" component , pass a body to the service method
  viewProduct(id:string){

    const  url = 'http://localhost:3000/products/'+id;
    return this.httpClient.get(url); // returns an Observable

  }


  // 3. service for "update-product" component , pass a body to the service method
  updateProduct(productId: string,productBody: Product){
    const  url = 'http://localhost:3000/products/'+productId;
    return this.httpClient.put(url,productBody); // returns an Observable
  }



  // 4. service for "delete-product" component , pass a body to the service method
  deleteProduct(productId: string){
    const  url = 'http://localhost:3000/products/'+productId;
    return this.httpClient.delete(url); // returns an Observable
  }
  

  // 5. service for "search-product-by-category" component , pass a body to the service method
  viewProductByCategory(category: string) : Observable<Product>{
    const  url = 'http://localhost:3000/products?categoryId='+category;
    return this.httpClient.get<Product>(url); // returns an Observable
  }


  // 6. service for "search-product-by-date" component , pass a body to the service method
  viewProductByDate(date: string) : Observable<Product>{
    const  url = 'http://localhost:3000/products/date='+date;
    return this.httpClient.get<Product>(url); // returns an Observable
  }

  // 7. service for "view-all-products" component , pass a body to the service method
  viewAllProducts() : Observable<Product>{
    const  url = 'http://localhost:3000/products';
    return this.httpClient.get<Product>(url); // returns an Observable
  }


  // FOR SIDE-BAR
  getCategories() : Observable<Category>
  {
    const  url = 'http://localhost:3000/categories';
    return this.httpClient.get<Category>(url);
  }

}
