import re
hand = open('mbox.txt')
inp=input(print("inserisci un'espressione regolare da analizzare"))
count=0
for line in hand:
    line = line.rstrip()
    x = re.findall(inp, line)
    if len(x) > 0: 
        count = count + 1
print(count)