package test;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.List;
import java.util.Scanner;

import controller.MagazzinoCtrl;
import model.Prodotto;
import view.ProdottiView;

public class ECommerceDemo {

	public static void main(String[] args) throws FileNotFoundException {
		
		
		Prodotto p1 = new Prodotto(1, "Maglia Rossa", "Abbigliamento", 15.54, 10);
		Prodotto p2 = new Prodotto(2, "Maglia Blu", "Abbigliamento", 11.54, 3);
		Prodotto p3 = new Prodotto(3, "Pantaloni Rossi", "Abbigliamento", 15.54, 15);
	
		MagazzinoCtrl magazzino = new MagazzinoCtrl("Magazzino di Firenze");
		
		magazzino.addProdotto(p1);
		magazzino.addProdotto(p2);
		magazzino.addProdotto(p3);
		
		List<Prodotto> prodotti =  magazzino.getProdotti();
		
		ProdottiView vista = new ProdottiView();
		
		File sorgente = new File("C:\\Users\\Tommaso.Ferrero\\Desktop\\prodotti.csv");
		
		
		File f = new File("prodotti.html");
		
		PrintWriter pw = new PrintWriter(f);
		
		Scanner scanner = new Scanner(sorgente);
		
		
		while (scanner.hasNextLine()) {
			String riga = scanner.nextLine();
			String[] pezziDiRiga = riga.split(",");
			
			int id = Integer.parseInt(pezziDiRiga[0]);
			String nome = pezziDiRiga[1];
			String categoria = pezziDiRiga[2];
			double prezzo = Double.parseDouble(pezziDiRiga[3]);
			int giacenza = Integer.parseInt(pezziDiRiga[4]);
			
			Prodotto p = new Prodotto(id, nome, categoria, prezzo, giacenza);
			magazzino.addProdotto(p);
			
		}
		
		
		
		for (Prodotto p : prodotti) {
			System.out.println(p);
			pw.println(vista.cardProdotto(p));
		}
		pw.close();
		System.out.println("File prodotto con successo!");
	}
	

}
