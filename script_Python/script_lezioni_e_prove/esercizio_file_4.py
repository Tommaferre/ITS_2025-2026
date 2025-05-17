fhand = open('mbox-short.txt')
for line in fhand:
  line = line.rstrip()
  # Skip 'uninteresting lines'
  if not line.startswith('From:'):
    continue #torna all'inizio del ciclo e salta l'interazione
  # Process our 'interesting' line
  print(line)