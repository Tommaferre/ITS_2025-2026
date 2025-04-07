package gioco;

public class Dado {

	int facce = 6;
	int valoreFacciaSuperiore = 1;
	void lanciaDado() { //camelCase() - methods()
		
		valoreFacciaSuperiore = (int)(Math.random()*facce)+1; //1.0<=6
		
	}
	
}
