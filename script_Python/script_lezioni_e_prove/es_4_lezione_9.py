fhand = open('mbox-short.txt')
dizionario= dict()
for line in fhand: 
    words = line.split()
    if (len(words) > 2 and '@' in words[1]):
        mittente = words[1] 
        dizionario[mittente]= dizionario.get(mittente, 0) +1
massimo = 0
for num in dizionario:
    if massimo < dizionario[1]:
      massimo = dizionario[1]
      mail = num
print(massimo, mail)