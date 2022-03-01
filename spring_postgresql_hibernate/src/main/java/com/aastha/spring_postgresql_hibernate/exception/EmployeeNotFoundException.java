package com.aastha.spring_postgresql_hibernate.exception;

import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class EmployeeNotFoundException extends Exception{

	private static final long serialVersionUID = 1L;

	public EmployeeNotFoundException(String message){
    	super(message);
    }
}