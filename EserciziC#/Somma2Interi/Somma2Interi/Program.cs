// Dati in input due numeri interi, calcolare la somma e visualizzare il risultato


//input

Console.Write("Inserisci un numero intero: ");
string tmp = Console.ReadLine();                     //"4"
int a = int.Parse(tmp);                              //"4" => 4
Console.Write("Inserisci un altro numero intero: ");
int b = int.Parse(Console.ReadLine());               //se non metto un numero si blocca

//calcolo
int somma = a + b;

//output
Console.WriteLine(somma);