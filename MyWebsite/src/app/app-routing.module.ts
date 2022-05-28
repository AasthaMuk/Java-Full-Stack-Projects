import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { ListOrdersComponent } from './orders/list-orders/list-orders.component';
import { HomepageComponent } from './site-framework/homepage/homepage.component';


const routes: Routes = [
  {path:'',component:HomepageComponent},
  { path: 'orders', component:ListOrdersComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
