fname = input('Enter the file name: ')
fhand = open(fname)
count = 0
somma = 0
for line in fhand:
  if line.startswith('X-DSPAM-Confidence:'):
    inizio = line.find(':')
    numero = float(line[inizio+1 :])
    count = count + 1
    somma = somma + numero
print('Line Count:', count)
print(somma)
media = somma/count
print('Average spam confidence:', media)