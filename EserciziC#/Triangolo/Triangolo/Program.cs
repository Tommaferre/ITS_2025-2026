//Dati i lati di un triangolo, calcolare perimetro, area e il tipo del triangolo 
//Equilatero, isoscele o scaleno
//Visualizzare il risultato

Console.Write("lato 1: ");
double lato1 = double.Parse(Console.ReadLine());
Console.Write("lato 2: ");
double lato2 = double.Parse(Console.ReadLine());
Console.Write("lato 3: ");
double lato3 = double.Parse(Console.ReadLine());

double perimetro = lato1 + lato2 + lato3;

//teorema dell'esistenza del triangolo (la somma di due lati deve essere maggiore
//della misura del terzo lato
if (lato1 + lato2 > lato3 && lato2 + lato3 > lato1 && lato3 + lato1 > lato2)
{
    //formula di Erone
    double sp = perimetro / 2; //semiperimetro
    double area = Math.Sqrt(sp * (sp - lato1) * (sp - lato2) * (sp - lato3));

    //operatori logici: && AND, || OR, ! NOT
    string tipo = "scaleno";
    if (lato1 == lato2 && lato1 == lato3)
        tipo = "equilatero";
    else if (lato1 == lato2 || lato1 == lato3 || lato2 == lato3)
        tipo = "isoscele";

    //outuput 
    //formato lineare

    string msg = $"Perimetro: {perimetro}, Area: {area}, tipo: {tipo}";

    Console.Write(msg);
}
else
    Console.WriteLine("Con i dati inseriti non è possibile costruire un triangolo");
