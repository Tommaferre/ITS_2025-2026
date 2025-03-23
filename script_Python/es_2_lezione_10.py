try:
  fname = input('Enter the file name: ')
  fhand = open(fname)
except: 
  print('Il file è inesistente')
  exit()
dizionario = dict()
for line in fhand:
  line = line.split()
  if (len(line)> 0 and line[0] == 'From'):
    data = line[5].split(':')
    dizionario[data[0]]=dizionario.get(data[0], 0) +1

print(dizionario)