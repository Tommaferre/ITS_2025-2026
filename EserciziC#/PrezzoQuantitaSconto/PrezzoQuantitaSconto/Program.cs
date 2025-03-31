//
//Prezzo: 10
//Quantità: 3
//Percentuale di sconto: 30
//
//Totale: 30 euro
//Sconto effettuato: 9 euro
//Totale scontato: 21 euro

Console.Write("Prezzo: ");
double pr = float.Parse(Console.ReadLine());
Console.Write("Quantità: ");
int quan  = int.Parse(Console.ReadLine());
Console.Write("Percentuale di sconto: ");
int per  = int.Parse(Console.ReadLine());

double tot = pr * quan;
Console.WriteLine("\nTotale: {0} euro", tot);

double sconto = (tot * per) / 100;
Console.WriteLine("Sconto effettuato: {0} euro",sconto);

double totScontato= tot - sconto;
Console.WriteLine("Totale scontato: {0} euro",totScontato);
