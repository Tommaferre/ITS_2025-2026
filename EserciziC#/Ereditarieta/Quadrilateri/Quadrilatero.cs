﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quadrilateri
{
    internal class Quadrilatero
    {
        protected double lato1;
        protected double lato2;
        private double lato3;
        private double lato4;

        public Quadrilatero(double lato1, double lato2, double lato3, double lato4)
        {
            this.lato1 = lato1;
            this.lato2 = lato2;
            this.lato3 = lato3;
            this.lato4 = lato4;
        }
        //sintassi lambda
        public double Perimetro() => lato1 + lato2 + lato3 + lato4;

        public override string ToString()
        {
            return $"{{lato1: {lato1}, lato2: {lato2}, lato3: {lato3}, lato4: {lato4}, perimetro: {Perimetro()}}}";
        }
    }
}
