//Dato un numero intero,
//stabilire se è pari o dispari
//Visualizzare il risultato

Console.Write("Inserisci un numero");
int n = int.Parse(Console.ReadLine());

//operatori di confronto: < > >= <= == !=
//valore di Boole: false, true

if (n % 2 == 0)
    Console.WriteLine($"{n} è pari");
else
    Console.WriteLine($"{n} è dispari");