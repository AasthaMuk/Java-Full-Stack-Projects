package com.example.demo3.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo3.entity.Courses;
import com.example.demo3.repository.CourseRepository;



@Service
public class CourseServiceImpl implements CourseService{

//   List<Courses> list;
//   
//   public CourseServiceImpl() {
//	
//	   list = new ArrayList<Courses>();
//	   list.add(new Courses(145,"Java Courses","basic java course"));
//	   list.add(new Courses(146,"AWS Courses","basic aws course"));
//   }

    @Autowired
	private CourseRepository repo;

    
	@Override
	public Iterable<Courses> getCourses() {
		return repo.findAll();
	}



	@Override
	public Optional<Courses> getCourse(int id) {
		
		return repo.findById(id);
	}



	@Override
	public Courses addCourse(Courses c) {
		
		repo.save(c);
		return c;
	}



	@Override
	public Courses updateCourse(Courses c) {
		
		repo.save(c);
		return c;
	}



	@Override
	public void deleteCourse(int id) {
		
	   repo.deleteById(id);
		
	}
	
	
	

}
