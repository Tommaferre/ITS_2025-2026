namespace ClasseAuto
{
    class Auto //uso PascalCase per nomi di classi metodi e proprietà
    {
        public string Marca { get; set; }
        public string Modello { get; set; }
        public int Cilindrata { get; set; }
        public string Alimentazione { get; set; }
        public string Colore { get; set; }

        // Costruttore della classe Auto, chiamato quando si crea un oggetto
        public Auto(string marca, string modello, int cilindrata, string alimentazione, string colore)
        {
            Marca = marca;
            Modello = modello;
            Cilindrata = cilindrata;
            Alimentazione = alimentazione.ToLower();
            Colore = colore;
        }

        // Metodo per calcolare la velocità massima
        public int CalcolaVelocitaMax()
        {
            int baseVelocita = Cilindrata / 10;
            int bonus = 0;

            switch (Alimentazione)
            {
                case "benzina":
                    bonus = 30;
                    break;
                case "diesel":
                    bonus = 20;
                    break;
                case "gpl":
                    bonus = -10;
                    break;
                case "metano":
                    bonus = -30;
                    break;
                default:
                    Console.WriteLine("Alimentazione non riconosciuta. Nessun bonus applicato.");
                    break;
            }

            return baseVelocita + bonus;
        }

        // Metodo usa e getta per stampare tutte le caratteristiche
        public void Stampa()
        {
            Console.WriteLine("--------- AUTO ---------");
            Console.WriteLine($"Marca: {Marca}");
            Console.WriteLine($"Modello: {Modello}");
            Console.WriteLine($"Cilindrata: {Cilindrata} cc");
            Console.WriteLine($"Alimentazione: {Alimentazione}");
            Console.WriteLine($"Colore: {Colore}");
            Console.WriteLine($"Velocità massima stimata: {CalcolaVelocitaMax()} km/h");
            Console.WriteLine();
        }
    }

    internal class Program
    {
        static void Main(string[] args)
        {
            Auto auto1 = new Auto("Fiat", "Panda", 1000, "benzina", "azzurra");
            Auto auto2 = new Auto("Volkswagen", "Golf", 1600, "diesel", "nero");
            Auto auto3 = new Auto("Opel", "Corsa", 1200, "gpl", "blu");

            auto1.Stampa();
            auto2.Stampa();
            auto3.Stampa();
        }
    }
}
