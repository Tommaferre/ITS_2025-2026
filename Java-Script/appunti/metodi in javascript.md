# Guida Rapida ai Metodi degli Array in JavaScript 🚀

## Informazioni di Base

### length

Restituisce il numero di elementi nell'array.

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length; // size = 4

// Uso pratico: aggiungere un elemento alla fine
fruits[fruits.length] = "Kiwi"; // Equivale a push("Kiwi")
```

## Accesso agli Elementi

### at()

Restituisce l'elemento alla posizione specificata, supporta anche indici negativi (dalla fine).

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);    // "Apple" (terzo elemento, indice 2)
let lastFruit = fruits.at(-1); // "Mango" (ultimo elemento)

// Equivalente con la notazione standard (ma senza indici negativi):
fruit = fruits[2]; // "Apple"
```

> **Nota**: `at()` è stato introdotto in ES2022 e risolve il problema dell'accesso con indici negativi, non possibile con la notazione `[]`.

## Trasformazione in Stringhe

### toString()

Converte l'array in una stringa con elementi separati da virgole.

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let result = fruits.toString(); // "Banana,Orange,Apple,Mango"
```

### join()

Come `toString()`, ma permette di specificare il separatore.

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let result = fruits.join(" * "); // "Banana * Orange * Apple * Mango"
let commaResult = fruits.join(","); // Come toString(): "Banana,Orange,Apple,Mango"
let spaceResult = fruits.join(" "); // "Banana Orange Apple Mango"
```

## Aggiungere e Rimuovere Elementi

### push()

Aggiunge uno o più elementi alla fine dell'array e restituisce la nuova lunghezza.

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let newLength = fruits.push("Kiwi"); // newLength = 5, ora fruits contiene "Kiwi" alla fine
fruits.push("Lemon", "Pear"); // Aggiunge più elementi contemporaneamente
```

### pop()

Rimuove e restituisce l'ultimo elemento dell'array.

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let removedFruit = fruits.pop(); // removedFruit = "Mango", fruits ora è ["Banana", "Orange", "Apple"]
```

### unshift()

Aggiunge elementi all'inizio dell'array e restituisce la nuova lunghezza.

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let newLength = fruits.unshift("Lemon"); // newLength = 5, fruits ora inizia con "Lemon"
fruits.unshift("Strawberry", "Blueberry"); // Aggiunge più elementi all'inizio
```

### shift()

Rimuove e restituisce il primo elemento dell'array.

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let removedFruit = fruits.shift(); // removedFruit = "Banana", fruits ora è ["Orange", "Apple", "Mango"]
```

> **Ricorda**: `push`/`pop` operano alla fine dell'array, mentre `unshift`/`shift` operano all'inizio.

## Modificare Arrays

### splice()

Modifica l'array originale aggiungendo/rimuovendo elementi da qualsiasi posizione.

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Inserimento: aggiunge elementi senza rimuoverne nessuno
fruits.splice(2, 0, "Lemon", "Kiwi");
// Risultato: ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]
// 2 = posizione di inserimento, 0 = elementi da rimuovere

// Sostituzione: rimuove e inserisce contemporaneamente
fruits.splice(2, 2, "Pear", "Grape");
// Rimuove 2 elementi dalla posizione 2 ("Lemon", "Kiwi") e inserisce "Pear", "Grape" al loro posto

// Rimozione: rimuove elementi senza aggiungerne di nuovi
let removed = fruits.splice(1, 1); // Rimuove 1 elemento dalla posizione 1
// removed = ["Orange"], fruits è ora ["Banana", "Pear", "Grape", "Apple", "Mango"]
```

### toSpliced() (ES2023)

Come `splice()` ma crea un nuovo array invece di modificare l'originale.

```javascript
const months = ["Jan", "Feb", "Mar", "Apr"];
const newMonths = months.toSpliced(0, 1); // Rimuove il primo elemento
// months rimane ["Jan", "Feb", "Mar", "Apr"]
// newMonths diventa ["Feb", "Mar", "Apr"]
```

## Unire Arrays

### concat()

Crea un nuovo array unendo arrays esistenti senza modificarli.

```javascript
const girls = ["Cecilie", "Lone"];
const boys = ["Emil", "Tobias", "Linus"];
const children = girls.concat(boys);
// children = ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]

// Concatenare più array
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const allChildren = arr1.concat(arr2, arr3);

// Concatenare array e valori
const names = ["Emil", "Tobias", "Linus"];
const allNames = names.concat("Peter"); // Aggiunge un valore singolo
// allNames = ["Emil", "Tobias", "Linus", "Peter"]
```

## Copiare Parti di un Array

### slice()

Estrae una porzione dell'array in un nuovo array senza modificare l'originale.

```javascript
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// Da un indice fino alla fine
const citrus = fruits.slice(1); // Da indice 1 alla fine
// citrus = ["Orange", "Lemon", "Apple", "Mango"]

// Da un indice a un altro (fine esclusa)
const favorites = fruits.slice(1, 3); // Da indice 1 fino a 3 (escluso)
// favorites = ["Orange", "Lemon"]
```

### copyWithin()

Copia parte di un array in un'altra posizione dello stesso array, sovrascrivendo i valori esistenti.

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

// Copia gli elementi da indice 0 alla posizione 2
fruits.copyWithin(2, 0);
// Risultato: ["Banana", "Orange", "Banana", "Orange", "Apple"]

// Copia gli elementi da indice 0 a 2 (escluso) nella posizione 2
fruits.copyWithin(2, 0, 2);
// Risultato: ["Banana", "Orange", "Banana", "Orange", "Kiwi"]
```

## Appiattire Arrays

### flat()

Crea un nuovo array appiattendo un array multidimensionale fino a una profondità specificata.

```javascript
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatArray = nestedArray.flat();
// flatArray = [1, 2, 3, 4, 5, 6]

// Con array più nidificati, puoi specificare la profondità
const deepArray = [1, [2, [3, [4, 5]]]];
const flattenedArray = deepArray.flat(2); // profondità 2
// flattenedArray = [1, 2, 3, [4, 5]]
```

### flatMap()

Combina `map()` e `flat()` in un'unica operazione, applicando una funzione a ogni elemento e poi appiattendo il risultato.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const doubledAndOriginal = numbers.flatMap(x => [x, x * 2]);
// doubledAndOriginal = [1, 2, 2, 4, 3, 6, 4, 8, 5, 10, 6, 12]
// Per ogni numero, crea un array [numero, numero*2], poi appiattisce il risultato
```

## Suggerimenti per l'Apprendimento

1. Ricorda che alcuni metodi (**modificatori**) cambiano l'array originale:
   - `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `copyWithin()`

2. Altri metodi (**non modificatori**) creano un nuovo array:
   - `concat()`, `slice()`, `toSpliced()`, `flat()`, `flatMap()`

3. Per convertire array in stringhe:
   - `toString()` e `join()` sono simili, ma `join()` permette di personalizzare il separatore

4. Per accedere agli elementi:
   - Usa `array[index]` per indici positivi
   - Usa `array.at(index)` quando hai bisogno di indici negativi
