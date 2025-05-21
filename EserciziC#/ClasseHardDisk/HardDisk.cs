class HardDisk
{
    public string Marca { get; set; }
    public int VelocitaRPM { get; set; }         // Rotazioni per minuto
    public double TempoAccessoMs { get; set; }   // Millisecondi
    public int CapacitaGB { get; set; }          // Gigabyte

    // Costruttore
    public HardDisk(string marca, int velocita, double tempoAccesso, int capacita)
    {
        Marca = marca;
        VelocitaRPM = velocita;
        TempoAccessoMs = tempoAccesso;
        CapacitaGB = capacita;
    }

    // Calcolo del punteggio totale
    public double CalcolaPunteggio()
    {
        return VelocitaRPM - (TempoAccessoMs * 200) + (CapacitaGB * 500);
    }

    // Stampa info
    public void Stampa()
    {
        Console.WriteLine("-------- HARD DISK --------");
        Console.WriteLine($"Marca: {Marca}");
        Console.WriteLine($"Velocità: {VelocitaRPM} RPM");
        Console.WriteLine($"Tempo di accesso: {TempoAccessoMs} ms");
        Console.WriteLine($"Capacità: {CapacitaGB} GB");
        Console.WriteLine($"Punteggio totale: {CalcolaPunteggio()}\n");
    }
}