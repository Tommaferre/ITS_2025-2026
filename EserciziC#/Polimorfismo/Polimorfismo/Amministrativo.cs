using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Polimorfismo
{
    internal class Amministrativo : Dipendente
    {
        public string Mansione { get; set; }

        public Amministrativo(string cognome, string nome, double pagaOraria, int oreLavorate, string mansione)
            : base(cognome, nome, pagaOraria, oreLavorate)
        {
            Mansione = mansione;
        }

        public override double CalcolaStipendio()
        {
            double stipendioBase = base.CalcolaStipendio();
            double bonus = 0;

            switch (Mansione.ToLower())
            {
                case "contabile":
                    bonus = 150;
                    break;
                case "risorse umane":
                    bonus = 75;
                    break;
                case "direttore":
                    bonus = 250;
                    break;
            }

            return stipendioBase + bonus;
        }

        public override string ToString()
        {
            return $"{Cognome} {Nome} - Mansione: {Mansione} - Stipendio: {CalcolaStipendio():F2} euro";
        }
    }
}
