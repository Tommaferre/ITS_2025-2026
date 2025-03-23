from DatabaseUtilities import *
import re 
import sqlite3
from datetime import datetime 


db = DatabaseUtilities()

class Passeggeri:
    def registra_passeggeri(self):
        print("Registra un passeggero")
        try:
            while True:
                self.__nome = input("Nome:\n").strip()
                if self.__nome == "":
                    print("Nome non valido")
                elif re.search(r'^\d', self.__nome):
                    print("Nome non valido, il nome non può iniziare con un numero")
                else:
                    break
            while True:
                self.__cognome = input("Cognome:\n").strip()
                if self.__cognome == "":
                    print("Cognome non valido")
                elif re.search(r'^\d', self.__cognome):
                    print("Cognome non valido, il cognome non può iniziare con un numero")
                else:
                    break
            while True:
                self.__data = input("Data di nascita (nel formato gg/mm/aaaa):\n").strip()
                try:
                    datetime.strptime(self.__data, "%d/%m/%Y")
                    break
                except :
                    print("Data non valida, inserire la data nel formato gg/mm/aaaa")
            while True:
                self.__email = input("Email:\n").strip()
                if self.__email == "":
                    print("Email non valida")
                parts = self.__email.split("@")
                if len(parts) == 2 and "." in parts[1] and len(parts[1].split(".")[-1]) >= 2:
                    break
                else:
                     print("Email non valida. Assicurati che contenga '@' e '.'")
            self.inserisci_passeggeri(self.__nome, self.__cognome, self.__data, self.__email)
            print("\n")
            print("Passeggero registrato con successo")
            print("\n")
        except:
            print("Errore durante la registrazione del passeggero")
    def inserisci_passeggeri(self, nome, cognome, data, email):
        try:
            db.getCursor().execute('''
            INSERT INTO Passeggeri (nome, cognome, data, email)
            VALUES (?, ?, ?, ?)
            ''', (nome, cognome, data, email))
            db.getConn().commit()
        except sqlite3.Error as e:
            print("Errore durante l'inserimento del passeggero: ", e)