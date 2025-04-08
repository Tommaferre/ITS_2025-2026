package model;

import java.util.Random;

//è tipo il cervello del gioco (contiene i dati)

public class WordleModel {
	 private final String[] parole = {"CUORE","CARNE","PIZZA","AMORE","SPADA"}; // parola da indovinare

	 private final String parolaDaIndovinare;
	 
	 public WordleModel() {
		 Random random = new Random();
		 
		 int indice = random.nextInt(parole.length);
		 
		 parolaDaIndovinare = parole[indice];
	 }
	 
	 public String getWord() {
        return parolaDaIndovinare;
    }
}
