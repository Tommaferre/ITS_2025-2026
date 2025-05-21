class Contatto
{
    public string Nome { get; set; }
    public string Cognome { get; set; }
    public string Via { get; set; }
    public string Cap { get; set; }
    public string Citta { get; set; }
    public string Provincia { get; set; }
    public string Telefono { get; set; }
    public string Email { get; set; }

    // Costruttore completo
    public Contatto(string nome, string cognome, string via, string cap, string citta, string provincia, string telefono, string email)
    {
        Nome = nome;
        Cognome = cognome;
        Via = via;
        Cap = cap;
        Citta = citta;
        Provincia = provincia;
        Telefono = telefono;
        Email = email;
    }

    // Costruttore parziale (solo nome e cognome)
    public Contatto(string nome, string cognome)
    {
        Nome = nome;
        Cognome = cognome;
        Via = "N/D";
        Cap = "00000";
        Citta = "Sconosciuta";
        Provincia = "??";
        Telefono = "N/D";
        Email = "N/D";
    }

    // Metodo per restituire la scheda completa
    public string SchedaCompleta()
    {
        return $"{Nome} {Cognome} - Via {Via}, {Cap} {Citta} ({Provincia}) Tel. {Telefono} - email: {Email}";
    }
}