import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/Models/employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  createEmpForm : FormGroup=new FormGroup({});
  
  constructor(private formBuilder:FormBuilder,
    private empService:EmployeeService) { }

  ngOnInit(): void {
     
    this.createEmpForm=this.formBuilder.group({
      'id':new FormControl(''),
      'name':new FormControl(''),
      'age':new FormControl(''),
      'salary':new FormControl(''),
      'emailid':new FormControl('')
    })
  }

  createEmp()
  {
     this.empService.createEmployee(this.createEmpForm.value).subscribe(data =>{
      console.log(this.createEmpForm.value)
    })
  }
}
