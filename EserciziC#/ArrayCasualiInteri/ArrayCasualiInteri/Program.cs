// Generare un array di numeri interi casuali a dimensione casuale con le seguenti ipotesi
// a. dimensione dell'array: [inf,sup], inf e sup presi in input
// b. riempimento dell'array: [inf1,sup1], con inf1 e sup1 presi in input

// creare un menu testuale per scegliere una delle seguenti operazioni
// 1. posizione e valore dei numeri multipli di m, con m dato in input
// 2. posizione e valore dei numeri primi generati
// 3. media aritmetica dei soli numeri strettamente positivi
// 4. posizione e valore dei numeri generati
// 0. esci 
//input dei dati
int inf, sup;
do
{
    Console.WriteLine("Inserisci gli estremi dell'intervallo [inf,sup] per determinare la dimensione dell'array");
    Console.WriteLine("Inf: ");
    inf = int.Parse(Console.ReadLine());

    Console.WriteLine("Sup: ");
    sup = int.Parse(Console.ReadLine());
    if (inf > sup || inf <= 0)
        Console.WriteLine("Dati inseriti non coerenti");
    else
        break;
} while (true);

Random rand = new Random();

int[] numeri = new int[rand.Next(inf, sup + 1)];

int inf1, sup1;
do
{
    Console.WriteLine("Inserisci gli estremi dell'intervallo [inf1,sup1] per determinare i valori da inserire nell'array");
    Console.WriteLine("Inf: ");
    inf1 = int.Parse(Console.ReadLine());

    Console.WriteLine("Sup: ");
    sup1 = int.Parse(Console.ReadLine());
    if (inf1 > sup1)
        Console.WriteLine("Dati inseriti non coerenti");
    else
        break;
} while (true);

//riempimento dell'array
for (int i = 0; i < numeri.Length; i++)
    numeri[i] = rand.Next(inf1, sup1 + 1);

//definizione del menu testuale
string msg = "1. posizione e valore dei numeri multipli di m, con m dato in input" +
    "\n2. posizione e valore dei numeri primi generati" +
    "\n3. media aritmetica dei soli numeri strettamente positivi" +
    "\n4. posizione e valore dei numeri generati" +
    "\n0. esci" +
    "\nLa tua scelta: ";

int scelta;
do
{
    Console.WriteLine(msg);
    scelta = int.Parse(Console.ReadLine());
    switch (scelta)
    {
        case 1:
            {
                //1. multipli di m, con m dato in input
                Console.WriteLine("inserisci il valore di cui cercare i multipli nell'array");
                int m = int.Parse(Console.ReadLine());
                for (int i = 0; i < numeri.Length; i++)
                    if (numeri[i] % m == 0)
                        Console.WriteLine($"{i}: {numeri[i]}");

            }
            break;
        case 2:
            {
                // 2. posizione e valore dei numeri primi generati
                Console.WriteLine("Ricerca numeri primi");
                for (int i = 0; i < numeri.Length; i++)
                    if (IsPrimo(numeri[i]))
                        Console.WriteLine($"{i}: {numeri[i]}");
            }
            break;
        case 3:
            {
                Console.WriteLine("Media aritmetica dei soli numeri strettamente positivi");
                int somma = 0; //sommatore
                int contaPositivi = 0; //contatore
                for (int i = 0; i < numeri.Length; i++)
                    if (numeri[i] > 0)
                    {
                        somma += numeri[i];
                        contaPositivi++;
                    }
                if (contaPositivi > 0)
                    Console.WriteLine($"media aritmetica: {(double)somma / contaPositivi}");
                else
                    Console.WriteLine("Non sono stati generati numeri strettamente positivi");
            }
            break;
        case 4:
            {
                // 4. posizione e valore dei numeri generati
                //stampa dell'array - format: posizione ; valore
                for (int i = 0; i < numeri.Length; i++)
                    Console.WriteLine($"{i}: {numeri[i]}");
            }
            break;
        case 0:
            Console.WriteLine("Programma Terminato"); break;
        default:
            Console.WriteLine("dato non coerente"); break;
    }
} while (scelta != 0);

// funzione di verifica se un numero è un numero primo
bool IsPrimo(int numero)
{
    if (numero <2)
        return false;
    for (int i = 2; i < numero - 1; i++)
        if (numero % i == 0)
            return false; //numero non primo
    return true; // numero primo
}