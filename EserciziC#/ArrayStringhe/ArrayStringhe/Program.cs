// creare un array di nomi di persone
// Visualizzare tutti i nomi


Console.WriteLine("Array di nomi di persona!");

//definizione dell'array
string[] nomi = new string[]
        {
            "Marco", "Luca", "Giulia", "Francesca", "Alessandro", "Valentina", "Matteo", "Elena", "Davide", "Sara",
            "Andrea", "Giorgia", "Stefano", "Martina", "Simone", "Chiara", "Riccardo", "Alice", "Federico", "Laura",
            "Emanuele", "Beatrice", "Antonio", "Silvia", "Gabriele", "Camilla", "Roberto", "Veronica", "Daniele", "Claudia",
            "Giovanni", "Ilaria", "Cristian", "Miriam", "Salvatore", "Serena", "Fabio", "Monica", "Pietro", "Elisabetta",
            "Massimo", "Nicole", "Gianluca", "Daniela", "Paolo", "Aurora", "Franco", "Barbara", "Vincenzo", "Roberta"
        };
/*
 Array riempito con valori determinati dalla seguente interrogazione a ChatGpt
 
 1."ho bisogno di un array di stringhe in c# con nomi di persona"

 2."me ne servono almeno 50"

 */


// Stampa tutti i nomi
var k = 0; //variabile contatore
foreach (var nome in nomi)
{
    Console.WriteLine($"{k++}: {nome.ToUpper()}");
}