#due numeri in input, dire qual è il maggiore, fa la somma e la stampa, chiede un terzo dato, mi dice qual è il minore, fa il prodotto della somma e del terzo dato e la stampa

x=int(input('inserisci un primo numero\n'))
y=int(input('inserisci un secondo numero da sommare al primo\n'))

if x>y:
	print('il maggiore è il primo numero cioè: ', + x)
else :
	print('il maggiore è il secondo numero cioè: ', + y)

z = x + y
print('la somma tra i due numeri è\n' + str(z))
prompt = ('inserisci un terzo dato\n')
a = int(input(prompt))

if a<z :
	print("tra la somma e l'ultimo dato inserito, il minore è", + a)
else :
	print("tra la somma e l'ultimo dato inserito, il minore è", + z)

b = a * z
print('il prodotto tra la somma e il terzo dato è\n' +str(b))