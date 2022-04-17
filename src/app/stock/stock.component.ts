import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { Product } from '../model/product';
import { ProductService } from '../services/product.service'

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {


  productDetail !: FormGroup;
  empObj : Product = new Product();
  empList : Product[] = [];

  constructor(private formBuilder : FormBuilder, private empService : ProductService) { }

  ngOnInit(): void {

    this.getAllProduct();

    this.productDetail = this.formBuilder.group({
      id : [''],
      name : [''],
      email: [''],
      salary: ['']
    });    

  }

  addProduct() {
    console.log(this.productDetail);
    this.empObj.id = this.productDetail.value.id;
    this.empObj.Name = this.productDetail.value.name;
    this.empObj.Quantity = this.productDetail.value.email;
    this.empObj.Price = this.productDetail.value.salary;

    this.empService.addProduct(this.empObj).subscribe(res=>{
        console.log(res);
        this.getAllProduct();
    },err=>{
        console.log(err);
    });

  }

  getAllProduct() {
    this.empService.getAllProduct().subscribe(res=>{
        this.empList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  editProduct(emp : Product) {
    this.productDetail.controls['id'].setValue(emp.id);
    this.productDetail.controls['name'].setValue(emp.Name);
    this.productDetail.controls['email'].setValue(emp.Quantity);
    this.productDetail.controls['salary'].setValue(emp.Price);

  }

  updateProduct() {

    this.empObj.id = this.productDetail.value.id;
    this.empObj.Name = this.productDetail.value.name;
    this.empObj.Quantity = this.productDetail.value.email;
    this.empObj.Price = this.productDetail.value.salary;

    this.empService.updateProduct(this.empObj).subscribe(res=>{
      console.log(res);
      this.getAllProduct();
    },err=>{
      console.log(err);
    })

  }

  deleteProduct(pro : Product) {

    this.empService.deleteProduct(pro).subscribe(res=>{
      console.log(res);
      alert('Product deleted successfully');
      this.getAllProduct();
    },err => {
      console.log(err);
    });

  }


}
