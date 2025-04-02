namespace ClasseProdotto
{
    internal class Program
    {
        static void Main(string[] args)
        {
            /*
             Di un prodotto si conoscono le seguenti informazioni:
             codice
             denominazione
             prezzo 
             giacenza
             */
            Console.WriteLine("Istanze di tipo Prodotto!");

            Prodotto p1 = new Prodotto();
            p1.Codice = 1;
            p1.Denominazione = "Prodotto 1";
            p1.Prezzo = 12.35;
            p1.Giacenza = 100;

            Prodotto p2 = new Prodotto()
            {
                Codice = 2,
                Denominazione = "Prodotto 2",
                Prezzo = 2.5,
                Giacenza = 3
            };
            Prodotto p3 = new Prodotto()
            {
                Codice = 3,
                Denominazione = "Prodotto 3",
                Prezzo = 12.5,
                Giacenza = 0
            };

            //stampa delle istanze
            Console.WriteLine(p1.StampaLineare());
            Console.WriteLine(p2.StampaDettaglio());
            Console.WriteLine(p3.StampaLineare());
        }
    }
}
