using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Polimorfismo
{
    internal class Dipendente
    {
        public string Cognome { get; set; }
        public string Nome { get; set; }
        public double PagaOraria { get; set; }
        public int OreLavorate { get; set; }

        public Dipendente(string cognome, string nome, double pagaOraria, int oreLavorate)
        {
            Cognome = cognome;
            Nome = nome;
            PagaOraria = pagaOraria;
            OreLavorate = oreLavorate;
        }

        public virtual double CalcolaStipendio()
        {
            return PagaOraria * OreLavorate;
        }

        public override string ToString()
        {
            return $"{Cognome} {Nome} - Stipendio: {CalcolaStipendio():F2} euro";
        }
    }
}
