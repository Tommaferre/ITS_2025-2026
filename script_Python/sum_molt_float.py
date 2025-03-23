#script che prende due parametri in input (a e b), calcola la loro somma e la stampa, dopo di che la moltiplica per un terzo parametro di input(c) e stampa il totale
prompt=('dammi un primo numero\n')
x=float(input(prompt))
prompt=('dammi un secondo numero\n')
y=float(input(prompt))
z = x+y
print("il risultato della somma è\n" + str(z))
prompt=('dammi un altro numero da moltiplicare per la somma\n')
w = float(input(prompt))
a = w * z
print("il prodotto della somma per il numero è", + a)