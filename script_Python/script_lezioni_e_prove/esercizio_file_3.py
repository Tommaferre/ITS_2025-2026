fhand = open('mbox-short.txt')
for line in fhand:
  if line.startswith('From:'):
    line = line.rstrip()
    print(line)