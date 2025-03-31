/* Fa si che il codice dia come output questo:
 * Prezzo: 10.25
 * Quantità: 3
 * 
 * Totale: 30.75 euro (funziona solo con la virgola il problema è il punto)
 */

Console.Write("Prezzo: ");
double pr = double.Parse(Console.ReadLine());
Console.Write("Quantità: ");
int q  = int.Parse(Console.ReadLine());
// calcolo
double tot = pr * q;
Console.Write("\nTotale: {0} euro", tot);
