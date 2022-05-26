import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GetAllEmployeesComponent } from './Components/get-all-employees/get-all-employees.component';
import { CreateEmployeeComponent } from './Components/create-employee/create-employee.component';
import { GetEmployeeComponent } from './Components/get-employee/get-employee.component';
import { UpdateEmployeeComponent } from './Components/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './Components/delete-employee/delete-employee.component';

const routes:Routes=[
  {path:'emp',
     children:[
      {path:'',component:GetAllEmployeesComponent},
      {path:'create',component:CreateEmployeeComponent},
      {path:'view/:id',component:GetEmployeeComponent},
      {path:'update/:id',component:UpdateEmployeeComponent},
      {path:'delete/:id',component:DeleteEmployeeComponent}
    ]
  }
]

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
