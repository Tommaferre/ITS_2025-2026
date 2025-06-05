using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Veicoli
{
    internal class Auto: Veicolo
    {
        private int numeroPorte;
        private string tipologiaCambio;

        public Auto(string marca, string modello, int cilindrata, string colore, string tipoCarburante, int numeroPorte, string tipologiaCambio)
            : base(marca, modello, cilindrata, colore, tipoCarburante)
        {
            this.numeroPorte = numeroPorte;
            this.tipologiaCambio = tipologiaCambio;
        }

        public int GetNumeroPorte() => numeroPorte;
        public string GetTipologiaCambio() => tipologiaCambio;

        public override string ToString()
        {
            return $"{{marca: {marca}, modello: {modello}, cilindrata: {cilindrata}cc, colore: {colore}, carburante: {GetTipoCarburante()}, porte: {numeroPorte}, cambio: {tipologiaCambio}}}";
        }
    }
}
