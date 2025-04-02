namespace ClasseQuadrato1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Uso di oggetti di tipo Quadrato!");

            //oggetto
            Quadrato1 q; //composto sia da caratteristiche, che metodi

            //istanza
            q = new Quadrato1();//richiamo del costruttore (modo in cui ho la possibilità di richiamare classi)

            //se non istanzio prima q non posso usare nulla
            q.lato = 1.55;//scrittura
            Console.WriteLine($"Lato: {q.lato}");//attributo o campo

            Console.WriteLine($"Perimetro: {q.Perimetro()}");//è un metodo quindi ci vanno le tonde
            Console.WriteLine($"Area: {q.Area()}");
            Console.WriteLine($"Diagonale: {q.Diagonale()}");
        }
    }
}
