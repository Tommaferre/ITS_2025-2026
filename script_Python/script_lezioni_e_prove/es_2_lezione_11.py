import re
hand = open('mbox-short.txt')
count=0
somma=0.0
for line in hand:
    line = line.rstrip()
    x=re.findall( '^New Revision: ([0-9]+)', line)
    if len(x) >0:
        y=0.0
        for i in range(len(x)):
            y=float(x[i])
        somma = somma + y
        count = count + 1
media = somma/count
print(media)