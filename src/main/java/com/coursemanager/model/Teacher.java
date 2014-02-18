package com.coursemanager.model;

import java.io.Serializable;

public class Teacher implements Serializable{

	private static final long serialVersionUID = 5125482384501047084L;
	
	@Override
	public boolean equals(Object obj) {
		if((obj instanceof Teacher) 
				&& ((Teacher)obj).getPk_teacher() == this.pk_teacher
				&& ((Teacher)obj).getName() == this.name){
			return true;
		}
		else{
			return false;
		}
	}
	
	@Override
	public int hashCode() {
		int hash = 0;
		hash += this.pk_teacher;
		hash += this.name.hashCode();
		return hash;
	}
	
	private Long pk_teacher;
	private String name;
	
	public Long getPk_teacher() {
		return pk_teacher;
	}
	public void setPk_teacher(Long pk_teacher) {
		this.pk_teacher = pk_teacher;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
}
