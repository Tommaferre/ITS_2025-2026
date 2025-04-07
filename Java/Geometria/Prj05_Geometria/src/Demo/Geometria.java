package Demo;

import Figure.Punto;
import Figure.Rettangolo;
import Figure.Segmento;
import Figure.Triangolo;
public class Geometria {

	public static void main(String[] args) {
	
		Punto a = new Punto(3,2);
		Punto b = new Punto(7,2); 
		Punto c = new Punto(3,5); 
		
		Segmento ab = new Segmento(a, b);
		Segmento ac = new Segmento(a, c);
		Triangolo t = new Triangolo(a,b,c);
		Rettangolo r  = new Rettangolo(ab,ac);
		System.out.println(r);
		
		
	}

}
