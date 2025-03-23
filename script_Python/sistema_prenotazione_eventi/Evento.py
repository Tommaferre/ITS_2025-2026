import sqlite3
from DatabaseUtilities import *
from datetime import datetime 

db = DatabaseUtilities()

class Evento:

    def mostra_evento(self):
        try:
            risultati = db.fetchQuery("SELECT * FROM Eventi")
            if risultati:
                for riga in risultati:
                    print("ID: "+str(riga[0])+" Nome: " + riga[1] + 
                          " Data: " + riga[2] + " ID Sala: " + str(riga[3]) +
                          " Numero Massimo Partecipanti: " + str(riga[4]) +
                          " Numero Partecipanti: " + str(riga[5]))
            else:
                print("Nessun evento registrato.")
        except:
            print('Errore nella registrazione dell\'evento')
    def registra_evento(self):
        try:
            while True:
                self.Nome_Evento = input('Nome dell\'evento:\n').strip()
                if self.Nome_Evento == '':
                    print('Nome non valido, il nome non può essere vuoto')
                else:
                    break
            while True:
                self.Data_Evento = input("Data (nel formato gg/mm/aaaa):\n").strip()
                try:
                    datetime.strptime(self.Data_Evento, "%d/%m/%Y")
                    break
                except :
                    print("Data non valida, inserire la data nel formato gg/mm/aaaa")
            while True:
                self.id_sala = input('Inserisci l\'ID della sala dove si svolgerà l\'evento:\n').strip()
                try:
                    self.id_sala = int(self.id_sala)
                    if self.id_sala <=0:
                        print('L\'ID della sala non può essere negativo o uguale a 0')
                    else:
                        break
                except:
                    print('ID inserito non valido, inserire un numero')
            while True:
                self.Numero_Max_Partecipanti = input('Numero massimo di partecipanti:\n').strip()
                try:
                    self.Numero_Max_Partecipanti = int(self.Numero_Max_Partecipanti)
                    if self.Numero_Max_Partecipanti <=0:
                        print('Il numero massimo di partecipanti non può essere negativo o uguale a 0')
                    else:
                        break
                except:
                    print('Numero massimo di partecipanti inserito non valido, inserire un numero')
            self.Numero_Partecipanti = 0
            self.inserisci_evento(self.Nome_Evento, self.Data_Evento, self.id_sala, self.Numero_Max_Partecipanti, self.Numero_Partecipanti)
        except:
            print('Errore durante la registrazione dell\'evento')
        
    def inserisci_evento(self, Nome_Evento, Data_Evento, id_sala, Numero_Max_Partecipanti, Numero_Partecipanti):
        try:
            db.exe('''
                INSERT INTO Eventi (Nome_Evento, Data_Evento, id_sala, Numero_Max_Partecipanti, Numero_Partecipanti)
                VALUES (?, ?, ?, ?, ?)
                ''', (Nome_Evento, Data_Evento, id_sala, Numero_Max_Partecipanti, Numero_Partecipanti))
        except:
            print('Errore durante l\'inserimento dell\'evento')