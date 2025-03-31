// Data in input una data di nascita verificare se è corretta
// Restituire come output 
// format data lineare gg/mm/aaaa
// oppure errore

Console.Write("Giorno: ");
int giorno = int.Parse(Console.ReadLine());

Console.Write("Mese: ");
int mese = int.Parse(Console.ReadLine());

Console.Write("Anno: ");
int anno = int.Parse(Console.ReadLine());


bool flag = false; // true => errore trovato; se il flag rimane false => errore non trovato

// Verifica dei dati coerenti con una data
if (anno < 1582 || giorno < 1 || giorno > 31 || mese < 1 || mese > 12)
    flag = true;
else if ((mese == 4 || mese == 6 || mese == 9 || mese == 11) && giorno == 31)
    flag = true;
else if (mese == 2 && giorno > 29)
    flag = true;
else if (mese == 2 && giorno == 29 && anno % 4 != 0)
    flag = true;
else if (mese == 2 && giorno == 29 && anno % 100 == 0 && anno % 400 !=0)
    flag = true;

string msg = string.Empty;

if (giorno < 10)
    msg += "0"; // msg = msg + "0"
msg += $"{giorno}/";
if (mese < 10)
    msg += "0";
msg += $"{mese}/{anno}";


if (!flag)
    Console.WriteLine(msg);
else
    Console.WriteLine("Errore");