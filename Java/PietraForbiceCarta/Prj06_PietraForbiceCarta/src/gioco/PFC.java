package gioco;

import java.util.Random;
import java.util.Scanner;

public class PFC {

	public static void main(String[] args) {
		String[] scelte = {"Pietra", "Forbici", "Carta"};
		
		String sceltaUmano = sceltaUmano(scelte);
		String sceltaMacchina = sceltaMacchina(scelte);
		System.out.println("Scelta umano "+ sceltaUmano);
		System.out.println("Scelta macchina "+ sceltaMacchina);
		if (sceltaMacchina.equals("Pietra") && sceltaUmano.equals("Carta")) {
            System.out.println("L'umano ha vinto");
        } else if (sceltaMacchina.equals("Pietra") && sceltaUmano.equals("Forbice")) {
            System.out.println("La macchina vince");
        } else if (sceltaMacchina.equals(sceltaUmano)) {
            System.out.println("Pareggio");
        } else if (sceltaMacchina.equals("Forbice") && sceltaUmano.equals("Pietra")) {
            System.out.println("Vince Umano");
        } else if (sceltaMacchina.equals("Forbice") && sceltaUmano.equals("Carta")) {
            System.out.println("Vince Macchina");
        } else if (sceltaMacchina.equals("Carta") && sceltaUmano.equals("Pietra")) {
            System.out.println("Vince Macchina");
        } else if (sceltaMacchina.equals("Carta") && sceltaUmano.equals("Forbice")) {
            System.out.println("Vince Umano");
        }
	}
	private static String sceltaMacchina(String[] scelte) {
		Random rand = new Random();
		int casuale = rand.nextInt(0, scelte.length);
		return scelte[casuale];
	}
	private static String sceltaUmano (String[] scelte) {
		System.out.println("Scegli tra: ");
		for(String scelta : scelte) {
			System.out.println(scelta);
		}
		Scanner input = new Scanner(System.in);
		String risposta = input.nextLine();
		return risposta;
	}

}
