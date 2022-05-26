import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/Models/employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  empId=0;
  empDetails!: Employee;
  updateEmpForm : FormGroup=new FormGroup({})
  dataloaded:boolean = false


  constructor(private formBuilder:FormBuilder,
         private route:ActivatedRoute,
         private empService:EmployeeService) { }

  ngOnInit(): void {
    
    this.dataloaded=false

    this.route.params.subscribe(data =>{
      this.empId=data['id']
    })

    this.empService.viewById(this.empId).subscribe(data =>{
       this.empDetails=data as Employee;

       this.updateEmpForm=this.formBuilder.group({   
        'name':new FormControl(this.empDetails.name),
        'age':new FormControl(this.empDetails.age),
        'salary':new FormControl(this.empDetails.salary),
        'emailid':new FormControl(this.empDetails.emailid)
       })
       
       this.dataloaded=true
    })

  }

  updateEmp(){

    this.empService.updateEmployee(this.empId,this.updateEmpForm.value).subscribe(data =>{
          console.log(this.updateEmpForm.value)
    })
  }

}
