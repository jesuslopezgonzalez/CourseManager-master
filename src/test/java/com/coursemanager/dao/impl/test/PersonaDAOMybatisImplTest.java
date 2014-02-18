package com.coursemanager.dao.impl.test;

import static org.junit.Assert.assertEquals;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.transaction.TransactionConfiguration;
import org.springframework.transaction.annotation.Transactional;

import com.coursemanager.dao.CourseMapper;
import com.coursemanager.model.Course;
import com.coursemanager.model.CourseLevel;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:/mvc-dispatcher-servlet.xml"})
@Transactional
@TransactionConfiguration(defaultRollback = false)
public class PersonaDAOMybatisImplTest {

	@Resource
	CourseMapper courseMapper;
	
	@Test
	public void crudCourse(){
		long sizeInitial = courseMapper.getAll().size();
		System.out.println("-->");
		Course course = new Course();
		course.setTitle("Curso de prueba 1");
		course.setActive(true);
		course.setLevel(CourseLevel.Intermedio);
		System.out.println(course.getLevel());
		course.setHours(55);
		courseMapper.insert(course);
		
		assertEquals(sizeInitial+1, courseMapper.getAll().size());
		
		assertEquals("Curso de prueba 1", courseMapper.findByPk(course.getPk_course()).getTitle());
		
		course.setTitle("Course de prueba 2");
		courseMapper.update(course);
		
		assertEquals("Course de prueba 2", courseMapper.findByPk(course.getPk_course()).getTitle());
		
		courseMapper.remove(course);
		assertEquals(sizeInitial, courseMapper.getAll().size());
	}
}
