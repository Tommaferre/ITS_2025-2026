using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quadrilateri
{
    internal class Quadrato : Rettangolo
    {
        public Quadrato(double lato) : base(lato, lato)
        {
        }
        public override string ToString()
        {
            return $"{{lato:{lato1}, perimetro: {Perimetro()}, area: {Area()}, diagonale: {Diagonale()}}}";
        }
    }
}
