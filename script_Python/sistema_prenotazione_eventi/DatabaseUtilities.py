import sqlite3

class DatabaseUtilities:
    
    def __init__(self):
        self.conn = sqlite3.connect('prenotazioni_eventi.sqlite')
        self.cur = self.conn.cursor()
    
    def getCursor(self):
        return self.cur
    
    def getConn(self):
        return self.conn

    def exe(self, query, parameters=()):
        self.cur.execute(query, parameters)

    def fetchQuery(self, query, parameters=()):
        self.cur.execute(query, parameters)
        return self.cur.fetchall()

    def comm(self):
        self.conn.commit()
    
    def closeConn(self):
        self.conn.close()