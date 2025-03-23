import sqlite3

conn = sqlite3.connect('prenotazioni.sqlite')
cur = conn.cursor()

cur.execute('DROP TABLE IF EXISTS Voli')
cur.execute('DROP TABLE IF EXISTS Hotel')
cur.execute('DROP TABLE IF EXISTS NoleggioAuto')
cur.execute('DROP TABLE IF EXISTS Passeggeri')
cur.execute('DROP TABLE IF EXISTS Prenotazioni')


cur.execute('''
CREATE TABLE Voli (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    compagnia TEXT,
    partenza TEXT,
    arrivo TEXT,
    data TEXT,
    prezzo INTEGER
)
''')

cur.execute('''
CREATE TABLE Hotel (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    nome TEXT,
    citta TEXT,
    prezzo INTEGER
)
''')

cur.execute('''
CREATE TABLE NoleggioAuto (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    compagnia TEXT,
    citta TEXT,
    prezzo INTEGER
)
''')

cur.execute('''
CREATE TABLE Passeggeri (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    nome TEXT,
    cognome TEXT,
    eta INTEGER,
    email TEXT
)
''')

cur.execute('''
CREATE TABLE Prenotazioni (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
    volo_id integer,
    hotel_id integer,
    noleggio_auto_id integer,
    utente_id integer,
    foreign key(volo_id) REFERENCES Voli(id),
    foreign key(hotel_id)  REFERENCES Hotel(id),
    foreign key(noleggio_auto_id) REFERENCES NoleggioAuto(id),
    foreign key(utente_id) REFERENCES Passeggeri(id)
)
''')

conn.commit()