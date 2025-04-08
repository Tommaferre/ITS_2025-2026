package view;

import java.util.Scanner;


//si occupa della comunicazione con l'utente (stampa e lettura)

public class WordleView {
	Scanner input = new Scanner(System.in);
	
	public void mostraBenvenuto() {
		System.out.println("Benvenuto nel mio gioco tipo WORDLE");
	}
	public String nuovoTentativo(int numero) {
        System.out.print("Tentativo " + numero + ", inserisci la parola: ");
        return input.nextLine().toUpperCase();
    }

    public void mostraRisultato(String risultato) {
        System.out.println(risultato);
    }

    public void mostraVittoria() {
        System.out.println("Hai indovinato!");
    }

    public void mostraSconfitta(String parola) {
        System.out.println("Hai perso! La parola era: " + parola);
    }

    public void mostraErrore() {
        System.out.println("Inserisci solo una parola di 5 lettere.");
    }
	
	
}
