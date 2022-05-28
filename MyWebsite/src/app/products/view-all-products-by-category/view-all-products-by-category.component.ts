import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsServiceService } from 'src/app/Services/products-service.service';

@Component({
  selector: 'app-view-all-products-by-category',
  templateUrl: './view-all-products-by-category.component.html',
  styleUrls: ['./view-all-products-by-category.component.css']
})
export class ViewAllProductsByCategoryComponent implements OnInit {

  category = '';

  productList : any[]=[];

  constructor(private route:ActivatedRoute,
                private productService:ProductsServiceService) { }

  ngOnInit(): void {
    // using query-params for search-category functionality
    this.route.params.subscribe(data =>{
          
      console.log(data)
          this.category = data['id'];

          this.productService.viewProductByCategory(this.category).subscribe(data =>{
               
            this.productList=data as unknown as any[];
          });

    });
  }

}
