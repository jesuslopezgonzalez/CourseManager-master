package com.coursemanager.model;

import java.util.Arrays;
import java.util.List;

public enum CourseLevel {
	 Basico
	,Intermedio
	,Avanzado;
	
	public static List<CourseLevel> list(){
		 return Arrays.asList(values());
	 }
	
	public static CourseLevel parse(String value){
		CourseLevel courseLevel = null;
		for(CourseLevel test : list()){
			if(test.name().equalsIgnoreCase(value)){
				courseLevel = test;
				break;
			}
		}
		return courseLevel;
	}
}
