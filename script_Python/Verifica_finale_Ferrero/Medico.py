import sqlite3
import re
from DatabaseUtilities import *
from Paziente import *

db = DatabaseUtilities()
paziente = Paziente()

class Medico():

    #registrazione di un nuovo medico
    def nuovo_medico(self):
        try:
            print("Registrazione nuovo medico")
            #controllo se ci sono pazienti registrati
            result = db.fetchQuery('SELECT * FROM Paziente')
            if not result:
                print("Nessun paziente registrato. Registrane almeno uno prima di registrare un medico.")
                paziente.nuovo_paziente() #registrazione di un nuovo paziente richiamando il metodo della classe Paziente dall'oggetto paziente
            else:    
                while True:
                    self.nome = input("Inserisci il nome del medico\n").strip()
                    if self.nome == '':
                            print('Nome non valido, il nome non può essere vuoto')
                    elif re.search(r'\d', self.nome): #regex per controllare che non ci siano numeri inseriti
                            print('Per favore non inserire numeri')
                    else:
                        break
                while True:
                    self.cognome = input("Inserire il cognome del medico\n").strip()
                    if self.cognome == "":
                        print('Cognome non valido, il cognome non può essere vuoto')
                    elif re.search(r'\d', self.cognome):
                            print('Per favore non inserire numeri')
                    else:
                        break
                #inserimento nel db
                db.exe('INSERT INTO Medico (nome, cognome) VALUES (?, ?)', (self.nome, self.cognome))
                print("Medico registrato con successo")
        except:
            print('Errore imprevisto, riprova')
            self.nuovo_medico()

    #visualizzazione medici
    def vedi_medici(self):
        try:
            print("Lista medici")
            result = db.fetchQuery('SELECT * FROM Medico')
            if result:
                for row in result:
                        print("ID: "+str(row[0])+" Nome: " + row[1] + " Cognome: " + row[2])
            else:
                print("Nessun medico registrato.")
        except:
            print('Errore imprevisto, riprova')
            self.vedi_medici()
