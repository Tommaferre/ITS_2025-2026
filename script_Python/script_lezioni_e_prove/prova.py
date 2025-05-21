fhand=open("questionario.txt")
listanome= list()
for line in fhand:
        if line.startswith("nome"):
            indicePunti=line.find(":")
            nome=str(line[indicePunti+1:-1])
            listanome.append(nome)
print(listanome)


