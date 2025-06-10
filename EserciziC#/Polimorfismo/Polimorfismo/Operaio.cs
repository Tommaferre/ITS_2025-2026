using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Polimorfismo
{
    internal class Operaio : Dipendente
    {
        public string Tipo { get; set; }

        public Operaio(string cognome, string nome, double pagaOraria, int oreLavorate, string tipo)
            : base(cognome, nome, pagaOraria, oreLavorate)
        {
            Tipo = tipo;
        }

        public override double CalcolaStipendio()
        {
            double stipendioBase = base.CalcolaStipendio();
            double bonus = 0;

            switch (Tipo.ToLower())
            {
                case "installatore":
                    bonus = 185;
                    break;
                case "manutentore":
                    bonus = 230;
                    break;
            }

            return stipendioBase + bonus;
        }

        public override string ToString()
        {
            return $"{Cognome} {Nome} - Tipo: {Tipo} - Stipendio: {CalcolaStipendio():F2} euro";
        }
    }
}
