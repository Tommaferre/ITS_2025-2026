using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Prodotti
{
    internal class Alimentare: Prodotto
    {
        private DateTime dataScadenza;

        public Alimentare(string nome, string marca, double prezzo, DateTime dataScadenza)
            : base(nome, marca, prezzo)
        {
            this.dataScadenza = dataScadenza;
        }

        public DateTime GetDataScadenza() => dataScadenza;

        public override string ToString()
        {
            return $"{{nome: {nome}, marca: {marca}, prezzo: €{prezzo:F2}, scadenza: {dataScadenza:dd/MM/yyyy}}}";
        }
    }
}
