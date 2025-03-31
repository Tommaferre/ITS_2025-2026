# Gestione di un sistema di prenotazione visite mediche

Obiettivo: scrivere un programma in Python che gestisca un sistema di prenotazione per visite mediche.  

Passi da fare:  
- [x] analisi
- [x] script con il dump.py per generare il db con le tabelle per Medico, Paziente, Visita  
- [x] script per la classe Paziente:  
    - inserire nuovo paziente (id, nome, cognome, email)  
    - visualizzare pazienti esistenti  
- [x] script per la classe Medico:  
    - inserire nuovo medico (id, nome, cognome)  
    - visualizzare medici esistenti  
    - controllo per impedire la registrazione di medici se non ci sono pazienti disponibili  
- [x] script per la classe Visita:  
    - [x] inserire nuova visita (id, id_paziente, id_medico, nome_visita)  
    - [x]visualizzare visite esistenti  
    - [x]impedire la registrazione di una visita se:  
                                                - [x] non ci sono pazienti/medici,  
                                                - [x] un medico può visitare al massimo 3 pazienti,  
                                                - [-] non deve essere possibile prenotare una visita se non ci sono almeno un paziente senza un medico assegnato e un medico con disponibilità  
- [x] main:  
    menù per gestire le prenotazioni e che sia di facile lettura per l'utente  
- [x] controllo per tutti gli input  
- [x] commenta il codice dove necessario