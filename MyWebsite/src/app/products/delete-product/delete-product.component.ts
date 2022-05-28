import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsServiceService } from 'src/app/Services/products-service.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  productId = '';

  constructor(private route:ActivatedRoute,
      private productService:ProductsServiceService) { }

  ngOnInit(): void {

    this.route.params.subscribe(data =>{

      this.productId = data['id']
    });
    
    this.productService.deleteProduct(this.productId).subscribe(data =>{
       console.log(data);
    })

  }

}
