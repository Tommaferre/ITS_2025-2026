package model;

import java.time.LocalDate;
import java.time.LocalTime;

public class ToDo {
	
	private String descrizione;
	private LocalDate data;
	private LocalTime time;
	private boolean done;
	
	public ToDo(String descrizione) {
		super();
		this.descrizione = descrizione;
	}

	
}
