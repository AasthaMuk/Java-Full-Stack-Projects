package com.aastha.spring_postgresql_hibernate.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aastha.spring_postgresql_hibernate.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer>{

	
}
