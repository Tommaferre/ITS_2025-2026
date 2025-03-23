fout = open ('output.txt', 'w') #cambia la modalità da r a w
print (fout) # se il file è già esistente lo sovrascrive
line1 = "These here's the wattle,\n"
fout.write (line1)
line2 = 'the emblem of our land.\n'
fout.write (line2)#fout è il nome della variabile, puoi dargli qualsiasi nome
fout.close () #chiude la scrittura, le istruzioni successive non verranno scritte, il codice si spacca proprio
