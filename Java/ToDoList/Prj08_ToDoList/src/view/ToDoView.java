package view;

import java.util.List;

import model.ToDo;

public class ToDoView {
	
	public String listToDo(List<ToDo> todos) {
		String risposta = "";
		
		for (ToDo toDo : todos) {
			risposta += toDo +"\n";
		}
		
		return risposta;
	}

}
