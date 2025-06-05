using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quadrilateri
{
    internal class Rettangolo:Quadrilatero
    {
        public Rettangolo(double Base, double Altezza):base(Base,Altezza,Base,Altezza) { }

        //metodi
        public double Area() => base.lato1 * base.lato2;

        public double Diagonale() => Math.Sqrt(Math.Pow(base.lato1, 2)+Math.Pow(base.lato2, 2));

        public override string ToString()
        {
            return $"{{base:{lato1}, altezza. {lato2}, perimetro: {Perimetro()}, area: {Area()}, diagonale: {Diagonale()}}}";
        }
    }
}
