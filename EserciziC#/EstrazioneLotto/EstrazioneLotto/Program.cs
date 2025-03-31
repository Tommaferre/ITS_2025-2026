// Estrazione dei numeri di una ruota del lotto

Random random  = new Random();

int e1, e2, e3, e4, e5;
e1 = random.Next(90) + 1;

do
{
    e2 = random.Next(90) + 1;
} while (e2 == e1);

do
{
    e3 = random.Next(90) + 1;
} while (e3 == e1 || e3 == e2);
do
{
    e4 = random.Next(90) + 1;
} while (e4 == e1 || e4 == e2 || e4 == e3);
do
{
    e5 = random.Next(90) + 1;
} while (e5 == e1 || e5 == e2 || e5 == e3 || e5 == e4);

Console.WriteLine($"{e1} {e2} {e3} {e4} {e5}");