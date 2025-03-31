// Dato il costo di una prestazione 
// Calcolare la rivalsa pari al 4% del costo
// Calcolare l'imponibile dato dal costo più la rivalsa
// calcolare il totale da pagare sapendo che l'aliquota iva è al 22%
//Visualizzare i risultati 

/*
 * Costo 1000 euro
 * 
 * iva (22%): 220,00 euro
 * 
 * Totale lordo: 1220,00 euro
 * Ritenuta d'acconto (20%): 200,00 euro
 * Totale netto: 1020,00 euro
 * 
 */

Console.Write("Costo ");
double Costo = double.Parse(Console.ReadLine());

//calcoli
double rivalsa = Costo * 4 / 100;
double impo = Costo + rivalsa;
int aliquotaIva = 22;
double iva = impo * aliquotaIva / 100;
double tot = impo + iva;
double ritenutaAcconto = impo * 20 / 100;
double totNetto = tot - ritenutaAcconto;

//usare il format stampa dettaglio
string msg = $"\nCosto: {Costo}"+
    $"\nRivalsa (4%): {rivalsa}"+
    $"\nImponibile: {impo:#.##} euro" +
    $"\nIva ({aliquotaIva}%): {iva:#.##} euro" +
    $"\nTotale: {tot:#.##} euro" +
    $"\nRitenuta d'acconto (20%): {ritenutaAcconto} euro" +
    $"\nTotale netto: {totNetto} euro";

Console.Write(msg);