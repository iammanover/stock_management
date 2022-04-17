import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  // addProductURL : string;
  // getProductURL : string;
  // updateProductUrl : string;
  // deleteProductUrl : string;

  // constructor(private http : HttpClient) {

  //   this.addProductURL = 'http://localhost:3000/posts';
  //   this.getProductURL = 'http://localhost:3000/posts';
  //   this.updateProductUrl = 'http://localhost:3000/posts';
  //   this.deleteProductUrl = 'http://localhost:3000/posts';
    
  //  }

  
  
  // addProduct(pro : Product): Observable<Product> {
  //   return this.http.post<Product>(this.addProductURL,pro);
  // }

  // getAllProduct(): Observable<Product[]>{
  //   return this.http.get<Product[]>(this.getProductURL);
  // }

  // updateProduct(pro :Product) : Observable<Product>{
  //   return this.http.put<Product>(this.updateProductUrl, pro);
  // }

  // deleteProduct(pro : Product) : Observable<Product> {
  //   return this.http.delete<Product>(this.deleteProductUrl+'/'+pro.Id);
  // }


  addEmpURL : string;
  getEmpURL : string;
  updateEmpUrl : string;
  deleteEmpUrl : string;

  constructor(private http : HttpClient) {

    this.addEmpURL = 'http://localhost:3000/posts';
    this.getEmpURL = 'http://localhost:3000/posts';
    this.updateEmpUrl = 'http://localhost:3000/posts';
    this.deleteEmpUrl = 'http://localhost:3000/posts';

   }

   addProduct(emp : Product): Observable<Product> {
     return this.http.post<Product>(this.addEmpURL,emp);
   }

   getAllProduct(): Observable<Product[]>{
     return this.http.get<Product[]>(this.getEmpURL);
   }

   updateproduct(emp :Product) : Observable<Product>{
     return this.http.put<Product>(this.updateEmpUrl, emp);
   }

   deleteProduct(emp : Product) : Observable<Product> {
     return this.http.delete<Product>(this.deleteEmpUrl+'/'+emp.id);
   }
  

 
}
