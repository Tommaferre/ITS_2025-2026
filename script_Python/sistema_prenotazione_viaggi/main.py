from Volo import *
from Hotel import *
from AutoNoleggio import *
from Passeggeri import *
from Prenotazioni import *
fly = Voli()
ho = Hotel()
car = AutoNoleggio()
pas = Passeggeri()
pre = Prenotazioni()
#main
def menu():
    while True:
        print("\n" + "="*47)    
        print("BENVENUTO NEL SISTEMA DI GESTIONE VIAGGI")
        print("="*47)
        print("\nCosa vuoi fare?")
        print("1. Registra un volo")
        print("2. Registra hotel")
        print("3. Registra un noleggio auto")
        print("4. Registra passeggeri")
        print("5. Prenota un servizio")
        print("6. Vedi le prenotazioni")
        print("7. Esci")
        print("\n" + "="*47)
        scelta = input("Inserisci un numero da 1 a 6 per la tua scelta,\nsono ammessi solo questi numeri: 1 2 3 4 5 6 \n")
        if scelta == '1':
            fly.registra_volo()
        elif scelta == '2':
            ho.registra_hotel()
        elif scelta == '3':
            car.registra_auto()
        elif scelta == '4':
            pas.registra_passeggeri()
        elif scelta == '5':
            print("\n" + "="*47)    
            print("BENVENUTO NEL SISTEMA DI PRENOTAZIONE DI VIAGGI")
            print("="*47)    

            print("\nCosa vuoi prenotare?")
            print("1. Solo il volo")
            print("2. Solo l'Hotel")
            print("3. Solo il noleggio auto")
            print("4. Volo e Hotel")
            print("5. Volo, Hotel e noleggio auto")
            print("6. Volo e noleggio auto")
            print("7. Hotel e noleggio auto")
            print("8. Esci")
            print("\n" + "="*47)

            scelta2 = input("Inserisci un numero da 1 a 8 per la tua scelta\n")
            if scelta2 == '1':
                pre.mostra_voli()
                pre.prenota_volo()
            elif scelta2 == '2':
                pre.mostra_hotel()
                pre.prenota_hotel()
            elif scelta2 == '3':
                pre.mostra_noleggio_auto()
                pre.prenota_noleggio_auto()
            elif scelta2 == '4':
                pre.mostra_voli()
                pre.mostra_hotel()
                pre.prenota_volo_hotel()
            elif scelta2 == '5':

                pre.mostra_voli()
                pre.mostra_hotel()
                pre.mostra_noleggio_auto()
                pre.prenota_volo_hotel_noleggio_auto()
            elif scelta2 == '6':
                pre.mostra_voli()
                pre.mostra_noleggio_auto()
                pre.prenota_volo_noleggio_auto()
            elif scelta2 == '7':
                pre.mostra_hotel()
                pre.mostra_noleggio_auto()
                pre.prenota_hotel_noleggio_auto()
            elif scelta2 == '8':
                exit()
            else:
                print("Scelta non valida\n")
        elif scelta == '6':
            pre.vedi_prenotazioni()
        elif scelta == '7':
            exit()
        else:
            print("Scelta non valida\n")


menu()