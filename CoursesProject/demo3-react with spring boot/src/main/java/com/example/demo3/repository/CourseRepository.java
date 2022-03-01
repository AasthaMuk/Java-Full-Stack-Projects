package com.example.demo3.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo3.entity.Courses;

@Repository
public interface CourseRepository extends CrudRepository<Courses,Integer>{
  
	
}
