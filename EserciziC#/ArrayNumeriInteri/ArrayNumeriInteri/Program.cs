// Dato un array di numeri interi,
// di dimensione 5 
// riempirlo
// visualizzare posizione e valore
Console.WriteLine("Array di numeri interi!");

// Definizione di un array di numeri interi
int[] numeri =  new int[5];

// scrrittura su array
numeri[0] = 12;
numeri[1] = -11;
numeri[2] = -3;
numeri[3] = -4;
numeri[4] = 5;

//lettura
Console.WriteLine($"posizione: 3; valore: {numeri[3]}");

//lettura di tutto l'array
Console.WriteLine("\n\nLettura intero array - uso del for ");
for  (int i = 0; i < numeri.Length; i++)
    Console.WriteLine($"posizione: {i}; valore: {numeri[i]}");

//lettura array con foreach
Console.WriteLine("\n\nLettura intero array - uso del foreach ");
foreach (var numero in numeri)
    Console.WriteLine($"valore: {numero}");