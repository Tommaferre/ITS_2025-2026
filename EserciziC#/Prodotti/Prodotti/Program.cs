namespace Prodotti
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("ESERCIZIO EREDITARIETÀ - GESTIONE PRODOTTI NEGOZIO\n");

            // Creazione array di prodotti (2 + 3 + 2 = 7 prodotti totali)
            Prodotto[] prodotti = new Prodotto[7];

            // 2 Prodotti base
            prodotti[0] = new Prodotto("Penna Bic", "Bic", 1.50);
            prodotti[1] = new Prodotto("Quaderno", "Pigna", 3.20);

            // 3 Prodotti Alimentari
            prodotti[2] = new Alimentare("Latte Intero", "Parmalat", 1.35, new DateTime(2025, 6, 15));
            prodotti[3] = new Alimentare("Pane Integrale", "Mulino Bianco", 2.80, new DateTime(2025, 6, 2));
            prodotti[4] = new Alimentare("Yogurt Greco", "Danone", 0.95, new DateTime(2025, 6, 10));

            // 2 Prodotti Non Alimentari
            prodotti[5] = new NonAlimentare("Bottiglia Acqua", "Evian", 4.50, "Plastica");
            prodotti[6] = new NonAlimentare("Scatola Regalo", "Amazon", 2.30, "Cartone");

            // Visualizzazione mediante iterazione
            Console.WriteLine("=== ELENCO PRODOTTI ===\n");

            for (int i = 0; i < prodotti.Length; i++)
            {
                Console.WriteLine($"Prodotto {i + 1}: {prodotti[i].ToString()}");
            }
        }
    }
}
