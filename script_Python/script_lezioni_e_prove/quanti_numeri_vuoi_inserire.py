try:
    numb=int(input('quanti numeri vuoi inserire?\n'))
    c=0
    numbers=[]
    somma=0
    media=0
    massimo= None
    minimo= None

    while c<numb:
        values=float(input('quali numeri vuoi inserire?\n'))
        numbers.append(values)
        c=c+1
    print(numbers)

    for intervar in numbers:
        somma=somma+intervar
    if massimo is None or intervar>massimo:
        massimo=intervar
    if minimo is None or intervar<minimo:
        minimo=intervar
    media=somma/c
    diff = massimo-minimo
    print('Somma',somma)
    print('Media:',media)
    print('Massimo',massimo)
    print('Minimo',minimo)
    print('Differenza',diff)
except ValueError:
    print('Inserisci un valore accettabile')