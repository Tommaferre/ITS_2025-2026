package controller;

import model.WordleModel;
import view.WordleView;

import java.util.ArrayList;
import java.util.List;


//logica del gioco (gestione tentativi controllo lettere e mostra del risultato)

//crea i riferimenti al modello e alla vista (metodo per poi lanciare nel main il gioco)
public class WordleCtrl {
    WordleModel model;
    WordleView view;
    
//Metodo costruttore --> riceve le istanze del model e della view e le salva    
    public WordleCtrl(WordleModel m, WordleView v) {
        model = m;
        view = v;
  }
    
    
//metodo principale (mostra il messaggio di benvenuto, recupera la parola corretta dal model
//imposta il numero massimo di tentativi a 6
    public void gioca() {
        view.mostraBenvenuto();
        String parolaCorretta = model.getWord();
        int tentativi = 6;
        
        
//loop dei tentativi: chiede all'utente un tentativo --> se non è da 5 lettere mostra errore e
//non lo conta se invece è giusto mostra il messaggio di vittoria
        for (int i = 1; i <= tentativi; i++) {
            String guess = view.nuovoTentativo(i).toUpperCase();

            if (guess.length() != 5) {
                view.mostraErrore();
                i--; // non conta come tentativo valido se la parola inserita non è lunga 5 lettere
                continue;
            }

            if (guess.equals(parolaCorretta)) {
                view.mostraVittoria();
                return;
            }

//creazione di 3 liste per le lettere in base alla posizione corretta, sbagliata o se la lettera
//non è proprio presente            
            List<Character> corrette = new ArrayList<>();
            List<Character> presenti = new ArrayList<>();
            List<Character> errate = new ArrayList<>();
            
            
// Lettere dell'utente suddivise in corrette presenti e errate
            for (int j = 0; j < 5; j++) {
                char c = guess.charAt(j);
                if (c == parolaCorretta.charAt(j)) {
                    corrette.add(c);
                } else if (parolaCorretta.contains(String.valueOf(c))) {
                    presenti.add(c);
                } else {
                    errate.add(c);
                }
            }

// Mostra i risultati separati dopo ogni tentativo 
            view.mostraRisultato("Lettere corrette (posizione giusta): " + corrette);
            view.mostraRisultato("Lettere presenti (posizione sbagliata): " + presenti);
            view.mostraRisultato("Lettere errate: " + errate);
        }
//se i tentativi finiscono stampa la parola corretta
        view.mostraSconfitta(parolaCorretta);
    }
}
