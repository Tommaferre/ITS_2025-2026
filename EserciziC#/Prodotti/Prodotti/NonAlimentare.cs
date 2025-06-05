using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Prodotti
{
    internal class NonAlimentare: Prodotto
    {
        private string materialePrincipale;

        public NonAlimentare(string nome, string marca, double prezzo, string materialePrincipale)
            : base(nome, marca, prezzo)
        {
            this.materialePrincipale = materialePrincipale;
        }

        public string GetMaterialePrincipale() => materialePrincipale;

        public override string ToString()
        {
            return $"{{nome: {nome}, marca: {marca}, prezzo: €{prezzo:F2}, materiale: {materialePrincipale}}}";
        }
    }
}
