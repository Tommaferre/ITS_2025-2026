using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Atleti
{
    internal class Atleta : IAtletaUniversale
    {
        public string Nome { get; set; }
        public string Cognome { get; set; }
        public int NumeroPettorina { get; set; }
        public string Disciplina { get; set; }

        // Costruttore
        public Atleta(string nome, string cognome, int numeroPettorina, string disciplina)
        {
            Nome = nome;
            Cognome = cognome;
            NumeroPettorina = numeroPettorina;
            Disciplina = disciplina;
        }

        // Implementazione dei metodi di IAtleta
        public string Corro()
        {
            return "Sto correndo";
        }

        public string Salto()
        {
            return "Sto saltando";
        }

        // Implementazione dei metodi di ITennista
        public string Dritto()
        {
            return "Sto giocando di dritto";
        }

        public string Rovescio()
        {
            return "Sto giocando di rovescio";
        }

        // Implementazione dei metodi di INuotatore
        public string Rana()
        {
            return "Sto nuotando a rana";
        }

        public string Dorso()
        {
            return "Sto nuotando a dorso";
        }

        // Implementazione dei metodi di IAtletaUniversale
        public string Mangio()
        {
            return "Sto mangiando";
        }

        public string Bevo()
        {
            return "Sto bevendo";
        }

        // Override del metodo ToString per la stampa dell'oggetto
        public override string ToString()
        {
            return $"Nome: {Nome}, Cognome: {Cognome}, Numero Pettorina: {NumeroPettorina}, Disciplina: {Disciplina}";
        }
    }
}
