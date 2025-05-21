namespace ClasseHardDisk
{
    internal class Program
    {
        static void Main(string[] args)
        {
            HardDisk[] dischi = new HardDisk[5];

            dischi[0] = new HardDisk("Seagate", 7200, 8.5, 1000);
            dischi[1] = new HardDisk("Western Digital", 5400, 12.0, 500);
            dischi[2] = new HardDisk("Samsung", 10000, 6.0, 2000);
            dischi[3] = new HardDisk("Toshiba", 7200, 10.0, 750);
            dischi[4] = new HardDisk("Kingston", 15000, 3.5, 4000);

            foreach (var disco in dischi)
            {
                disco.Stampa();
            }
            // Classifica ordinata per punteggio decrescente
            //var classifica = dischi.OrderByDescending(d => d.CalcolaPunteggio()).ToArray();

            //Console.WriteLine("=== CLASSIFICA DEI MODELLI ===\n");
            //for (int i = 0; i < classifica.Length; i++)
            //{
            //    var disco = classifica[i];
            //    Console.WriteLine($"{i + 1}. {disco.Marca} - Punteggio: {disco.CalcolaPunteggio()}");
            //}
        }
    }
}
