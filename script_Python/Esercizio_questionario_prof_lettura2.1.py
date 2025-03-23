def lettura_nome():
    #lettura della quantità totale dei partecipanti
    fhand=open("questionario.txt")
    count=0
    for line in fhand:
        if line.startswith("nome"):
            ##indicePunti=line.find(":")
           ##print(""line[indicePunti+1:])
            count=count+1
    print("Numero di persone registrate: ",count)
    fhand.close()
    #in questa funzione scorreremo per ogni persona che si è registrata e la conteremo
   
def elenco_nomi():
    #dizionario con elenco dei nomi e le ripetizioni di ognuno
    #creiamo un dizionario in modo da avere un "istogramma delle persone registrate all'interno del file"
    fhand=open("questionario.txt")
    dizNomi=dict()
    for line in fhand:
        if line.startswith("nome"):
            indicePunti=line.find(":")
            indicePuntiNome=str(line[indicePunti+1:-1])
            dizNomi[indicePuntiNome]=dizNomi.get(indicePuntiNome,0)+1    
    print("Persone e quante volte si sono registrate: ",dizNomi)
    fhand.close()


def average_age():
    #questa è la funzione per il calcolo della media, usiamo una lista per poter andare a utilizzare le funzioni per la somma e la lunghezza(quante persone hanno inserito l'età) della lista
    fhand=open("questionario.txt")
    lista_age = list()
    for line in fhand:
        if line.startswith('Età'):
            pos_age = line.find(':')
            age = line[pos_age+1:]
            lista_age.append(int(age))  
    print('la media delle età inserite è: ',sum(lista_age)/len(lista_age))
    fhand.close()
           
def average_height():
    fhand=open("questionario.txt")
    lista_height = list()
    for line in fhand:
        if line.startswith('Altezza'):
            pos_height = line.find(':')
            height = line[pos_height+1:]
            lista_height.append(float(height))


         
    print('la media delle altezze inserite è: ',sum(lista_height)/len(lista_height))




def percent_marriage():
    #lettura sposato si no e percentuale
    #in questa funzione calcoliamo la percentuale inserendo in una lista i valori TRUE e FALSE presenti nel file, contiamo quante volte vengono ripetuti e facciamo la percentuale
    fhand=open("questionario.txt")
    countPerson=0
    contaSI=0
    contaNO=0
    percent_list=list()




    #for line in fhand:
       # if line.startswith("nome"):
           # countPerson=countPerson+1
    #lettura età e fa la media
   
    for line in fhand:
        if line.startswith("nome"):
            countPerson=countPerson+1
        if line.startswith("Matrimonio"):
            #line.strip
            indiceEta=line.find(":")
            datoP=(line[indiceEta+1:-1])
            percent_list.append(datoP)
       
            ##print("SONO QUI QUESTA E LA LISTA: ",percent_list)
    for i in range(len(percent_list)):#con questo for noi possiamo scorrere per indice per andare a controllare singolarmente se true e false sono presenti nella lista
        if percent_list[i]=="True":
            # print("sono domenico varde")
            contaSI=contaSI+1
        if percent_list[i]=="False":
            # print("sono domenico varde")
            contaNO=contaNO+1
        # i andrà da zero alla prima iterazione fino alla lunghezza della lista,scorrendola completamente              
    percentualeSI=float((contaSI/countPerson)*100)
    percentualeNO=float((contaNO/countPerson)*100)
    print("percentuale di persone che pensa che il professore sia sposato: ",percentualeSI,"%")
    print("percentuale di persone che pensa che il professore non sia sposato: ",percentualeNO,"%")
    fhand.close()          
           



def elenco_materie():
    #lettura materie e inserimento in un dizionario con ripetizione per ogni materia
    #questa funzione ci permette di mettere le materie inserite nel file all'interno di una lista
    fhand=open("questionario.txt")
    elencoMaterie=list()
    for line in fhand:
        if line.startswith("Materie"):
            indiceMateria=line.find(":")
            ##indiceMateriePresenti=line[indiceMateria+1:].strip
            elencoMaterie.append(line[indiceMateria+1:-1])#questo -1 andrà a segnalare di NON prendere lo \n finale in quanto nella stampa su file era presente ma non visibile
    print("elenco delle materie insegnate dal professore: ",elencoMaterie)
    fhand.close()

         
               
           
def menu():
    #menu per chiedere all''utente quale richiesta vuole eseguire(?)
     #menu per chiedere all''utente quale richiesta vuole eseguire(?)
    fhand=open("questionario.txt")
    mediaEta=0.0
    while True:
        print("----------------------------------------------------------------------------------------------------------------")
        print('Benvenuto nel menù di scelta, cosa vuoi fare?')
        print("1. Per sapere il numero totale di persone registrate ")
        print("2. Per ottenere l'elenco con le persone partecipanti al sondaggio e le ripetizioni per chi ha lo stesso nome")
        print("3. Per ottenere l'età media inserita dagli utenti")
        print("4. Per ottenere l'altezza media inserita dagli utenti")
        print("5. Per ottenere le percentuali di persone che pensano sia sposato o meno")
        print("6. Per ottenere l'elenco delle materie inserite e le occorrenze per ogni materia")
        print("7. Stampa tutto")
        print("8. Esci")
        print("----------------------------------------------------------------------------------------------------------------")
        try:
            scelta =input("Scegli un'opzione: ")
            if scelta == '1':
                lettura_nome()
            elif scelta == '2':
                elenco_nomi()
            elif scelta == '3':
                average_age()
               
            elif scelta == '4':
                mediaA=average_height()
            elif scelta == '5':
                percent_marriage()
            elif scelta == '6':
                elenco_materie()
            elif scelta=='8':
                print("questa è l'uscita dal programma")
                fhand.close()
                break
            elif scelta =="7":
                lettura_nome()
                elenco_nomi()
                average_age()
                mediaA=average_height()
                percent_marriage()
                elenco_materie()


        except:
            print("inserire un vlore numerico da 1 a 7 per favore")


#main
#fhand=open("questionario.txt")
menu()
#la scelta di un menù è dovuta alla necessità di rendere lo script più ordinato e renderlo più parlante rendendo a schermo le varie generalità delle funzioni utilizate












fhand=open("questionario.txt")
listanome= list()
for line in fhand:
        if line.startswith("nome"):
            indicePunti=line.find(":")
            nome=str(line[indicePunti+1:-1])
            listanome.append(nome)