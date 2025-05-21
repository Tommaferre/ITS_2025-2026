def ordina_parole(parole):                                #Ordina le parole all'interno del dizionario in base alle occorrenze di ogni parola in ordine decrescente
    return sorted(parole.items(), key=lambda x: x[1], reverse=True)

def menu_principale():
    while True:
        print("Menu principale:")
        print("1. Leggi file")
        print("2. Scrivi file")
        print("3. Pulisci dati")
        print("4. Conta parole")
        print("5. Ordina parole")
        print("6. Esci")
        scelta = input("Scegli un'opzione: ")
        if scelta == '1':                                                     #scelta del file 
            nome_file = input("Inserisci il nome del file da leggere: ")
            dati = leggi_file(nome_file)
            if dati is not None:
                print("File letto con successo!")
            else:
                print("Errore: il file non esiste.")
        elif scelta == '2':                                                   #scelta del file e scrittura
            nome_file = input("Inserisci il nome del file su cui scrivere: ")
            if 'dati' in locals():
                scrivi_file(nome_file, dati)
                print("Dati scritti con successo!")
            else:
                print("Errore: nessun dato disponibile.")
        elif scelta == '3':                                                   #pulizia dei dati
            if 'dati' in locals():
                dati = pulisci_dati(dati)
                print("Dati puliti con successo!")
            else:
                print("Errore: nessun dato disponibile.")
        elif scelta == '4':                                                   #conta parole
            if 'dati' in locals():
                parole = conta_parole(dati)
                print("Parole contate con successo!")
            else:
                print("Errore: nessun dato disponibile.")
        elif scelta == '5':
            if 'parole' in locals():
                parole_ordinate = ordina_parole(parole)
                print("Parole ordinate con successo!")
                for parola, conteggio in parole_ordinate:
                    print(f"{parola}: {conteggio}")
            else:
                print("Errore: nessun conteggio di parole disponibile.")
        elif scelta == '6':                                                   #uscita dal programma
            print("Uscita dal programma.")
            break
        else:
            print("Scelta non valida, riprova.")                              #controllo in caso input non valido 

# Avvio del programma
menu_principale()         