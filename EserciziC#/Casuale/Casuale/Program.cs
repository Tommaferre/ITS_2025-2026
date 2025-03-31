// Genera un numero intero casuale appartenente ad un intervallo [1,100]
// visualizzare il numero trovato

Random random = new Random(); //questa inizializzazione si chiama istanza

Console.WriteLine(random.Next());//restituisce sempre un numero intero non negativo, ma è molto grosso

Console.WriteLine(random.Next(100));//restituisce numeri che vanno da 0 a 99

Console.WriteLine(random.Next(100)+1);//così se esce 0 darà 1 e se esce 99 darà 100 (copro tutti i numeri)

for (int i = 0; i < 10; i++)
    Console.WriteLine(random.Next(100)+1); //stampo 10 numeri tra 1 e 100  

//volendo posso fare Console.WriteLine(random.Next(1,101)) ma è brutto

//posso usare anche numeri negativi nell'intervallo