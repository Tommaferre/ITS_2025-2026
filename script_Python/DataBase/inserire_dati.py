import sqlite3

conn = sqlite3.connect('music.sqlite')
cur = conn.cursor()

cur.execute('INSERT INTO Tracks (title, plays) VALUES (?, ?)', ('Thunderstruck', 20))  #i punti interrogativi fungono da segnaposti
cur.execute('INSERT INTO Tracks (title, plays) VALUES (?, ?)', ('My Way', 15))
conn.commit()#serve ad effettuare veramente le modifiche avvenute a riga 6 e 7 se no la tabella continuerebbe ad essere vuota

print('Tracks:')
cur.execute('SELECT title, plays FROM Tracks')
for row in cur:
  print(row)

#cur.execute('DELETE FROM Tracks WHERE plays < 100')
#conn.commit()

cur.close()