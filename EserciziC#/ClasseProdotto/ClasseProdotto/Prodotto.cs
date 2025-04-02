using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClasseProdotto
{
    internal class Prodotto
    {
        //quando istanzio una stringa ho il problema che può essere vuota
        //col punto interrogativo possiamo dire che
        //quell'atttributo può valere null (non è obbligatorio)
        //siccome il nome sicuramente non sarà null
        //lo inizializzo a stringa vuota

        //metodi
        //attributi
        private string denominazione;
        public string Denominazione
        {
            get { return denominazione; }
            set { denominazione = value; }
        }

        private int codice;
        public int Codice
        {
            get { return codice; }
            set { codice = value; }
        }

        private double prezzo;
        public double Prezzo
        {
            get { return prezzo; }
            set { prezzo = value; }
        }

        private int giacenza;
        public int Giacenza
        {
            get { return giacenza; }
            set { giacenza = value; } //se vuoi metti i controlli qua dentro
        }


        //prodotto in scorta --> se la sua giacenza [1,9]
        public bool IsInScorta()
        {
            return giacenza>=1 && giacenza<=9;
        }
        //prodotto esaurito --> se la sua giacenza è zero
        public bool IsEsaurito()
        {
            return giacenza == 0;
        }
        
        //metodo "consumer"
        public string StampaDettaglio()
        {
            return $"Codice: {Codice}"+
                $"\nDenominazione: {denominazione}" +
                $"\nPrezzo: {Prezzo}" +
                $"\nGiacenza: {giacenza}";
        }
        public string StampaLineare()
        {
            return $"Codice: {Codice}" +
                $", Denominazione: {denominazione}" +
                $", Prezzo: {Prezzo}" +
                $", Giacenza: {giacenza}";
        }

    }

}
