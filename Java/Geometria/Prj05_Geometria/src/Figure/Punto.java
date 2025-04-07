package Figure;

public class Punto {
		
	public int x,y;
						//parametri formali              argomenti attuali
	public Punto(int x, int y) { // new Punto (3, 2);
			this.x = x; //puntatore autoreferenziante
			this.y = y;	
	}
	
	public String toString() {
		return "(" + this.x + ", " + this.y + ")"; // (3, 2) rappresentazione a stringa di un punto
	}
}
