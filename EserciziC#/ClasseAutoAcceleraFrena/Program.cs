namespace ClasseAutoAcceleraFrena
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Auto miaAuto = new Auto();
            int scelta;

            Console.WriteLine(miaAuto.GetVelocita());

            do
            {
                Console.WriteLine("\n--- MENU ---");
                Console.WriteLine("1 - Accelera");
                Console.WriteLine("2 - Frena");
                Console.WriteLine("0 - Esci");
                Console.Write("Scegli un'opzione: ");

                string input = Console.ReadLine();
                if (!int.TryParse(input, out scelta))
                {
                    Console.WriteLine("Input non valido. Riprova.");
                    continue;
                }

                switch (scelta)
                {
                    case 1:
                        miaAuto.Accelera();
                        break;
                    case 2:
                        miaAuto.Frena();
                        break;
                    case 0:
                        Console.WriteLine("Programma terminato.");
                        break;
                    default:
                        Console.WriteLine("Scelta non valida. Riprova.");
                        break;
                }

            } while (scelta != 0);
        }
    }
}
