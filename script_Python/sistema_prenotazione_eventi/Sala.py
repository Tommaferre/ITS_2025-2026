import sqlite3
from DatabaseUtilities import *
import re


db = DatabaseUtilities()

class Sala:

    def mostra_sala(self):
        try:
            risultati = db.fetchQuery("SELECT * FROM Sale")
            if risultati:
                for riga in risultati:
                    print("ID: "+str(riga[0])+" Nome: " + riga[1] + 
                          " Capienza: " + str(riga[2]) + 
                          " È disponibile? " + riga[3])
            else:
                print("Nessuna sala registrata.")
        except:
            print('Errore nella registrazione della sala')
    def registra_sala(self):
        print('Registra una sala')
        try:
            while True:
                self.Nome_Sala = input("Nome della sala:\n").strip()
                if self.Nome_Sala == '':
                    print('Nome non valido, il nome non può essere vuoto')
                elif re.search(r'^\d', self.Nome_Sala):
                    print('Per favore non inserire nomi che iniziano per un numero')
                else:
                    break
            while True:
                self.Capienza = input('Inserisci la capienza della sala:\n').strip()
                try:
                    self.Capienza = int(self.Capienza)
                    if self.Capienza <=0:
                        print('La capienza della sala non può essere negativa ne uguale a 0')
                    else:
                        break
                except:
                    print('Capienza inserita non valida, inserire un numero')
            while True:
                print('La sala è disponibile?')
                self.Disponibilita = input('Vengono accettate risposte solo Si/No\n').strip()
                if self.Disponibilita in ['Si', 'No']:
                    break
                else:
                    print('Valore inserito non valido, inserisci solo Si o No (fai attenzione anche alle maiuscole!)')
            self.inserisci_sala(self.Nome_Sala, self.Capienza, self.Disponibilita)
           
        except:
            print('Errore durante la registrazione della sala')


    def inserisci_sala(self, Nome_Sala, Capienza, Disponibilita):
        try:
            db.exe('''
                INSERT INTO Sale (Nome_Sala, Capienza, Disponibilita)
                VALUES (?, ?, ?)
                ''', (Nome_Sala, Capienza, Disponibilita))
            db.comm()
            print('\n')
            print('Sala registrata con successo')
        except:
            print("Errore durante l'inserimento della sala")


    #def  registra_sala(self):
        #self.Nome_Sala = input("Nome della sala:\n")
        #self.Capienza = input('Inserisci la capienza della sala:\n)
        #self.Disponibilita = input('Vengono accettate risposte solo Si/No\n')
        #self.inserisci_sala(self.Nome_Sala, self.Capienza, self.Disponibilita)