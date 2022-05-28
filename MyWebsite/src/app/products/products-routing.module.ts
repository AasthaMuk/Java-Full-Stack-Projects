import { NgModule } from '@angular/core';

import { RouterModule,Routes } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: 'products', 
    children:[
      {path:'',component: ViewAllProductsComponent },
      { path: 'product/:id', component: ViewProductComponent },
      { path: 'delete-product/:id', component: DeleteProductComponent }
    ]
  },  
  { path: 'create-product', component: CreateProductComponent },
  { path: 'update-product/:id', component: UpdateProductComponent },
  
  { path: 'search-date', component: ViewAllProductsByDateComponent},
  { path: 'category/:id', component: ViewAllProductsByCategoryComponent }
  // { path: 'search-category', component: ViewAllProductsByCategoryComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class ProductsRoutingModule { }
