package com.aastha.spring_postgresql_hibernate.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aastha.spring_postgresql_hibernate.dao.EmployeeRepository;
import com.aastha.spring_postgresql_hibernate.exception.EmployeeNotFoundException;
import com.aastha.spring_postgresql_hibernate.model.Employee;

@RestController
@RequestMapping("/api/v1")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository empRepo;
	
	@GetMapping("getAll")
	public List<Employee> getAllEmployees(){
		
		List<Employee> emplist = empRepo.findAll();
		return emplist;
	}
	
	
	@GetMapping("/get/{id}")
	public ResponseEntity<Employee> getEmpById(@PathVariable(value="id") int id) throws EmployeeNotFoundException
    {
		  if(id!=0) {
		     Employee e = empRepo.getById(id);
		     return ResponseEntity.ok().body(e);
		  }else {
			  throw new EmployeeNotFoundException("Employee Not found with the id: "+id);
		  }
		
	}
	
	
	@PostMapping("/create")
	public Employee createEmployee(@RequestBody Employee emp) {
		return empRepo.save(emp);
	} 
	
	
	@PutMapping("/update/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable(value="id") int id,@RequestBody Employee e) throws EmployeeNotFoundException
	{
		if(id!=0) {
		Employee emp = empRepo.getById(id);
				 
		
		emp.setFirstname(e.getFirstname());
		emp.setLastname(e.getLastname());
		emp.setEmailid(e.getEmailid());
        
        return ResponseEntity.ok(empRepo.save(emp));
		}
		else {
			throw new EmployeeNotFoundException("Employee Not found with the id: "+id);
		}
	}
	
	
	@DeleteMapping("/delete/{id}")
    public Map<String,Boolean> deleteEmployee(@PathVariable(value="id") int id) throws EmployeeNotFoundException
	{
    	
		if(id!=0) {
		Employee emp = empRepo.getById(id);				
		
		empRepo.delete(emp);
		
		Map<String,Boolean> response = new HashMap<String, Boolean>();
		response.put("deleted", Boolean.TRUE);
		
		return response;
		}
		else {
			throw new EmployeeNotFoundException("Employee Not found with the id: "+id);
		}
    }
	
	
	

}
