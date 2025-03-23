from DatabaseUtilities import *
import re 
import sqlite3
from datetime import datetime 


db = DatabaseUtilities()

class Voli: 
    def registra_volo(self):
        print("Registra un volo")
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
                self.__partenza = input("Partenza da:\n").strip()
                if self.__partenza == "":
                    print("Partenza non valida")
                elif re.search(r'^\d', self.__partenza):
                    print("Partenza non valida, la partenza non può iniziare con un numero")
                else:
                    break
            while True:
                self.__arrivo = input("Arrivo a:\n").strip()
                if self.__arrivo == "":
                    print("Arrivo non valido")
                elif re.search(r'^\d', self.__arrivo):
                    print("Arrivo non valido, l'arrivo non può iniziare con un numero")
                else:
                    break
            while True:
                self.__data = input("Data (nel formato gg/mm/aaaa):\n").strip()
                try:
                    datetime.strptime(self.__data, "%d/%m/%Y")
                    break
                except :
                    print("Data non valida, inserire la data nel formato gg/mm/aaaa")
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
            self.inserisci_volo(self.__compagnia, self.__partenza, self.__arrivo, self.__data, self.__prezzo)
            print("\n")
            print("Volo registrato con successo")
            print("\n")
            print("\n")
        except:
            print("Errore durante la registrazione del volo")
    def inserisci_volo(self, compagnia, partenza, arrivo, data, prezzo):
        try:
            db.getCursor().execute('''
            INSERT INTO Voli (compagnia, partenza, arrivo, data, prezzo)
            VALUES (?, ?, ?, ?, ?)
            ''', (compagnia, partenza, arrivo, data, prezzo))
            db.getConn().commit()
        except sqlite3.Error as e:
            print("Errore durante l'inserimento del volo: ", e)
