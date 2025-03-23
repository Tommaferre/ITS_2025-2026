# Analisi del Sistema di Prenotazione per Eventi Culturali

## Obiettivo
L'obiettivo di questo esercizio è creare un programma in Python che gestisca un sistema di prenotazione per eventi culturali. Il programma deve avere diverse classi per rappresentare gli oggetti principali e una classe di utilities per la gestione del database.

## Passi da Seguire

### 1. Creazione delle Classi
- **Classe Evento**: Questa classe rappresenterà un evento culturale. Dovrà contenere attributi come il nome dell'evento, la data, l'ora, la sala in cui si terrà e il numero massimo di partecipanti.
- **Classe Partecipante**: Questa classe rappresenterà un partecipante a un evento. Dovrà contenere attributi come il nome del partecipante, l'email e l'evento a cui parteciperà.
- **Classe Sala**: Questa classe rappresenterà una sala in cui si terranno gli eventi. Dovrà contenere attributi come il nome della sala, la capacità massima e la disponibilità.

### 2. Creazione della Classe DatabaseUtilities
- **DatabaseUtilities**: Questa classe sarà responsabile della gestione delle operazioni di lettura e scrittura sul database. Dovrà contenere metodi per inserire dati, aggiornare dati e recuperare dati.

### 3. Creazione del Main
- **Main**: Dovrà permettere di registrare sale, eventi e partecipanti, gestendo le varie condizioni e restrizioni specificate. 

### 4. Implementazione delle Funzionalità
- **Registrare Sale**: Il programma dovrà permettere di aggiungere nuove sale al database.
- **Registrare Eventi**: Il programma dovrà permettere di aggiungere nuovi eventi al database, verificando che esistano sale disponibili.
- **Registrare Partecipanti**: Il programma dovrà permettere di aggiungere nuovi partecipanti agli eventi, verificando che esistano eventi e che ci siano posti disponibili.

### 5. Creazione del File dump.py
- **dump.py**: Questo script dovrà creare le tabelle necessarie nel database per permettere al programma di funzionare correttamente. Dovrà includere la definizione delle tabelle per le sale, gli eventi e i partecipanti.


### 6. Gestione degli Errori
- **Try-Except**: Utilizzare il costrutto try-except per gestire tutti i possibili errori che potrebbero verificarsi durante l'esecuzione del programma.

### 7. Gestione dell'Output a Video
- **Output**: Assicurarsi che l'output a video sia di facile lettura per l'utente. Questo include messaggi chiari e formattati correttamente.

