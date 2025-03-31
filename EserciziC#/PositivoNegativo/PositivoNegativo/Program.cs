// Dato in input un numero intero,
// stabilire se è positivo o negativo

Console.Write("Inserisci un numero intero: ");
int n = int.Parse(Console.ReadLine());

if (n >= 0)
    Console.WriteLine($"{n} è positivo");
else
    Console.WriteLine($"{n} è negativo");