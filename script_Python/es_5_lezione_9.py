fhand = open('mbox-short.txt')
dizionario= dict()
for line in fhand:
    words = line.split()
    if line.startswith ('From: '):
      line = line.split('@')
      line = line[1].split()
      mittente = line[0]
      dizionario[mittente]= dizionario.get(mittente, 0) + 1
print(dizionario)