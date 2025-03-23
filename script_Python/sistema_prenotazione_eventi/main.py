from DatabaseUtilities import *
from Sala import *
from Evento import *
from Partecipante import *


#creazione degli oggetti sala evento e partecipante
sala = Sala()
evento = Evento()
part = Partecipante()


def menu():
    while True:
        print('='*50)
        print('BENVENUTO NEL SISTEMA DI PRENOTAZIONE DI EVENTI!')
        print('='*50)
        print("\nCosa vuoi fare?")
        print('1. Registra una sala')
        print('2. Registra un evento')
        print('3. Registra un partecipante')
        print('4. ESCI')
        print('')
        print('='*50)
        scelta = input('\nInserisci un numero da 1 a 4 per la tua scelta\n')
        match scelta:
            case '1':
                print('\nQueste sono le sale registrate:\n')
                sala.mostra_sala()
                while True:
                    print('\nCosa vuoi fare:')
                    print('1. Registra una nuova sala')
                    print('2. Torna al menù principale')
                    print('3. ESCI')
                    scelta2 = input('Inserisci un numero da 1 a 3 per la tua scelta\n')
                    if scelta2 == '1':
                        sala.registra_sala()
                    elif scelta2 == '2':
                        break
                    elif scelta2 == '3':
                        print("Uscita dal programma.")
                        exit()
                    else:
                        print("Scelta non valida, riprova.")
            case '2':
                print('\nQuesti sono gli eventi:\n')
                evento.mostra_evento()
                while True:
                    print('\nCosa vuoi fare:')
                    print('1. Registra un nuovo evento')
                    print('2. Torna al menù principale')
                    print('3. ESCI')
                    scelta2 = input('Inserisci un numero da 1 a 3 per la tua scelta\n')
                    if scelta2 == '1':
                        print('Queste sono le sale disponibili per registrare un evento')
                        sala.mostra_sala()
                        #controllo se ci sono sale disponibili se no printo sale non disponibili --> menu principale per registrarne una nuova
                        print("inserisci l'id della sala dove vuoi registrare l'evento e le informazioni su di esso")
                        evento.registra_evento()
                    elif scelta2 == '2':
                        break
                    elif scelta2 == '3':
                        print("Uscita dal programma.")
                        exit()
                    else:
                        print("Scelta non valida, riprova.")    
            case '3':
                print('\nQuesti sono gli eventi:\n')
                evento.mostra_evento()
                print('\nQuesti sono i partecipanti già registrati')
                part.mostra_partecipanti()
                while True:
                    print('\nCosa vuoi fare:')
                    print('1. Registra un nuovo partecipante per un evento')
                    print('2. Torna al menù principale')
                    print('3. ESCI')
                    scelta2 = input('Inserisci un numero da 1 a 3 per la tua scelta\n')
                    if scelta2 == '1':
                        part.registra_partecipante()
                    elif scelta2 == '2':
                        break
                    elif scelta2 == '3':
                        print("Uscita dal programma.")
                        exit()
                    else:
                        print("Scelta non valida, riprova.")  
            case '4':
                print("Grazie per aver usato il sistema. Uscita in corso...")
                exit()
            case _:
                print('Scelta non valida, riprova')

menu()