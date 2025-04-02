using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClasseQuadrato1
{
    internal class Quadrato1
    {
        //attributi
        public double lato;

        //costruttori

        //metodi
        public double Perimetro()
        {
            return lato*4;
        }

        public double Area()
        {
            return lato * lato;
        }
        public double Diagonale()
        {
            return lato*Math.Sqrt(2);
        }
    }
}
