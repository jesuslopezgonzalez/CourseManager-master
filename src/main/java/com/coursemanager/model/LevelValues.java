package com.coursemanager.model;

public class LevelValues {
	public static final Short BASICO = 10;
	public static final Short INTERMEDIO = 20;
	public static final Short AVANZADO = 30;
	
	public static String getLevelLabel(Short Value){
		String label = "";
		switch(Value){
			case 10:
				label = "Básico";
				break;
			case 20:
				label = "Intermedio";
				break;
			case 30:
				label = "Avanzado";
				break;
		}
		return label;
	}
}
