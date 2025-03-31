// Dati in input il giorno, il mese e l'anno di una data di nascita,
// si richiede di calcolare l'età
// Visualizzare il risultato

Console.Write("Giorno: ");
int giorno = int.Parse(Console.ReadLine());

Console.Write("Mese: ");
int mese = int.Parse(Console.ReadLine());

Console.Write("Anno: ");
int anno = int.Parse(Console.ReadLine());

DateTime oggi= DateTime.Now;

int eta = oggi.Year-anno;

if (oggi.Month > mese)
    eta--; //decremento
else if (oggi.Month == mese && oggi.Day > giorno)
    eta--;

Console.WriteLine($"Età: {eta}");
