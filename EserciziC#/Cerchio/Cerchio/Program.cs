// 
Console.Write("Raggio: ");
double raggio = double.Parse(Console.ReadLine());
//calcoli
double diametro = raggio * 2;
double area = Math.PI * (raggio * raggio);
double circonferenza = 2*Math.PI*raggio;

//output default come in area piastrella
//Console.WriteLine("Diametro: " + diametro + " cm");      //stile Java
//Console.WriteLine("Area: {0} cm^2", area);               //segnaposto
//Console.WriteLine($"Circonferenza: {circonferenza} cm"); //interpolazione

//output
//stampa dettaglio
string msg = $"Diametro: {diametro}" +
    $"\nCirconferenza: {circonferenza}" +
    $"\nArea: {area}";
Console.WriteLine(msg);

//stampa lineare
string msg1 = $"Diametro: {diametro}" +
    $", Circonferenza: {circonferenza}" +
    $", Area: {area}";
Console.WriteLine(msg1);