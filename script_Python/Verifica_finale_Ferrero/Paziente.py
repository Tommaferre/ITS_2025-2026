import sqlite3
import re
from DatabaseUtilities import *


db = DatabaseUtilities()

class Paziente:

    #registrazione nuovo paziente
    def nuovo_paziente(self):
        print("Registrazione nuovo paziente")
        while True:
            self.nome = input("Inserisci il nome del paziente\n").strip()
            if self.nome == '':
                    print('Nome non valido, il nome non può essere vuoto')
            elif re.search(r'\d', self.nome):
                    print('Per favore non inserire numeri')
            else:
                break
        while True:
            self.cognome = input("Inserire il cognome del paziente\n").strip()
            if self.cognome == "":
                  print('Cognome non valido, il cognome non può essere vuoto')
            elif re.search(r'\d', self.cognome):
                    print('Per favore non inserire numeri')
            else:
                break
        while True:
                self.email = input("Inserire l'email del paziente:\n").strip()
                if self.email == "":
                    print("Email non valida")
                parts = self.email.split("@")#controlli sulla corretta formazione dell'email: controllo che dopo lo split della @ la mail sia formata da due parti, che nella seconda parte sia presente il punto e che dopo lo split della seconda parte col punto, la seconda parte della seconda parte abbia almeno due caratteri
                if len(parts) == 2 and "." in parts[1] and len(parts[1].split(".")[-1]) >= 2:
                    break
                else:
                     print("Email non valida. Assicurati che contenga '@' e '.'")
        db.exe('INSERT INTO Paziente (nome, cognome, email) VALUES (?, ?, ?)', (self.nome, self.cognome, self.email))
        print("Paziente registrato con successo")
    
    #visualizzazione dei pazienti esistenti
    def vedi_pazienti(self):
        print("Lista pazienti")
        result = db.fetchQuery('SELECT * FROM Paziente')
        if result:
            for row in result:
                    print("ID: "+str(row[0])+" Nome: " + row[1] + 
                        " Cognome: " + row[2] + " Email: " + row[3])
        else:
            print("Nessun paziente registrato.")


