using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Veicoli
{
    internal class Veicolo
    {
        protected string marca { get; set; }
        protected string modello { get; set; }
        protected int cilindrata { get; set; }
        protected string colore { get; set; }
        private string tipoCarburante { get; set; }

        public Veicolo(string marca, string modello, int cilindrata, string colore, string tipoCarburante)
        {
            this.marca = marca;
            this.modello = modello;
            this.cilindrata = cilindrata;
            this.colore = colore;
            this.tipoCarburante = tipoCarburante;
        }

        public string GetTipoCarburante() => tipoCarburante;

        public override string ToString()
        {
            return $"{{marca: {marca}, modello: {modello}, cilindrata: {cilindrata}cc, colore: {colore}, carburante: {tipoCarburante}}}";
        }
    }
}
