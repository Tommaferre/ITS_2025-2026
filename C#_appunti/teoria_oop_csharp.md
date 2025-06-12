# Elementi di Teoria OOP utilizzati nell'Esercizio Atleta

## 1. **CLASSI**

```csharp
public class Atleta : IAtletaUniversale
```

- Una **classe** è un modello (template) che definisce le caratteristiche e i comportamenti di un oggetto
- Contiene **proprietà** (dati) e **metodi** (comportamenti)
- In questo caso, la classe `Atleta` rappresenta il "tipo" di oggetto che vogliamo creare

## 2. **PROPRIETÀ (Properties)**

```csharp
public string Nome { get; set; }
public string Cognome { get; set; }
```

- Le **proprietà** sono i dati che caratterizzano un oggetto
- `get` permette di leggere il valore, `set` permette di modificarlo
- Sono l'implementazione moderna degli attributi di una classe in C#

## 3. **COSTRUTTORE**

```csharp
public Atleta(string nome, string cognome, int numeroPettorina, string disciplina)
```

- Il **costruttore** è un metodo speciale che viene chiamato quando si crea un'istanza della classe
- Ha lo stesso nome della classe e non ha tipo di ritorno
- Serve per inizializzare l'oggetto con valori specifici

## 4. **INTERFACCE**

```csharp
public interface IAtleta
{
    string Corro();
    string Salto();
}
```

- Un'**interfaccia** è un contratto che definisce quali metodi una classe deve implementare
- Contiene solo le "firme" dei metodi (nome, parametri, tipo di ritorno) ma non l'implementazione
- Per convenzione in C# iniziano con la lettera "I"
- Definiscono "cosa" può fare un oggetto, non "come" lo fa

## 5. **EREDITARIETÀ DELLE INTERFACCE**

```csharp
public interface IAtletaUniversale : IAtleta, INuotatore, ITennista
```

- Un'interfaccia può **ereditare** da altre interfacce
- `IAtletaUniversale` eredita tutti i metodi delle tre interfacce padre
- Chi implementa `IAtletaUniversale` deve implementare tutti i metodi di tutte le interfacce

## 6. **IMPLEMENTAZIONE DI INTERFACCE**

```csharp
public class Atleta : IAtletaUniversale
```

- Una classe **implementa** un'interfaccia usando l'operatore `:`
- La classe si impegna a fornire il codice concreto per tutti i metodi dell'interfaccia
- È un "contratto": la classe promette di avere quei comportamenti

## 7. **OVERRIDE DI METODI**

```csharp
public override string ToString()
```

- **Override** significa sovrascrivere un metodo della classe padre
- `ToString()` è un metodo virtuale della classe `Object` (classe base di tutte le classi in C#)
- Permette di personalizzare come l'oggetto viene convertito in stringa

## 8. **ISTANZIAZIONE**

```csharp
Atleta atleta = new Atleta("Mario", "Rossi", 123, "Atletica");
```

- **Istanziare** significa creare un oggetto concreto da una classe
- `new` alloca memoria e chiama il costruttore
- `atleta` è l'**istanza** (oggetto concreto) della classe `Atleta`

## 9. **POLIMORFISMO**

Anche se non esplicitamente mostrato, il codice supporta il polimorfismo:

```csharp
IAtleta atleta1 = new Atleta(...);  // Possibile grazie al polimorfismo
```

- Un oggetto può essere trattato come istanza di qualsiasi interfaccia che implementa

## 10. **INCAPSULAMENTO**

Le proprietà con `get; set;` rappresentano l'**incapsulamento**: i dati sono protetti e accessibili solo tramite metodi controllati.

## 11. **ASTRAZIONE**

Le interfacce rappresentano l'**astrazione**: definiscono comportamenti senza specificare come vengono implementati, permettendo a diverse classi di implementarli in modi diversi.

---

## I Quattro Pilastri della OOP

Questi sono i pilastri della **Programmazione Orientata agli Oggetti (OOP)** utilizzati nel codice:

1. **Incapsulamento** - Protezione e controllo dell'accesso ai dati
2. **Ereditarietà** - Riuso del codice attraverso relazioni padre-figlio
3. **Polimorfismo** - Capacità di un oggetto di assumere più forme
4. **Astrazione** - Nascondere i dettagli implementativi e mostrare solo l'interfaccia essenziale