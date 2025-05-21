fhand = open('mbox-short.txt')
dizionario= dict()
for line in fhand: 
    words = line.split()
    if (len(words) > 2 and words[0] == 'From'):
        day = words[2] 
        dizionario[day]= dizionario.get(day, 0) +1
print(dizionario)