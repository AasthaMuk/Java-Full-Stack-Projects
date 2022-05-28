import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ProductsServiceService } from 'src/app/Services/products-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId = '';
  productDetails!: Product;
  updateProductForm : FormGroup = new FormGroup({});
  dataloaded:boolean = false

  constructor(private formBuilder:FormBuilder,
       private route:ActivatedRoute,
       private productService:ProductsServiceService) { }

  ngOnInit(): void {

    this.dataloaded=false
    this.route.params.subscribe(data=>{

      this.productId=data['id'];
    });

    this.productService.viewProduct(this.productId).subscribe(data =>{
             
        this.productDetails=data as Product;

        this.updateProductForm=this.formBuilder.group({
          'productName':new FormControl(this.productDetails.productName),
          'price':new FormControl(this.productDetails.price),
          'isAvailable':new FormControl(this.productDetails.isAvailable),
          'rating':new FormControl(this.productDetails.rating),
          'description':new FormControl(this.productDetails.description),
          'productImg':new FormControl(this.productDetails.productImg),
          'categoryId':new FormControl(this.productDetails.categoryId),
          'color':new FormControl(this.productDetails.color),
          'reviews':new FormControl(this.productDetails.reviews)
        })

        this.dataloaded=true
    })

  }

  updateProduct()
  {
    this.productService.updateProduct(this.productId,this.updateProductForm.value).subscribe(data =>{
         console.log(data);
    })
  }
  

}
