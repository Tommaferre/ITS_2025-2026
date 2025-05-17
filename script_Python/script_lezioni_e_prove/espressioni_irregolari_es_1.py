# Search for lines that have an at sign between characters
import re
hand = open('mbox-short.txt')
for line in hand:
    line = line.rstrip()
    x = re.findall('[(a-z)(A-Z)(0-9)]\S*@\S*[a-zA-Z]', line)
    if len(x) > 0:
        print(x)