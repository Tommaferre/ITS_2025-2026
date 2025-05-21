fhand = open('mbox-short.txt')
dizionario= dict()
for line in fhand: 
    words = line.split()
    if (len(words) > 2 and '@' in words[1] and words[0]=='From'):
        mittente = words[1] 
        dizionario[mittente]= dizionario.get(mittente, 0) +1
print(dizionario)
