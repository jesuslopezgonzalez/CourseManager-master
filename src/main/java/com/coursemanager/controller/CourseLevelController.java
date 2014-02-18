package com.coursemanager.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.coursemanager.model.CourseLevel;

@Controller
public class CourseLevelController {

	@RequestMapping(value="/courseLevel/get", method=RequestMethod.GET)
	public @ResponseBody List<CourseLevel> getCourseLevelsJSON(){
		return CourseLevel.list();
	}
}
