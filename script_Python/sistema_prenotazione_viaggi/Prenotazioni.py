from DatabaseUtilities import *
import re 
import sqlite3
from datetime import datetime 


db = DatabaseUtilities()

class Prenotazioni:
    def mostra_voli(self):
        try:
            cursor = db.getCursor()
            cursor.execute("SELECT id, compagnia, partenza, arrivo, data, prezzo FROM Voli")
            voli = cursor.fetchall()
            print("\nVoli disponibili:")
            for volo in voli:
                print(f"ID: {volo[0]}, Compagnia: {volo[1]}, Partenza: {volo[2]}, Arrivo: {volo[3]}, Data: {volo[4]}, Prezzo: {volo[5]}")
            print("\n")
        except sqlite3.Error as e:
            print("Errore durante il recupero dei voli:", e)
    def mostra_hotel(self):
        try:
            cursor = db.getCursor()
            cursor.execute("SELECT id, nome, citta, prezzo FROM Hotel")
            hotel = cursor.fetchall()
            print("\nHotel disponibili:")
            for h in hotel:
                print(f"ID: {h[0]}, Nome: {h[1]}, Citta: {h[2]}, Prezzo: {h[3]}")
            print("\n")
        except sqlite3.Error as e:
            print("Errore durante il recupero degli hotel:", e)
    def mostra_noleggio_auto(self):
        try:
            cursor = db.getCursor()
            cursor.execute("SELECT id, marca, modello, prezzo FROM AutoNoleggio")
            auto = cursor.fetchall()
            print("\nAuto disponibili:")
            for a in auto:
                print(f"ID: {a[0]}, Marca: {a[1]}, Modello: {a[2]}, Prezzo: {a[3]}")
            print("\n")
        except sqlite3.Error as e:
            print("Errore durante il recupero delle auto:", e)
    def prenota_volo(self):
        try:
            volo_id = int(input("Inserisci l'ID del volo che vuoi prenotare: "))
            utente_id = int(input("Inserisci il tuo ID utente: "))
            db.getCursor().execute('''INSERT INTO Prenotazioni (volo_id, utente_id) VALUES (?,?)''', (volo_id, utente_id))
            db.getConn().commit()
            print("\nVolo prenotato con successo\n")
        except ValueError:
            print("Errore: inserisci un ID valido.")
        except sqlite3.Error as e:
            print("Errore durante la prenotazione del volo:", e)
    def prenota_hotel(self, hotel_id, utente_id):
        try:
            db.getCursor().execute('''insert into Prenotazioni (hotel_id, utente_id) values (?,?)''', (hotel_id, utente_id))
            db.getConn().commit()
            print("\n")
            print("Hotel prenotato con successo")
            print("\n")
        except:
            print("Errore durante la prenotazione dell'hotel")
        
    def prenota_noleggio_auto(self, noleggio_auto_id, utente_id):
        try:
            db.getCursor().execute('''insert into Prenotazioni (noleggio_auto_id, utente_id) values (?,?)''', (noleggio_auto_id, utente_id))
            db.getConn().commit()
            print("\n")
            print("Noleggio auto prenotato con successo")
            print("\n")
        except:
            print("Errore durante la prenotazione del noleggio auto")

    def prenota_volo_hotel(self, volo_id, hotel_id, utente_id):
        try:
            db.getCursor().execute('''insert into Prenotazioni (volo_id, hotel_id, utente_id) values (?,?,?)''', (volo_id, hotel_id, utente_id))
            db.getConn().commit()
            print("\n")
            print("Volo e hotel prenotati con successo")
            print("\n")
        except:
            print("Errore durante la prenotazione del volo e dell'hotel")

    def prenota_volo_hotel_noleggio_auto(self, volo_id, hotel_id, noleggio_auto_id, utente_id):
        try:
            db.getCursor().execute('''insert into Prenotazioni (volo_id, hotel_id, noleggio_auto_id, utente_id) values (?,?,?,?)''', (volo_id, hotel_id, noleggio_auto_id, utente_id))
            db.getConn().commit()
            print("\n")
            print("Volo, hotel e noleggio auto prenotati con successo")
            print("\n")
        except:
            print("Errore durante la prenotazione del volo, dell'hotel e del noleggio auto")
    def prenota_volo_noleggio_auto(self, volo_id, noleggio_auto_id, utente_id):
        try:
            db.getCursor().execute('''insert into Prenotazioni (volo_id, noleggio_auto_id, utente_id) values (?,?,?)''', (volo_id, noleggio_auto_id, utente_id))
            db.getConn().commit()
            print("\n")
            print("Volo e noleggio auto prenotati con successo")
            print("\n")
        except:
            print("Errore durante la prenotazione del volo e del noleggio auto")
    
    def prenota_hotel_noleggio_auto(self, hotel_id, noleggio_auto_id, utente_id):
        try:
            db.getCursor().execute('''insert into Prenotazioni (hotel_id, noleggio_auto_id, utente_id) values (?,?,?)''', (hotel_id, noleggio_auto_id, utente_id))
            db.getConn().commit()
            print("\n")
            print("Hotel e noleggio auto prenotati con successo")
            print("\n")
        except:
            print("Errore durante la prenotazione dell'hotel e del noleggio auto")

    def vedi_prenotazioni():
        try:
            cursor = db.getCursor()
            cursor.execute('''select * from Prenotazioni''')
            pren = cursor.fetchall()
            print("prenotazioni:")
            for p in pren:
                print(f"ID: {p[0]}, Volo: {p[1]}, Hotel: {p[2]}, Noleggio auto: {p[3]}, Utente: {p[4]}")
            print("\n")
        except:
            print("Errore durante la visualizzazione delle prenotazioni")