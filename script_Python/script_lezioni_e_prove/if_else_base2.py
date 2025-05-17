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
prompt = ('inserisci un quarto numero da sommare al terzo\n')
b = int(input(prompt))
if a>b:
	print('il maggiore tra il terzo e il quarto è: ', + a)
else :
	print('il maggiore tra il terzo e il quarto è: ', + b)

c=a+b
print('la somma tra i due numeri è\n' + str(c))

if z<c :
	print('tra le due somme delle coppie di numeri la maggiore è', + c)
else :
	print('tra le due somme delle coppie di numeri la maggiore è', + z)