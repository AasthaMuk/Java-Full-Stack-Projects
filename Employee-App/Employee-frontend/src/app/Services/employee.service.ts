import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../Models/employee';




@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  base_url = "http://localhost:8090/"
  constructor(private httpClient:HttpClient) { }
 
  // Service Methods :

  // 1. View all employees
  viewAllEmployees(){
    return this.httpClient.get(this.base_url+"emp"); 
  }

  // 2. View an employee by id
  viewById(id:number){
    return this.httpClient.get(this.base_url+"emp/"+id);
  }

  // 3. Create an employee
  createEmployee(empBody:Employee){
    return this.httpClient.post(this.base_url+"create/emp",empBody);
  }

  // 4. Update an employee
  updateEmployee(id:number,empBody:Employee){
     return this.httpClient.put(this.base_url+"update/emp/"+id,empBody);
  }

  // 5. Delete an employee
  deleteEmployee(id:number){
     return this.httpClient.delete(this.base_url+"delete/emp/"+id)
  }

}
