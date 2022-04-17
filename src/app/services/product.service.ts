import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  addProductURL : string;
  getProductURL : string;
  updateProductUrl : string;
  deleteProductUrl : string;

  constructor(private http : HttpClient) {

    this.addProductURL = 'http://localhost:5432/pro/addProduct';
    this.getProductURL = 'http://localhost:5432/emp/getAll';
    this.updateProductUrl = 'http://localhost:5432/emp/updateProduct';
    this.deleteProductUrl = 'http://localhost:5432/emp/deleteProductById';
    5432
   }

   addProduct(pro : Product): Observable<Product> {
     return this.http.post<Product>(this.addProductURL,pro);
   }

   getAllProduct(): Observable<Product[]>{
     return this.http.get<Product[]>(this.getProductURL);
   }

   updateProduct(pro :Product) : Observable<Product>{
     return this.http.put<Product>(this.updateProductUrl, pro);
   }

   deleteProduct(pro : Product) : Observable<Product> {
     return this.http.delete<Product>(this.deleteProductUrl+'/'+pro.ProductId);
   }
  

}