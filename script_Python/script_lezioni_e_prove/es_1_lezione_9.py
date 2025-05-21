apertura_file = open('words.txt')
lettura_file = apertura_file.read()
dizionario = dict()
testo= lettura_file.split()
for parola in testo:
	if parola not in dizionario:
		dizionario[parola] = 1
	else:
		dizionario[parola] = dizionario[parola]+1
print(dizionario)
isthere = str(input('scrivi una parola da cercare\n'))
if isthere in dizionario:
    print('la parola è presente nel dizionario')
else: 
    print('la parola non è presente')