namespace Rubrica
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Contatto con tutti i dati
            Contatto contatto1 = new Contatto(
                "Mario", "Rossi", "Via Trento 28", "10100", "Torino", "TO", "011-4329512", "RossiM@gmail.it"
            );

            // Contatto solo con nome e cognome
            Contatto contatto2 = new Contatto("Luca", "Bianchi");

            // Visualizzazione
            Console.WriteLine("Scheda contatto 1:");
            Console.WriteLine(contatto1.SchedaCompleta());

            Console.WriteLine("\nScheda contatto 2:");
            Console.WriteLine(contatto2.SchedaCompleta());
        }
    }
}
