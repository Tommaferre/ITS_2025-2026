import sqlite3
from DatabaseUtilities import *
import re

db = DatabaseUtilities()
class Hotel:
    def registra_hotel(self):
        print("Registra un hotel")
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
                self.__citta = input("Citta:\n").strip()
                if self.__citta == "":
                    print("Citta non valida")
                elif re.search(r'^\d', self.__citta):
                    print("Citta non valida, la citta non può iniziare con un numero")
                else:
                    break
            while True:
                self.__prezzo = input("Prezzo:\n").strip()
                try:
                    self.__prezzo = float(self.__prezzo)
                    if self.__prezzo <= 0:
                        print("Prezzo non valido, inserire un prezzo maggiore di zero")
                    else:
                        break
                except:
                    print("Prezzo non valido")
            self.inserisci_hotel(self.__nome, self.__citta, self.__prezzo)
            print("\n")
            print("Hotel registrato con successo")
            print("\n")
        except:
            print("Errore durante la registrazione dell'hotel")

    def inserisci_hotel(self, nome, citta, prezzo):
        try:
            db.getCursor().execute('''
            INSERT INTO Hotel (nome, citta, prezzo)'
            VALUES (?, ?, ?)
            ''', (nome, citta, prezzo))
            db.getConn().commit()
        except sqlite3.Error as e:
            print("Errore durante l'inserimento dell'hotel: ", e)
