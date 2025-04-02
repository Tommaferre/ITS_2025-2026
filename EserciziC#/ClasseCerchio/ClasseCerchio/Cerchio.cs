using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClasseCerchio
{
    internal class Cerchio
    {
        //attributo sempre privati 
        private double raggio;

        //costruttore di default
        //public Cerchio(){}
        //Costruttore
        public Cerchio(double raggio) {
            //attributi privati e strutture di controllo
            SetRaggio(raggio);
        }

        //metodi
        public void SetRaggio(double raggio)
        {
            if (raggio <= 0)
                throw new Exception("Errore! Raggio non valido");

            this.raggio = raggio;
        }
        public double GetRaggio() 
        {
            return raggio;
        }
        public double Diametro()
        {
            return raggio*2;
        }
        public double Circonferenza()
        {
            return raggio * 2 *Math.PI;
        }
        public double Area()
        {
            return Math.PI * (raggio*raggio) ;
        }
    }
}
