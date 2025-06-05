using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Matite
{
    internal class MatitaConGommino: Matita
    {
        private int cancellatureRimanenti;

        public MatitaConGommino(string marca, string modello)
            : base(marca, modello)
        {
            this.cancellatureRimanenti = 10; // Partono con 10 cancellature
        }

        public int GetCancellatureRimanenti() => cancellatureRimanenti;

        public void Cancella()
        {
            if (cancellatureRimanenti > 0)
            {
                cancellatureRimanenti--;
                Console.WriteLine($"Cancellato! Cancellature rimanenti: {cancellatureRimanenti}");
            }
            else
            {
                Console.WriteLine("Il gommino è finito! Non puoi più cancellare.");
            }
        }

        public override string ToString()
        {
            return $"{{marca: {marca}, modello: {modello}, lunghezza: {lunghezza:F1}cm, cancellature rimanenti: {cancellatureRimanenti}}}";
        }
    }
}
