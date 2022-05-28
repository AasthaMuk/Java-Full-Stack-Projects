import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { HomepageComponent } from './homepage/homepage.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    NavComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomepageComponent
  ]
})
export class SiteFrameworkModule { }
