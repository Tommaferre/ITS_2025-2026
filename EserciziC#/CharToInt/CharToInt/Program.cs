//  Dato in input un carattere rappresentabile
//  visualizzare la sua posizione in ASCII standard


//input
Console.WriteLine("Inserisci un carattere da tastiera: ");
char c = char.Parse(Console.ReadLine());

int posizione = (int)c;
Console.WriteLine("Il carattere {0} e' in psoizione ASCII: {1}", c,posizione);