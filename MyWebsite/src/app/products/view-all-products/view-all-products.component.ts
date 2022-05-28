import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ProductsServiceService } from 'src/app/Services/products-service.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {

  productList : Product[] = [];
  constructor(private productService:ProductsServiceService) { }

  ngOnInit(): void {

    this.productService.viewAllProducts().subscribe(data =>{
        
      console.log(data)
      this.productList = data as unknown as Product[];
    });
  }

}
