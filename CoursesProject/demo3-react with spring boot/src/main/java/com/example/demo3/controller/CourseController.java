package com.example.demo3.controller;


import java.util.List;
import java.util.Optional;

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
import org.springframework.web.bind.annotation.RestController;

import com.example.demo3.entity.Courses;
import com.example.demo3.service.CourseService;
import com.example.demo3.service.CourseServiceImpl;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CourseController {
	
	@Autowired
	private CourseServiceImpl service;
	
	
	
	
	// get all courses
	@GetMapping("/courses")
	public Iterable<Courses> getCourses(){
		
		return service.getCourses();
	}
	
	
	
	// add a course
	@PostMapping("/courses/add")
	public Courses addCourse(@RequestBody Courses c){
		
		return service.addCourse(c);
	}
	
	// update a course
	@PutMapping("/courses/update")
	public Courses updateCourse(@RequestBody Courses c){
		
		return service.updateCourse(c);
	}
	
	// delete a course
	@DeleteMapping("/courses/delete/{courseid}")
	public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseid){
		
		try {
			
		    service.deleteCourse(Integer.parseInt(courseid));
		    return new ResponseEntity<>(HttpStatus.OK);
		
		} catch(Exception e) {
			
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
