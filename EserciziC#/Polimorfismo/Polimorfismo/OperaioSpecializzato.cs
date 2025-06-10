using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Polimorfismo
{
    internal class OperaioSpecializzato : Operaio
    {
        public double Indennita { get; set; }

        public OperaioSpecializzato(string cognome, string nome, double pagaOraria, int oreLavorate, string tipo, double indennita)
            : base(cognome, nome, pagaOraria, oreLavorate, tipo)
        {
            Indennita = indennita;
        }

        public override double CalcolaStipendio()
        {
            return base.CalcolaStipendio() + Indennita;
        }

        public override string ToString()
        {
            return $"{Cognome} {Nome} - Tipo: {Tipo} - Indennità: {Indennita:F2} euro - Stipendio: {CalcolaStipendio():F2} euro";
        }
    }
}
