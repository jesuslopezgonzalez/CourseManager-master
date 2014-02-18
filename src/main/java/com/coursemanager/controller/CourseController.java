package com.coursemanager.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.coursemanager.dao.CourseMapper;
import com.coursemanager.model.Course;

import javax.annotation.Resource;

@Controller
public class CourseController {
	@Resource
	CourseMapper courseMapper;
	
	@RequestMapping("/")
	public String index(ModelMap model) {
		return "index";
	}
	
	@RequestMapping(value="/course/read/{startPosition}/{maxResults}", method=RequestMethod.GET)
	public @ResponseBody List<Course> getCoursesInJSON(@PathVariable String startPosition,@PathVariable String maxResults) {
		Integer sPosition = 0;
		if(!startPosition.isEmpty()) sPosition = Integer.parseInt(startPosition);
		Integer mResults = 4;
		if(!startPosition.isEmpty()) mResults = Integer.parseInt(maxResults);
		return courseMapper.getPaginated(sPosition, mResults);
	}
	
	@RequestMapping(value="/course/create/", method=RequestMethod.POST)
	public @ResponseBody Course createCourse(@RequestBody final Course course) {
		courseMapper.insert(course);
		return course;
	}
 
}