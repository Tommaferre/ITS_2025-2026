// Lanciare un dado a 6 facce n volte,
// calcolare la frequenza delle uscite
// visualizzare i risultati

Console.Write("Quante volte vuoi lanciare il dado? ");
int n = int.Parse(Console.ReadLine());

Random random = new Random();

int conta1 = 0, conta2 = 0, conta3 = 0, conta4 = 0, conta5 = 0, conta6 = 0;
for (int i = 0; i < n; i++)
{
    switch (random.Next(6) + 1)
    {
        case 1: conta1++; break;
        case 2: conta2++; break;
        case 3: conta3++; break;
        case 4: conta4++; break;
        case 5: conta5++; break;
        case 6: conta6++; break;
        default: Console.WriteLine("Errore"); break;
    }
}

Console.WriteLine($"1: {conta1} volte; frequenza: {Math.Floor(((double)conta1 / n) * 100)}%");
Console.WriteLine($"2: {conta2} volte; frequenza: {Math.Floor(((double)conta2 / n) * 100)}%");
Console.WriteLine($"3: {conta3} volte; frequenza: {Math.Floor(((double)conta3 / n) * 100)}%");
Console.WriteLine($"4: {conta4} volte; frequenza: {Math.Floor(((double)conta4 / n) * 100)}%");
Console.WriteLine($"5: {conta5} volte; frequenza: {Math.Floor(((double)conta5 / n) * 100)}%");
Console.WriteLine($"6: {conta6} volte; frequenza: {Math.Floor(((double)conta6 / n) * 100)}%");
