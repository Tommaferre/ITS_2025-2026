package gioco;

public class GiocoDadiUguali {

	public static void main(String[] args) {
		
		Dado dado1 = new Dado();
		Dado dado2 = new Dado();
		
		final int NUM_LANCI = 500_000_000; //snake_case
		int vittorie = 0;

		long start = System.currentTimeMillis();
		
		//faccio un ciclo per ripetere le istruzioni per NUM_LANCI
		for(int i=0; i<NUM_LANCI; i++) {
			
			dado1.lanciaDado();
			dado2.lanciaDado();
			
			//System.out.println("Il valore di dao 1 " + dado1.valoreFacciaSuperiore);
			//System.out.println("Il valore di dao 2 " + dado2.valoreFacciaSuperiore);
			
			if (dado1.valoreFacciaSuperiore == dado2.valoreFacciaSuperiore) {
				//System.out.println("Hai vinto!");
				vittorie++;
			} else {
				//System.out.println("Non hai vinto");
			}
		} //chiusura for
		long stop = System.currentTimeMillis();

		long tempoImpiegato = stop - start;
		
		double percentuale = (double) vittorie/NUM_LANCI * 100;  //calcolo percentuale di vittorie su num_lanci
		
		System.out.println("Percentuale vittorie " + percentuale + "%" );
		System.out.println("Numero di partite " + NUM_LANCI);
		System.out.println("Hai vinto "+vittorie+" volte");
		System.out.println("Tempo impiegato "+ tempoImpiegato +"ms");
	}

}
