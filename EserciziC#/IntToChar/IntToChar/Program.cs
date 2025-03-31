//  Dato in input un numero intero [32-127]
//  visualizzare il carattere corrispondente in ASCII standard

//input

Console.WriteLine("Inserisci un numero intero [32-127]: ");
int pos = int.Parse(Console.ReadLine());
char c = (char)pos;
Console.WriteLine("posizione ASCII {0} corrisponde al carattere {1}", pos, c);