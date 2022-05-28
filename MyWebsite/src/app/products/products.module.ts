import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { ProductsRoutingModule } from './products-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CreateProductComponent,
    ViewProductComponent,
    ViewAllProductsComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ViewAllProductsByDateComponent,
    ViewAllProductsByCategoryComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
