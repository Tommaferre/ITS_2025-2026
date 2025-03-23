import sqlite3
from DatabaseUtilities import *
import re
db = DatabaseUtilities()

class Partecipante:

    def mostra_partecipanti(self):
        try:
            result = db.fetchQuery("SELECT * FROM Partecipanti")
            if result:
                for row in result:
                    print("ID: "+str(row[0])+" Nome: " + row[1] + 
                        " Cognome: " + row[2] + " Email: " + row[3] + 
                        " ID Evento: " + str(row[4]))
            else:
                print("Nessun partecipante registrato.")
        except:
            print('Errore nella registrazione del partecipante')

    def registra_partecipante(self):
        print('Registra un partecipante')
        try:
            while True:
                self.Nome = input("Nome del partecipante:\n").strip()
                if self.Nome == '':
                    print('Nome non valido, il nome non può essere vuoto')
                elif re.search(r'^\d', self.Nome):
                    print('Per favore non inserire nomi che iniziano per un numero')
                else:
                    break
            while True:
                self.Cognome = input('Cognome del partecipante:\n').strip()
                if self.Cognome == '':
                    print('Cognome non valido, il cognome non può essere vuoto')
                elif re.search(r'^\d', self.Cognome):
                    print('Per favore non inserire cognomi che iniziano per un numero')
                else:
                    break
            while True:
                self.__email = input("Email:\n").strip()
                if self.__email == "":
                    print("Email non valida")
                parts = self.__email.split("@")
                if len(parts) == 2 and "." in parts[1] and len(parts[1].split(".")[-1]) >= 2:
                    break
                else:
                     print("Email non valida. Assicurati che contenga '@' e '.'")
            while True:
                self.id_Evento = input('Inserisci l\'ID dell\'evento a cui parteciperà:\n').strip()
                try:
                    self.id_Evento = int(self.id_Evento)
                    if self.id_Evento <=0:
                        print('L\'ID dell\'evento non può essere negativo o uguale a 0')
                    else:
                        break
                except:
                    print('ID inserito non valido, inserire un numero')
            self.inserisci_partecipante(self.Nome, self.Cognome, self.__email, self.id_Evento)
        except:
            print('Errore durante la registrazione del partecipante')
    def inserisci_partecipante(self, Nome, Cognome, email, id_Evento):
        try:
            db.exe('''
                INSERT INTO Partecipanti (Nome, Cognome, email, id_Evento)
                VALUES (?, ?, ?, ?)
                ''', (Nome, Cognome, email, id_Evento))
            db.exe('''
                UPDATE Eventi
                SET Numero_Partecipanti = Numero_Partecipanti + 1
                WHERE id_Evento = ?
                ''', (id_Evento,))
            db.comm()
            print('\n')
        except:
            print('Errore durante la registrazione del partecipante')