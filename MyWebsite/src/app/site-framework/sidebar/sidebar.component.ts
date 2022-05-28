import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { ProductsServiceService } from 'src/app/Services/products-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categoryList: any[] = [];

  constructor(private productService:ProductsServiceService) {}

  ngOnInit(): void {

    this.productService.getCategories().subscribe(data =>{
        
        this.categoryList= data as unknown as any[]; 
    });
  }

}
