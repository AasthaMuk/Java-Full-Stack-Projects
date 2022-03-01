package com.example.demo3.service;

import java.util.List;
import java.util.Optional;

import com.example.demo3.entity.Courses;

public interface CourseService {
	
	public Iterable<Courses> getCourses();
	
	public Optional<Courses> getCourse(int id);
	
	public Courses addCourse(Courses c);
	
	public Courses updateCourse(Courses c);
	
	public void deleteCourse(int id);
	

}
