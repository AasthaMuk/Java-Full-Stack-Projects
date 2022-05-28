import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Models/product';
import { ProductsServiceService } from 'src/app/Services/products-service.service';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productId = '';
   
  productDetails!: Product;

  constructor(private route:ActivatedRoute,
            private productService:ProductsServiceService) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(data =>{
          this.productId = data['id']
    });

    this.productService.viewProduct(this.productId).subscribe(data =>{
           this.productDetails=data as Product;
    });
  }

}
