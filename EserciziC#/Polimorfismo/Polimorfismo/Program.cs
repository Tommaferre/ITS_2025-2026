namespace Polimorfismo
{
    internal class Program
    {
        static Dipendente[] dipendenti = new Dipendente[8];

        static void Main(string[] args)
        {
            CreaDipendenti();

            int scelta;
            do
            {
                MostraMenu();
                scelta = int.Parse(Console.ReadLine());

                switch (scelta)
                {
                    case 1:
                        VisualizzaTuttiDipendenti();
                        break;
                    case 2:
                        VisualizzaAmministrativi();
                        break;
                    case 3:
                        VisualizzaOperai();
                        break;
                    case 4:
                        VisualizzaOperaiSpecializzati();
                        break;
                    case 5:
                        VisualizzaOperaiStipendioSuperiore2000();
                        break;
                    case 6:
                        VisualizzaOperaiManutentori();
                        break;
                    case 7:
                        VisualizzaDirettore();
                        break;
                    case 8:
                        Console.WriteLine("Arrivederci!");
                        break;
                    default:
                        Console.WriteLine("Scelta non valida!");
                        break;
                }

                if (scelta != 8)
                {
                    Console.WriteLine("\nPremi un tasto per continuare...");
                    Console.ReadKey();
                    Console.Clear();
                }

            } while (scelta != 8);


        }
        static void CreaDipendenti()
        {
            // Amministrativi
            dipendenti[0] = new Amministrativo("Rossi", "Mario", 25, 160, "contabile");
            dipendenti[1] = new Amministrativo("Bianchi", "Giulia", 30, 160, "risorse umane");
            dipendenti[2] = new Amministrativo("Verdi", "Luca", 45, 160, "direttore");

            // Operai
            dipendenti[3] = new Operaio("Neri", "Paolo", 18, 180, "installatore");
            dipendenti[4] = new Operaio("Gialli", "Marco", 20, 170, "manutentore");
            dipendenti[5] = new Operaio("Blu", "Andrea", 19, 175, "installatore");

            // Operai Specializzati
            dipendenti[6] = new OperaioSpecializzato("Viola", "Francesco", 22, 160, "manutentore", 500);
            dipendenti[7] = new OperaioSpecializzato("Rosa", "Alessandro", 21, 165, "installatore", 400);
        }

        static void MostraMenu()
        {
            Console.WriteLine("=== GESTIONE DIPENDENTI AZIENDA PETROLIFERA ===");
            Console.WriteLine("1. Visualizzare l'elenco dei dipendenti con tutti i loro dati");
            Console.WriteLine("2. Visualizzare l'elenco degli amministrativi");
            Console.WriteLine("3. Visualizzare l'elenco degli operai");
            Console.WriteLine("4. Visualizzare l'elenco degli operai specializzati");
            Console.WriteLine("5. Visualizzare l'elenco degli operai che hanno stipendio superiore a 2000,00 euro");
            Console.WriteLine("6. Visualizzare l'elenco degli operai manutentori");
            Console.WriteLine("7. Visualizzare la scheda in dettaglio del direttore amministrativo");
            Console.WriteLine("8. Uscire dal programma");
            Console.Write("\nScegli un'opzione: ");
        }

        static void VisualizzaTuttiDipendenti()
        {
            Console.WriteLine("\n=== TUTTI I DIPENDENTI ===");
            foreach (var dipendente in dipendenti)
            {
                Console.WriteLine(dipendente);
            }
        }

        static void VisualizzaAmministrativi()
        {
            Console.WriteLine("\n=== AMMINISTRATIVI ===");
            foreach (var dipendente in dipendenti)
            {
                if (dipendente is Amministrativo)
                {
                    Console.WriteLine(dipendente);
                }
            }
        }

        static void VisualizzaOperai()
        {
            Console.WriteLine("\n=== OPERAI ===");
            foreach (var dipendente in dipendenti)
            {
                if (dipendente is Operaio && !(dipendente is OperaioSpecializzato))
                {
                    Console.WriteLine(dipendente);
                }
            }
        }

        static void VisualizzaOperaiSpecializzati()
        {
            Console.WriteLine("\n=== OPERAI SPECIALIZZATI ===");
            foreach (var dipendente in dipendenti)
            {
                if (dipendente is OperaioSpecializzato)
                {
                    Console.WriteLine(dipendente);
                }
            }
        }

        static void VisualizzaOperaiStipendioSuperiore2000()
        {
            Console.WriteLine("\n=== OPERAI CON STIPENDIO > 2000 EURO ===");
            foreach (var dipendente in dipendenti)
            {
                if ((dipendente is Operaio || dipendente is OperaioSpecializzato) && dipendente.CalcolaStipendio() > 2000)
                {
                    Console.WriteLine(dipendente);
                }
            }
        }

        static void VisualizzaOperaiManutentori()
        {
            Console.WriteLine("\n=== OPERAI MANUTENTORI ===");
            foreach (var dipendente in dipendenti)
            {
                if (dipendente is Operaio operaio && operaio.Tipo.ToLower() == "manutentore")
                {
                    Console.WriteLine(dipendente);
                }
            }
        }

        static void VisualizzaDirettore()
        {
            Console.WriteLine("\n=== DIRETTORE AMMINISTRATIVO ===");
            foreach (var dipendente in dipendenti)
            {
                if (dipendente is Amministrativo admin && admin.Mansione.ToLower() == "direttore")
                {
                    Console.WriteLine($"Cognome: {admin.Cognome}");
                    Console.WriteLine($"Nome: {admin.Nome}");
                    Console.WriteLine($"Mansione: {admin.Mansione}");
                    Console.WriteLine($"Paga oraria: {admin.PagaOraria:F2} euro");
                    Console.WriteLine($"Ore lavorate: {admin.OreLavorate}");
                    Console.WriteLine($"Stipendio totale: {admin.CalcolaStipendio():F2} euro");
                    break;
                }
            }
        }
    }
}
