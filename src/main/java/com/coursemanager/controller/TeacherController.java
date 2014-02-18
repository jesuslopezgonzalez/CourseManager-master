package com.coursemanager.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.coursemanager.dao.TeacherMapper;
import com.coursemanager.model.Teacher;

import javax.annotation.Resource;

@Controller
public class TeacherController {
	@Resource
	TeacherMapper teacherMapper;
	
	@RequestMapping(value="/teacher/read/", method=RequestMethod.GET)
	public @ResponseBody List<Teacher> getCoursesInJSON() {
		return teacherMapper.getAll();
	}
}
