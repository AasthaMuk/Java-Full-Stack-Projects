import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GetEmployeeComponent } from './Components/get-employee/get-employee.component';
import { GetAllEmployeesComponent } from './Components/get-all-employees/get-all-employees.component';
import { CreateEmployeeComponent } from './Components/create-employee/create-employee.component';
import { HeaderComponent } from './Components/siteframework/header/header.component';
import { FooterComponent } from './Components/siteframework/footer/footer.component';
import { NavComponent } from './Components/siteframework/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { UpdateEmployeeComponent } from './Components/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './Components/delete-employee/delete-employee.component';
import { SidebarComponent } from './Components/siteframework/sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    GetEmployeeComponent,
    GetAllEmployeesComponent,
    CreateEmployeeComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    UpdateEmployeeComponent,
    DeleteEmployeeComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
