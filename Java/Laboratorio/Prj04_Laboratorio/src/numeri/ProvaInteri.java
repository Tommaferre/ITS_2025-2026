package numeri;

public class ProvaInteri {

	public static void main(String[] args) {

		final byte b = 1; //8 bit -128 127
		//b non potrà più cambiare è diventata una costante
		short s = 2; // 16 bit 
		int i = 3; //32 bit
		long lo = 4; //64 bit
		
		// è ammesso il casting da un tipo più piccolo ad uno più grande ma non viceversa	
		int somma = b+s+i+(int)lo;
		
		System.out.println(b);
		System.out.println(s);
		System.out.println(i);
		System.out.println(lo);
		System.out.println("Il valore di somma è: " + somma);
		
	}

}
