import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/Models/employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent implements OnInit {

  empId=0;
  empDetails!: Employee;
  
  constructor(private route:ActivatedRoute,private empService:EmployeeService) { }

  ngOnInit(): void {

      this.route.params.subscribe(data =>{
        this.empId=data['id']
      });

      this.empService.viewById(this.empId).subscribe(data =>{
          this.empDetails=data as Employee;           
      })
  }

}
