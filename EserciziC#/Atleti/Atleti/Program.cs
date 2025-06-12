namespace Atleti
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Creazione di un'istanza di Atleta
            Atleta atleta = new Atleta("Mario", "Rossi", 123, "Atletica");

            // Stampa dell'oggetto atleta
            Console.WriteLine(atleta.ToString());

            // Richiamo dei metodi delle interfacce
            Console.WriteLine(atleta.Corro());
            Console.WriteLine(atleta.Salto());
            Console.WriteLine(atleta.Dritto());
            Console.WriteLine(atleta.Rovescio());
            Console.WriteLine(atleta.Rana());
            Console.WriteLine(atleta.Dorso());
            Console.WriteLine(atleta.Mangio());
            Console.WriteLine(atleta.Bevo());
        }
    }
}
