import re


def base(file1):

    while True:
        try:
            nome1=str(input('Qual è il tuo nome\n')).strip()
            print('riga7')
            nome1.split()
            print('entrata')
            if not nome1:
                print("Il dato non può essere vuoto. Riprova.")
                continue
            else:
                if re.findall(r'^[0-9]',nome1):
                    print('nome non valido, per favore inserire nome valido')
                    #questo controllo è stato fatto per evitare che l'utente inserisca un numero nel nome
                    continue
            nome = str('nome:' +  nome1 +'\n')
            file1.write(nome)
            break
        except:
            print('nome inserito non valido, per favore inserire un nome valido')
    while True:
        try:
            age1= int(input('Quanti anni credi che abbia il prof? \n'))
            if not age1:#verifica che AGE1 non sia nullo
                print("Il dato non può essere vuoto. Riprova.")
                continue
            age= str('Età:' + str(age1) + '\n')
            file1.write(age)
            break
        except:
            print('età inserita non valida, per favore inserire un numero adeguato')
    while True:
        try:
            altezza1=float(input('Quanto pensi sia alto? \n'))
            if not altezza1:
                print("Il dato non può essere vuoto. Riprova.")
                continue
            hight=str('Altezza:' + str(altezza1) + '\n')
            file1.write(hight)
            break
        except:
            print('altezza non valida, per favore inserire un numero adeguato')
    print('Pensi sia sposato')
    print('1. SI')
    print('2. NO')
    boolean_marriage=True
    scelta=input("Scegli 1 o 2 \n")
    while True:
        try:
            if scelta == '1':
                matrimonio = ('Matrimonio:'+ str(boolean_marriage))
                file1.write(matrimonio)
                file1.write('\n')
                break
            elif scelta == '2' :
                boolean_marriage = False
                matrimonio= ('Matrimonio:'+str(boolean_marriage))
                file1.write(matrimonio)
                file1.write('\n')
                break
            else:
                print('scelta inserita non valida, inserisci 1 o 2')
        except:
            print('Scelta non valida')
    while True:
        print('Quante e quali materie insegna \n')
        try:
            n_materie= int(input('numero materie insegnate: '))
            if not n_materie:
                print("Il dato non può essere vuoto. Riprova.")
                continue
            elenco_materie= list()
            for i in range(n_materie):
                materie= str(input('quali? \n'))
                elenco_materie.append(materie)
            materie_stampa= ('Materie:' + str(elenco_materie))
            file1.write(materie_stampa)
            break
        except:
            print('Numero o materie inserite non validi per favore riprova')
    file1.write('\n')
    file1.write('\n')
    file1.close()


def scrivi_file():
    # write mode
    #in questa funzione entrerà alla prima scrittura del file,in quanto senza l'append lo sovrascriverebbe
   file1 = open("questionario.txt", "w")
   base(file1)




def aggiungi():
    #questa funzione permette di aggiungere all'interno del file e quindi NON SOVRASCRIVERE i dati all'interno ma continuare dall'ultima stringa scritta
    file1 = open("questionario.txt", "a")  # append mode
    base(file1)
   


def menu():
#questo è un menu, ci permette di chieder all'utente che vuole fare e inserire la scelta per richiamare la funzione che svolgerà quello che indicato
    #file1 = open("questionario.txt")   #lettura del file
    while True:
        print("Menu principale:")
        print("1. inserisci i file per la prima volta o sostituisci i file esistenti")
        print("2. Aggiungi al file un record")
        print("3. Esci")
        try:
            scelta = input("Scegli un'opzione: ")
            if scelta == '1':
                scrivi_file()
            elif scelta == '2':
                file = open('questionario.txt')
                line = file.readlines()
                if len(line) < 1:
                    print('il file è vuoto, vuoi inserire il primo record?')
                    print("1. SI")
                    print("2. NO")
                    try:
                        scelta1= input('scegli una opzione\n')
                        if scelta1 == '1':
                            scrivi_file()
                        else:
                            print('Allora chiudo il programma')
                            break
                    except:
                        print('Valore inserito non valido')
                else:
                    aggiungi()
            elif scelta == '3':
                print("Uscita dal programma.")
                break
        except:
            print('Usa 1, 2 o 3 per favore')


           
#main
#file1 = open("questionario.txt", "r")
menu()
#chiamata menu
#decisione --> chiamata write --> if line>1 -->sei sicuro di voler cancellare il file e sovrascriverlo? --> si=write no=return menu
#          --> chiamata aggiungi
#          --> esci --> file.close()
#all'interno di questo script sono stati inseriti vari cicli while per fare reinserire all'utente il dato nel caso lo inserisse sbagliato
