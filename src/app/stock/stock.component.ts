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
  productObj: Product = new Product();
  productList: Product[] = [];

  constructor(private formBuilder: FormBuilder, private proService: ProductService) { }

  ngOnInit(): void {

    this.getAllProduct();

    this.productDetail = this.formBuilder.group({
      ProductId: [''],
      ProductName: [''],
      ProductQuantity: [''],
      ProductPrice: ['']
    });

  }

  addProduct() {
    console.log(this.productDetail);
    this.productObj.ProductId = this.productDetail.value.ProductId;
    this.productObj.ProductName = this.productDetail.value.ProductName;
    this.productObj.ProductQuantity = this.productDetail.value.ProductQuantity;
    this.productObj.ProductPrice = this.productDetail.value.ProductPrice;

    this.proService.addProduct(this.productObj).subscribe(res => {
      console.log(res);
      this.getAllProduct();
    }, err => {
      console.log(err);
    });

  }

  getAllProduct() {
    this.proService.getAllProduct().subscribe(res => {
      this.productList = res;
    }, err => {
      console.log("error while fetching data.")
    });
  }

  editProduct(pro: Product) {
    this.productDetail.controls['ProductId'].setValue(pro.ProductId);
    this.productDetail.controls['ProductName'].setValue(pro.ProductName);
    this.productDetail.controls['ProductQuantity'].setValue(pro.ProductQuantity);
    this.productDetail.controls['ProductPricece'].setValue(pro.ProductPrice);



  }

  updateProduct() {

    this.productObj.ProductId = this.productDetail.value.ProductId;
    this.productObj.ProductName = this.productDetail.value.ProductName;
    this.productObj.ProductQuantity = this.productDetail.value.ProductQuantity;
    this.productObj.ProductPrice = this.productDetail.value.ProductPrice;
    ;

    this.proService.updateProduct(this.productObj).subscribe(res => {
      console.log(res);
      this.getAllProduct();
    }, err => {
      console.log(err);
    })


  }

  deleteProduct(pro: Product) {

    this.proService.deleteProduct(pro).subscribe(res => {
      console.log(res);
      alert('Product deleted successfully');
      this.getAllProduct();
    }, err => {
      console.log(err);
    });

  }


}
