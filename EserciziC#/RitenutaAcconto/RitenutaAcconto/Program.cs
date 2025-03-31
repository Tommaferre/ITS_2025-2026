// 20% di ciò che calcolo viene sottratto da imponibile + iva
// Dato in input l'imponibile, calcolare il totale da pagare sapendo che l'aliquota iva è al 22%
//Visualizzare i risultati 

/*
 * Imponibile 1000 euro
 * 
 * iva (22%): 220,00 euro
 * 
 * Totale lordo: 1220,00 euro
 * Ritenuta d'acconto (20%): 200,00 euro
 * Totale netto: 1020,00 euro
 * 
 */

Console.Write("Imponibile ");
double impo = double.Parse(Console.ReadLine());

//calcoli
int aliquotaIva = 22;
double iva = impo * aliquotaIva / 100;
double tot = impo + iva;
double ritenutaAcconto = impo * 20 /100;
double totNetto = tot - ritenutaAcconto;

//usare il format stampa dettaglio
string msg = $"\nImponibile: {impo:#.##} euro" +
    $"\nIva ({aliquotaIva}%): {iva:#.##} euro" +
    $"\nTotale: {tot:#.##} euro"+
    $"\nRitenuta d'acconto (20%): {ritenutaAcconto} euro" +
    $"\nTotale netto: {totNetto} euro";

Console.Write(msg);