using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Matite
{
    internal class Matita
    {
        protected string marca;
        protected string modello;
        protected double lunghezza;

        public Matita(string marca, string modello)
        {
            this.marca = marca;
            this.modello = modello;
            this.lunghezza = 20.0; // Lunghezza di base 20 cm
        }

        public string GetMarca() => marca;
        public string GetModello() => modello;
        public double GetLunghezza() => lunghezza;

        public void Tempera()
        {
            if (lunghezza > 0.5)
            {
                lunghezza -= 0.5;
                Console.WriteLine($"Matita temperata! Nuova lunghezza: {lunghezza:F1} cm");
            }
            else
            {
                Console.WriteLine("La matita è troppo corta per essere temperata!");
            }
        }

        public override string ToString()
        {
            return $"{{marca: {marca}, modello: {modello}, lunghezza: {lunghezza:F1}cm}}";
        }
    }
}
