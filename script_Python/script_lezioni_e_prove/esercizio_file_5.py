fhand = open('mbox-short.txt')
for line in fhand:
  line = line.rstrip()
  if line.find('@uct.ac.za') >=0 and line.startswith('From:'): 
      print(line)