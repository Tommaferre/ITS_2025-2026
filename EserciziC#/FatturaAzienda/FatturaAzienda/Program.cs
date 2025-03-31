// Dato in input l'imponibile, calcolare il totale da pagare sapendo che l'aliquota iva è al 22%
//Visualizzare i risultati 

/*
 * Imponibile 156,99 euro
 * 
 * iva (22%): ?? euro
 * 
 * Totale: ?? euro
 * 
 */

Console.Write("Imponibile ");
double impo = double.Parse(Console.ReadLine());

//calcoli
int aliquotaIva = 22;
double iva = impo * aliquotaIva / 100;
double tot = impo + iva;

//usare il format stampa dettaglio
string msg = $"\nImponibile: {impo:#.##} euro" +
    $"\nIva ({aliquotaIva}%): {iva:#.##} euro" + 
    $"\nTotale: {tot:#.##} euro";

Console.Write(msg); 