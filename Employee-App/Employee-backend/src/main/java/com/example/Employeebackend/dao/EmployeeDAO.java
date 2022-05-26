package com.example.Employeebackend.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Employeebackend.pojo.Employee;

public interface EmployeeDAO extends JpaRepository<Employee,Integer>{

}
