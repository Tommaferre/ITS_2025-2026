/*
 * Dati in input due numeri interi, calcolare il quoziente intero, il resto
 * e il quoziente reale.
 * Visualizzare i risultati
 */

//input
Console.WriteLine("Dividendo:");
int a = int.Parse(Console.ReadLine());
Console.WriteLine("Divisore:");
int b = int.Parse(Console.ReadLine());

//calcolo
int qi = a / b;
int r = a % b;             //=> resto della divisione 
double qr = (double)a / b; //il casting rimane solo per quella istanza, se io richiamo successivamente a sarà di nuovo di tipo int

//output
Console.WriteLine("La divisione di {0}/{1} da come risultati:", a, b);
Console.WriteLine("Quoziente intero: {0}", qi);
Console.WriteLine("Resto: {0}", r);
Console.WriteLine("Quoziente reale: {0}", qr);
