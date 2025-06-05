using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Veicoli
{
    internal class Scooter:Veicolo
    {
        private int numeroRuote;

        public Scooter(string marca, string modello, int cilindrata, string colore, string tipoCarburante, int numeroRuote)
            : base(marca, modello, cilindrata, colore, tipoCarburante)
        {
            this.numeroRuote = numeroRuote;
        }

        public int GetNumeroRuote() => numeroRuote;

        public override string ToString()
        {
            return $"{{marca: {marca}, modello: {modello}, cilindrata: {cilindrata}cc, colore: {colore}, carburante: {GetTipoCarburante()}, ruote: {numeroRuote}}}";
        }
    }
}
