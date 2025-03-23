from DatabaseUtilities import *
import re 
import sqlite3
from datetime import datetime 



db = DatabaseUtilities()

class AutoNoleggio:
    def registra_auto(self):
        print("Registra un noleggio auto")
        try:
            while True:
                self.__compagnia = input("Nome compagnia:\n").strip()
                if self.__compagnia == "":
                    print("Compagnia non valida")
                elif re.search(r'^\d', self.__compagnia):
                    print("Compagnia non valida, la compagnia non può iniziare con un numero")
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
            self.inserisci_auto(self.__compagnia, self.__citta, self.__prezzo)
            print("\n")
            print("Noleggio auto registrato con successo")
            print("\n")
        except:
            print("Errore durante la registrazione del noleggio auto")
    def inserisci_auto(self, compagnia, citta, prezzo):
        try:
            db.getCursor().execute('''
            INSERT INTO NoleggioAuto (compagnia, citta, prezzo)
            VALUES (?, ?, ?)
            ''', (compagnia, citta, prezzo))
            db.getConn().commit()
        except sqlite3.Error as e:
            print("Errore durante l'inserimento del noleggio auto: ", e)