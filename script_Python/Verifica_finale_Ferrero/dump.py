import sqlite3
from DatabaseUtilities import *

db = DatabaseUtilities() #creazione oggetto db con i metodi della classe DatabaseUtilities

#elimino le tabelle in caso esistesse un db con lo stesso nome
db.exe('DROP TABLE IF EXISTS Paziente')
db.exe('DROP TABLE IF EXISTS Medico')
db.exe('DROP TABLE IF EXISTS Visita')

#creazione tabelle 
db.exe('''CREATE TABLE Paziente (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    cognome TEXT NOT NULL,
    email TEXT NOT NULL
    )''')

db.exe('''CREATE TABLE Medico (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    cognome TEXT NOT NULL
    )''')

db.exe('''CREATE TABLE Visita ('''
    '''id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_paziente INTEGER NOT NULL,
    id_medico INTEGER NOT NULL,
    nome_visita TEXT NOT NULL,
    FOREIGN KEY (id_paziente) REFERENCES Paziente(id),
    FOREIGN KEY (id_medico) REFERENCES Medico(id)
    )''')

