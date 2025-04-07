package controller;

import java.util.ArrayList;
import java.util.List;

import model.ToDo;

public class ToDoCtrl {
	
	private List<ToDo> toDos = new ArrayList<>();
	
	public void addToDo(ToDo t) {//chiamo qui
		toDos.add(t);
	}
	//overload del metodo addToDo()
	public void addToDo(String desc) {
		ToDo t = new ToDo(desc);
		toDos.add(t);//da qui
	}
	
	public List<ToDo> getToDos() {
		return toDos;
	}
	
	public List<ToDo> getToDosCompleti() {
		
		List<ToDo> toDoCompleti = new ArrayList<>(); //scatola vuota
		
		for (ToDo t : toDos) {
			if (t.isDone()) {
				toDoCompleti.add(t);
			}
		}
		
		return toDos;
	}
	
	
}
