import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  empId = 0;

  constructor(private route:ActivatedRoute,
        private empService:EmployeeService) { }

  ngOnInit(): void {
      
       this.route.params.subscribe(data =>{
            this.empId=data['id']
       })

       this.empService.deleteEmployee(this.empId).subscribe(data =>{
           console.log(data)
       })
  }

}
