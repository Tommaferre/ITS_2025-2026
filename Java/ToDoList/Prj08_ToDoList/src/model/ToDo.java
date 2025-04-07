package model;

import java.time.LocalDate;
import java.time.LocalTime;

public class ToDo {
	
	private String descrizione;
	private LocalDate date;
	private LocalTime time;
	private boolean done;
	
	public ToDo(String descrizione) {
		super();
		this.descrizione = descrizione;
		this.date = LocalDate.now();
		this.time = LocalTime.now();
		this.done= false;
	}

	public String getDescrizione() {
		return descrizione;
	}

	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public LocalTime getTime() {
		return time;
	}

	public void setTime(LocalTime time) {
		this.time = time;
	}

	public boolean isDone() {
		return done;
	}

	public void setDone(boolean done) {
		this.done = done;
	}

	@Override
	public String toString() {
		return "ToDo [descrizione=" + descrizione 
				+ ", date=" + date 
				+ ", time=" + time 
				+ ", done=" + done + "]";
	}

	
}
