// Dato in input un numero intero [1-7]
// Visualizzare il nome del relativo giorno della settimana

// es. 2 => martedì

Console.Write("Numero [1-7]: ");
int n = int.Parse(Console.ReadLine());

switch (n)
{
    case 1: Console.WriteLine("Lunedì");break;
        case 2: Console.WriteLine("Martedì");break;
        case 3: Console.WriteLine("Mercoledì");break;
        case 4: Console.WriteLine("Giovedì");break;
        case 5: Console.WriteLine("Venerdì");break;
        case 6: Console.WriteLine("Sabato");break;
        case 7: Console.WriteLine("Domenica");break;
        default: Console.WriteLine("Errore");break;
}