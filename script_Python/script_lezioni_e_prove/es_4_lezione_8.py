fname = input('Enter the file name: ')
fhand = open(fname)
parole =[]
for line in fhand:
  for parola in line.split():
    if parola not in parole:
      parole.append(parola)
  parole.sort()
  print(parole)