import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-get-all-employees',
  templateUrl: './get-all-employees.component.html',
  styleUrls: ['./get-all-employees.component.css']
})
export class GetAllEmployeesComponent implements OnInit {
  
  empList : Employee[] = [];

  constructor(private empSevice:EmployeeService) { }

  ngOnInit(): void {

    this.empSevice.viewAllEmployees().subscribe(data =>{
        this.empList=data as unknown as Employee[];
    });
  }

}
