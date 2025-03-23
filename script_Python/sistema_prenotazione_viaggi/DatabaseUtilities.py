import sqlite3

class DatabaseUtilities:

    def __init__(self):
        self.conn = sqlite3.connect('prenotazioni.sqlite')
        self.cur = self.conn.cursor()

    def getCursor(self):
        return self.cur
    def getConn(self):
        return self.conn
    def chiusura(self):
        self.cur.close()
        self.conn.close()