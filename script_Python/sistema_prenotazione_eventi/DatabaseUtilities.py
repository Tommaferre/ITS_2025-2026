import sqlite3

class DatabaseUtilities:
    
    def __init__(self):
        self.conn = sqlite3.connect('prenotazioni_eventi.sqlite')
        self.cur = self.conn.cursor()

    def exe(self, query, parameters=()):
        self.cur.execute(query, parameters)
        self.conn.commit()

    def fetchQuery(self, query, parameters=()):
        self.exe(query, parameters)
        return self.cur.fetchall()
        

    def __del__(self):
        print('Chiusura connessione al database')
        self.conn.close()
