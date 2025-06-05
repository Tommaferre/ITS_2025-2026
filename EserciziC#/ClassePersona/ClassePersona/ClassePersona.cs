using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassePersona
{
    internal class ClassePersona
    {
        public string Cognome {  get; set; } = string.Empty;
        public string Nome {  get; set; } = string.Empty;
        public DateTime DataNascita { get; set; }
        public string LuogoNascita { get; set; } = string.Empty;
        public Sesso Sesso { get; set; }

        public Persona()
        {

        }
        public int Eta()
        {
            int eta = DateTime.Now.Year-DataNascita.Year;
            return eta;
        }

        private string Stampa(string separatore)
        {
            return $"{nameof(Cognome)}={Cognome}" +
               $"{separatore}{nameof(Nome)}={Nome}" +
               $"{separatore}{{{nameof(DataNascita)}={DataNascita.ToString()}+" +
               $"{separatore}{{{nameof(LuogoNascita)}={LuogoNascita}" +
               $"{separatore}{{{nameof(Sesso)}={Sesso.ToString()}" +
               $"{separatore}{{Età= {Eta()}";
        }

        public string StampaDettaglio()
        {
            return Stampa("\n");
        }
        public string StampaLineare()
        {
            return $"{nameof(Cognome)}={Cognome}" +
                $", {nameof(Nome)}={Nome}" +
                $", {nameof(DataNascita)}={DataNascita.ToString()}+" +
                $", {nameof(LuogoNascita)}={LuogoNascita}" +
                $", {nameof(Sesso)}={Sesso.ToString()}" +
                $", Età= {Eta()}";
        }

        public override string ToString()
        {
            return $"{{{StampaLineare}}}";
        }
    }

}
