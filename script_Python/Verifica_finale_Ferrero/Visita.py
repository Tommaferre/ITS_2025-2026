import sqlite3
import re
from DatabaseUtilities import *
from Paziente import *
from Medico import *

#creazione degli oggetti
db = DatabaseUtilities()
paziente = Paziente()
medico = Medico()   

class Visita:

    #registrazione nuova visita
    def nuova_visita(self):
        print("Registrazione nuova visita")
        while True:
            #cerco se esistono pazienti e in caso stampo i pazienti esistenti
            result = db.fetchQuery('SELECT * FROM Paziente')
            if result:
                print("Lista pazienti registrati, ricorda l'ID del paziente al quale vuoi associare la visita")
                for row in result:
                        print("ID: "+str(row[0])+" Nome: " + row[1] + 
                            " Cognome: " + row[2] + " Email: " + row[3])
                while True:#vado avanti facendo la stessa cosa per i medici
                    result = db.fetchQuery('SELECT * FROM Medico')
                    if result:
                        print("Lista medici registrati, ricorda l'ID del medico a cui vuoi associare la visita")
                        for row in result:
                            print("ID: "+str(row[0])+" Nome: " + row[1] + " Cognome: " + row[2])
                        while True:
                            self.id_paziente = input("Inserisci l'ID del paziente\n").strip()
                            if self.id_paziente == '':
                                print('ID non valido, l\'ID non può essere vuoto')
                            elif re.search(r'\D', self.id_paziente):#regex per controllare che il valore inserito sia un numero
                                print('ID non valido, l\'ID deve essere un numero')
                            else:
                                break
                        while True:
                            self.id_medico = input("Inserisci l'ID del medico\n").strip()
                            if self.id_medico == '':
                                print('ID non valido, l\'ID non può essere vuoto')
                            elif re.search(r'\D', self.id_medico):
                                print('ID non valido, l\'ID deve essere un numero')
                            else:
                            # Controllo se il medico ha già 3 visite
                                count_visite = db.fetchQuery('SELECT COUNT(*) FROM Visita WHERE id_medico = ?', (self.id_medico,))
                                if count_visite and count_visite[0][0] >= 3:#prendo il risultato alla posizione 0 della lista data dalla query
                                    print("Il medico con ID" +self.id_medico+" ha già raggiunto il limite di 3 visite.")
                                    scelta = input("Vuoi registrare un nuovo medico? (s/n)\n").strip().lower()
                                    if scelta == 's':
                                        medico.nuovo_medico()
                                    else:
                                        print("Inserisci un altro ID medico.")
                                else:
                                    break
                        while True:#registrazione della visita
                            self.nome_visita = input("Inserisci il nome della visita\n").strip()
                            if self.nome_visita == '':
                                print('Nome non valido, il nome non può essere vuoto')
                            else:
                                break
                        db.exe('INSERT INTO Visita (id_paziente, id_medico, nome_visita) VALUES (?, ?, ?)', (self.id_paziente, self.id_medico, self.nome_visita))
                        print("Visita registrata con successo")
                        break    
                    else:
                        print("Nessun medico registrato. Registrane almeno uno prima di registrare una visita.")
                        medico.nuovo_medico()
                        break
            else:
                print("Nessun paziente registrato. Registrane almeno uno prima di registrare una visita.")
                paziente.nuovo_paziente()
                break
            break
        
    #visualizzazione visite 
    def vedi_visite(self):
        print("Lista visite")
        result = db.fetchQuery('SELECT * FROM Visita')
        if result:
            for row in result:
                    print("ID: "+str(row[0])+" ID Paziente: " + str(row[1]) + " ID Medico: " + str(row[2]) + " Nome visita: " + row[3])
        else:
            print("Nessuna visita registrata.")