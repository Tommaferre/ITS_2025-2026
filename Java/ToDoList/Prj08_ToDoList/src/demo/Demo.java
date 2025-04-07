package demo;

import java.util.List;
import java.util.Scanner;

import controller.ToDoCtrl;
import model.ToDo;

public class Demo {

	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);
		ToDoCtrl ctrl = new ToDoCtrl();
		boolean gira = true;
		
		while (gira) {
			
			System.out.println("Scegli azione");
			System.out.println("1) add ToDo");
			System.out.println("2) lista ToDo");
			System.out.println("0) esci da ToDo");
			String risposta = input.nextLine();
			
			if (risposta.equals("0")) {
				gira = false;
			}	else if (risposta.equals("1")) {
				aggiungiCosa(input, ctrl);

			}	else if (risposta.equals("2")) {
				stampaTutto(ctrl);

			}	else {
				System.out.println("Scelta non disponibile");
			}
		}
		
		System.out.println("Programma terminato.");
		System.out.println("Nechainikov Prod.");
		
		
	}

	private static void stampaTutto(ToDoCtrl ctrl) {
		//logica per stampare tutti i todo
		List<ToDo> todos = ctrl.getToDos();
		
		for (ToDo toDo : todos) {
			System.out.println(toDo);
		}
	}

	private static void aggiungiCosa(Scanner input, ToDoCtrl ctrl) {
		//logica per aggiungere nuovi todo
		System.out.println("Cosa devi fare?");
		String cosaDaFare = input.nextLine();
		ctrl.addToDo(cosaDaFare);
	}

}
