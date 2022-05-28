import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/app/Models/product';
import { ProductsServiceService } from 'src/app/Services/products-service.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  createProductForm : FormGroup=new FormGroup({});

  constructor(private formBuilder:FormBuilder,private productService:ProductsServiceService) { }

  ngOnInit(): void {

    this.createProductForm=this.formBuilder.group({
      'id':new FormControl(''),
      'productName':new FormControl(''),
      'price':new FormControl(''),
      'isAvailable':new FormControl(''),
      'rating':new FormControl(''),
      'description':new FormControl(''),
      'productImg':new FormControl(''),
      'categoryId':new FormControl(''),
      'color':new FormControl(''),
      'reviews':new FormControl('')
    })
  }

  
  createProduct()
  {
     this.productService.createProduct(this.createProductForm.value).subscribe(data =>{
          console.log(data);
     });
  }

}
