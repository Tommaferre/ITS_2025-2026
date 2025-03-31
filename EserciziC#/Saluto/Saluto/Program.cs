//output: BUON GIORNO | BUON POMERIGGIO | BUONA SERA | BUONA NOTTE

// data e ora si recuperano dal tipo DateTime


DateTime oggi = DateTime.Now;

//Console.WriteLine(oggi.ToString()); printa data  e ora come se fosse una stringa
string msg = string.Empty;
if (oggi.Hour >= 6 && oggi.Hour <= 14)
    msg = "BUON GIORNO";
else if (oggi.Hour >= 14 && oggi.Hour <= 18)
    msg = "BUON POMERIGGIO";
else if (oggi.Hour >= 18 && oggi.Hour <= 22)
    msg = "BUONA SERA";
else 
    msg = "BOUNA NOTTE";

Console.WriteLine(msg);
Console.WriteLine($"Data: {oggi.ToLongDateString()}");
Console.WriteLine($"Sono le ore: {oggi.ToShortTimeString()}");