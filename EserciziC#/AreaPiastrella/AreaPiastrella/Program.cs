// 
Console.Write("Inserisci il lato della piastrella in centimetri: ");
double lato1 = double.Parse(Console.ReadLine());

double perimetro = lato1 * 4;
double area = lato1 * lato1;
double diagonale = lato1 * Math.Sqrt(2);

Console.WriteLine("Perimetro: "+perimetro+" cm");//stile Java
Console.WriteLine("Area: {0} cm^2", area);       //segnaposto
Console.WriteLine($"Diagonale: {diagonale} cm"); //interpolazione