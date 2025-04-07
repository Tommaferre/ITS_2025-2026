package prove;

import java.util.Scanner;

public class ProvaCentralinoTelefonico {

	public static void main(String[] args) {
			
		giovanni();
		
		
	}
	private static void giovanni() {
		Scanner input = new Scanner(System.in);
		boolean gira = true;
		
		while (gira) {
			menu();
			String risposta = input.nextLine();
			
			switch (risposta) {
				case "1":
					//----
					System.out.println("Sono l'operatore Jimmy dimmi");
					break;
				case "2":
					//----
					System.out.println("Il tuo saldo è 3 euro");
					break;
				case "3":
					//----
					System.out.println("Ciao sono abdul");
					break;
				case "0":
						//----
					System.out.println("Uscita");
					gira = false;
					break;
				
			}
		}
	}
	private static void menu() {
			System.out.println("1) Parlare con operatore");
			System.out.println("2) Conoscere il tuo saldo");
			System.out.println("3) abdul");
	}
	
}
