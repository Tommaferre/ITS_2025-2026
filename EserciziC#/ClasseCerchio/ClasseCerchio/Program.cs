namespace ClasseCerchio
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Uso di oggetti di tipo cerchio!");
            try
            {
                //istanza di cerchio
                Cerchio c = new Cerchio(1.55);
                Console.WriteLine($"Raggio: {c.GetRaggio()}");
                Console.WriteLine($"Diametro: {c.Diametro()}");
                Console.WriteLine($"Circonferenza: {c.Circonferenza()}");
                Console.WriteLine($"Area: {c.Area()}");
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }

        }
    }
}
