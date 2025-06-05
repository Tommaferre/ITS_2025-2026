namespace Matite
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("ESERCIZIO EREDITARIETÀ - MATITE\n");

            // Creazione di due istanze di Matita normale
            Matita matita1 = new Matita("Faber-Castell", "HB Classic");
            Matita matita2 = new Matita("Staedtler", "Mars Lumograph");

            // Creazione di due istanze di MatitaConGommino
            MatitaConGommino matitaGommino1 = new MatitaConGommino("Dixon", "Ticonderoga");
            MatitaConGommino matitaGommino2 = new MatitaConGommino("Papermate", "Pink Pearl");

            // Test delle matite normali
            Console.WriteLine("=== MATITE NORMALI ===");
            Console.WriteLine("MATITA 1:");
            Console.WriteLine(matita1.ToString());
            Console.WriteLine();

            Console.WriteLine("MATITA 2:");
            Console.WriteLine(matita2.ToString());
            Console.WriteLine();

            // Test delle matite con gommino
            Console.WriteLine("=== MATITE CON GOMMINO ===");
            Console.WriteLine("MATITA CON GOMMINO 1:");
            Console.WriteLine(matitaGommino1.ToString());
            Console.WriteLine();

            Console.WriteLine("MATITA CON GOMMINO 2:");
            Console.WriteLine(matitaGommino2.ToString());
            Console.WriteLine();

            // Test delle funzionalità
            Console.WriteLine("=== TEST FUNZIONALITÀ ===");
            Console.WriteLine("\n--- Test temperino su Matita 1 ---");
            matita1.Tempera();
            matita1.Tempera();
            Console.WriteLine($"Stato attuale: {matita1.ToString()}\n");

            Console.WriteLine("--- Test temperino e cancellature su MatitaConGommino 1 ---");
            matitaGommino1.Tempera();
            Console.WriteLine($"Dopo temperata: {matitaGommino1.ToString()}");

            matitaGommino1.Cancella();
            matitaGommino1.Cancella();
            matitaGommino1.Cancella();
            Console.WriteLine($"Dopo 3 cancellature: {matitaGommino1.ToString()}\n");

            // Test limiti
            Console.WriteLine("--- Test limiti ---");
            Console.WriteLine("Tempero la matita fino al limite:");
            for (int i = 0; i < 40; i++) // Provo a temperare molte volte
            {
                matita2.Tempera();
                if (matita2.GetLunghezza() <= 0.5) break;
            }

            Console.WriteLine("\nUso tutte le cancellature del gommino:");
            for (int i = 0; i < 12; i++) // Provo a cancellare più delle cancellature disponibili
            {
                matitaGommino2.Cancella();
            }

            Console.WriteLine("\n=== STATO FINALE ===");
            Console.WriteLine($"Matita 1: {matita1.ToString()}");
            Console.WriteLine($"Matita 2: {matita2.ToString()}");
            Console.WriteLine($"Matita con Gommino 1: {matitaGommino1.ToString()}");
            Console.WriteLine($"Matita con Gommino 2: {matitaGommino2.ToString()}");
        }
    }
}
