package com.example.Employeebackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Employeebackend.pojo.Employee;
import com.example.Employeebackend.service.EmployeeService;

@CrossOrigin("http://localhost:4200")
@RestController
public class EmployeeController {
	
	@Autowired
	private EmployeeService empService;
	
	
	// get all employees
	@GetMapping("emp")
	public List<Employee> getAllEmployees()
	{
		List<Employee> e = empService.getAllEmployees();
		return e;
	}
	
	// get an employee by id
	@GetMapping("/emp/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable(value="id") int id)
	{
		Employee e = empService.getEmployeeById(id);
		return ResponseEntity.ok().body(e);
	}
	
	// create an employee
	@PostMapping("create/emp")
	public ResponseEntity<String> createEmployee(@RequestBody Employee emp)
	{
		empService.createEmployee(emp);
		return new ResponseEntity<>("Employee has been created !!!",HttpStatus.OK);
	}
	
	// update an employee
	@PutMapping("update/emp/{id}")
	public ResponseEntity<String> updateEmployee(@RequestBody Employee emp,@PathVariable(value="id") int id)
	{
		empService.updateEmployee(emp, id);
		return new ResponseEntity<>("Employee has been updated !!!",HttpStatus.OK);
	}
    
	// delete an employee
	@DeleteMapping("delete/emp/{id}")
	public ResponseEntity<String> deleteEmployee(@PathVariable(value="id") int id)
	{
		empService.deleteEmployee(id);
		return new ResponseEntity<>("Employee has been deleted !!!",HttpStatus.OK);
	}
}
