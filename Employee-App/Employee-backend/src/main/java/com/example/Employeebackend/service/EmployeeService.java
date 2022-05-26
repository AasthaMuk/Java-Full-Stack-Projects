package com.example.Employeebackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Employeebackend.dao.EmployeeDAO;
import com.example.Employeebackend.pojo.Employee;

@Service
public class EmployeeService {
	
	@Autowired
	private EmployeeDAO empdao;
	
	
	public List<Employee> getAllEmployees()
	{
		List<Employee> e = empdao.findAll();
		return e;
	}
	
	
	public Employee getEmployeeById(int id)
	{
		Employee e = empdao.findById(id).get();
		return e;
	}
	
	public void createEmployee(Employee e)
	{
		empdao.save(e);
		
	}
	
	public void updateEmployee(Employee emp,int id)
	{
		Employee e = empdao.findById(id).get();
		
		e.setName(emp.getName());
		e.setAge(emp.getAge());
		e.setEmailid(emp.getEmailid());
		e.setSalary(emp.getSalary());
		
		empdao.save(e);
	}
	
	public void deleteEmployee(int id)
	{
        Employee e = empdao.findById(id).get();
		empdao.delete(e);
	}

}
