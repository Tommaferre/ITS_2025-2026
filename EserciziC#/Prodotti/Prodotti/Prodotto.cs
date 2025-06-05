using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Prodotti
{
    internal class Prodotto
    {
        protected string nome;
        protected string marca;
        protected double prezzo;

        public Prodotto(string nome, string marca, double prezzo)
        {
            this.nome = nome;
            this.marca = marca;
            this.prezzo = prezzo;
        }

        public string GetNome() => nome;
        public string GetMarca() => marca;
        public double GetPrezzo() => prezzo;

        public override string ToString()
        {
            return $"{{nome: {nome}, marca: {marca}, prezzo: €{prezzo:F2}}}";
        }
    }
}
