import sqlite3
import re
from DatabaseUtilities import *
from Paziente import *
from Medico import *
from Visita import *

#creazione degli oggetti
db = DatabaseUtilities()
paziente = Paziente()
medico = Medico()   
visita = Visita() 

def main():
    try:
        while True:
            print('='*63)
            print('Benvenuto nel sistema di prenotazione pazienti, medici e visite')
            print('='*63)
            print('Cosa vuoi fare?')
            print('1. Registra un nuovo paziente')
            print('2. Registra un nuovo medico')
            print('3. Registra una nuova visita')
            print('4. Visualizza pazienti')
            print('5. Visualizza medici')
            print('6. Visualizza visite')
            print('0. Esci')
            print('='*63)
            scelta = input('Inserisci il numero corrispondente all\'operazione che vuoi eseguire\n').strip()
            if not re.match(r'^[0-6]$', scelta):#regex per inserire esclusivamente un numero tra 0 e 6
                print('Scelta non valida, riprova')
                continue
            if scelta == '1':
                paziente.nuovo_paziente()
            elif scelta == '2':
                medico.nuovo_medico()
            elif scelta == '3':
                visita.nuova_visita()
            elif scelta == '4':
                paziente.vedi_pazienti()
            elif scelta == '5':
                medico.vedi_medici()
            elif scelta == '6':
                visita.vedi_visite()
            elif scelta == '0':
                print('Arrivederci!')
                break
            else:
                print('Scelta non valida, riprova')
    except:
        print('Errore imprevisto, riprova')
        main()
main()