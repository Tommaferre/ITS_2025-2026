fhand = open('mbox-short.txt')
dizionario= dict()
for line in fhand:
    words = line.split()
    if (len(words) > 2 and '@' in words[1] and words[0]=='From'):
        mittente = words[1]
        dizionario[mittente]= dizionario.get(mittente, 0) +1
print(dizionario)
# printa un dizionario con il numero di messaggi provenienti da ogni persona

elenco = list()                                  #creazione della tupla 
for email, counts in list(dizionario.items()):   #Itera su tutte le coppie chiave-valore del dizionario dizionario. In questo caso, la chiave è l'email e il valore è il counts associato a quell'email. La funzione list(dizionario.items()) restituisce una lista delle coppie (tupla chiave-valore), che vengono poi iterate.
  elenco.append((counts,email))
elenco.sort(reverse = True)
for email, counts in elenco[:1]: 
  print(email,counts)
