namespace Veicoli
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("ESERCIZIO EREDITARIETÀ - VEICOLI\n");

            // Creazione di due istanze di Auto
            Auto auto1 = new Auto("Fiat", "Panda", 1200, "Bianco", "Benzina", 5, "Manuale");
            Auto auto2 = new Auto("Volkswagen", "Golf", 1600, "Nero", "Diesel", 5, "Automatico");

            // Creazione di due istanze di Scooter
            Scooter scooter1 = new Scooter("Piaggio", "Vespa", 125, "Rosso", "Benzina", 2);
            Scooter scooter2 = new Scooter("Honda", "SH", 300, "Blu", "Benzina", 2);

            // Test delle classi
            Console.WriteLine("AUTO 1:");
            Console.WriteLine(auto1.ToString());
            Console.WriteLine();

            Console.WriteLine("AUTO 2:");
            Console.WriteLine(auto2.ToString());
            Console.WriteLine();

            Console.WriteLine("SCOOTER 1:");
            Console.WriteLine(scooter1.ToString());
            Console.WriteLine();

            Console.WriteLine("SCOOTER 2:");
            Console.WriteLine(scooter2.ToString());
            Console.WriteLine();

            // Test accesso ai metodi
            Console.WriteLine("INFORMAZIONI AGGIUNTIVE:");
            Console.WriteLine($"Auto1 - Numero porte: {auto1.GetNumeroPorte()}, Cambio: {auto1.GetTipologiaCambio()}");
            Console.WriteLine($"Scooter1 - Numero ruote: {scooter1.GetNumeroRuote()}");
        }
    }
}
