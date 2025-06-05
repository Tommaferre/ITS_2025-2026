namespace Quadrilateri
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Ereditarietà");

            var q1 = new Quadrilatero(1.25, 1.5, 4, 2.75);
            Console.WriteLine(q1);
            var r1 = new Rettangolo(2, 4);
            Console.WriteLine(r1);
            var qu1 = new Quadrato(3);
            Console.WriteLine(qu1);

        }
    }
}
