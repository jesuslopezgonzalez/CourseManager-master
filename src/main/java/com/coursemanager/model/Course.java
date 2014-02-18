package com.coursemanager.model;

import java.io.Serializable;

public class Course implements Serializable{
	  
	private static final long serialVersionUID = 97543851L;
	
	@Override
	public boolean equals(Object obj) {
		if((obj instanceof Course) 
				&& ((Course)obj).getPk_course() == this.pk_course
				&& ((Course)obj).getFk_teacher() == this.fk_teacher
				&& ((Course)obj).getActive() == this.active
				&& ((Course)obj).getHours() == this.hours
				&& ((Course)obj).getTitle() == this.title
				&& ((Course)obj).getLevel() == this.level){
			return true;
		}
		else{
			return false;
		}
	}
	
	@Override
	public int hashCode() {
		int hash = 11;
		hash += this.pk_course;
		hash += this.fk_teacher;
		hash += this.active.hashCode();
		hash += this.title.hashCode();
		hash += this.level.hashCode();
		return hash;
	}	
	private Long pk_course;
	private String title;
	private Long fk_teacher;
	private Boolean active;
	private Integer hours;
	private CourseLevel level;
		
	public Long getPk_course() {
		return pk_course;
	}
	public void setPk_course(Long pk_course) {
		this.pk_course = pk_course;
	}
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	
	public Long getFk_teacher() {
		return fk_teacher;
	}
	public void setFk_teacher(Long fk_teacher) {
		this.fk_teacher = fk_teacher;
	}
	
	public Boolean getActive() {
		return active;
	}
	public void setActive(Boolean active) {
		this.active = active;
	}
	
	public Integer getHours() {
		return hours;
	}
	public void setHours(Integer hours) {
		this.hours = hours;
	}
	
	public CourseLevel getLevel() {
		return level;
	}
	public void setLevel(CourseLevel level) {
		this.level = level;
	}
	public void setLevel(String level){
		this.level = CourseLevel.valueOf(level);
	}
	
}
