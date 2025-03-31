// Dato un numero n sommare i primi n numeri dispari e stampare 
// es . 25 = 1 + 3 + 5 + 7 + 9


using Microsoft.VisualBasic;

Console.Write("Inserisci un numero n per sommare i primi n numeri dispari: ");
int n = int.Parse(Console.ReadLine());
int somma = 0;
string msg = string.Empty;

/*
 * Versione fatta da me non ottimale ma funzionante
for (int i = 0; i < n; i++)
    somma = (somma + (2 * i) + 1);

int nDispari = 0;
for (int i = 0; i < n; i++)
{
    nDispari = (2 * i) + 1;
    msg1 = $"{msg1} + {nDispari}";
}

string msg;
msg = $"{somma} = {msg1}";
Console.Write(msg);
*/

for (int i = 0; i < n; i++)
{
    somma = (somma + (2 * i) + 1);
    // ? : Operatore ternario la stingaè vuota => no => allora metti il + e poi ""
    msg += (msg.Length != 0 ? "+" : "") + (2 * i + 1); //costruzione della stringa
}

Console.Write($"{somma} = {msg}");
    