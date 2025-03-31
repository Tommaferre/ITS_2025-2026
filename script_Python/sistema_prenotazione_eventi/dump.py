import sqlite3
from DatabaseUtilities import *

creaDB = DatabaseUtilities() #creazione oggetto

#drop delle tabelle in caso esistano già in un db con lo stesso nome
creaDB.exe('drop table if exists Sale')
creaDB.exe('drop table if exists Eventi')
creaDB.exe('drop table if exists Partecipanti')

#creazione tabelle
creaDB.exe('''
CREATE TABLE Sale (
           id_sala INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
           Nome_Sala TEXT,
           Capienza INTEGER,
           Disponibilita TEXT NOT NULL CHECK (Disponibilita IN ('Si', 'No'))
           )
''')

creaDB.exe('''
CREATE TABLE Eventi (
           id_Evento INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
           Nome_Evento TEXT,
           Data_Evento TEXT,
           id_sala INTEGER,
           Numero_Max_Partecipanti INTEGER,
           Numero_Partecipanti INTEGER,
           FOREIGN KEY(id_sala) REFERENCES Sale(id_sala)
           )
''')

creaDB.exe('''
CREATE TABLE Partecipanti (
           id_Partecipante INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
           Nome TEXT,
           Cognome TEXT,
           email TEXT,
           id_Evento INTEGER,
           FOREIGN KEY(id_Evento) REFERENCES Eventi(id_Evento)
           )
''')