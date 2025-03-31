import sqlite3

class DatabaseUtilities:
    #al momento della creazione dell'oggetto prendo già la connessione e il cursore 
    def __init__(self):
        self.conn = sqlite3.connect('prenotazioni_visite_mediche.sqlite')
        self.cur = self.conn.cursor()

    #metodo per eseguire le query (do in input le query e i parametri passati come lista)
    def exe(self, query, parameters=()):
        self.cur.execute(query, parameters)
        self.conn.commit()

    #metodo per recuperare i risultati di una query
    def fetchQuery(self, query, parameters=()):
        self.exe(query, parameters)
        return self.cur.fetchall()
    
    #quando distruggo l'oggetto o lo script finisce chiudo cursore e connessione
    def __del__(self):
        self.cur.close()
        self.conn.close()
