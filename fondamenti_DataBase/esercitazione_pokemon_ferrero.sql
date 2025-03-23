-- 1. Recuperare tutti i Pokémon con il tipo principale "Fire"
SELECT * 
FROM pokemon 
WHERE `Type 1` = 'Fire';
-- 2. Selezionare il nome e il tipo principale dei Pokémon con una velocità superiore a 100
SELECT Name, `Type 1`
FROM pokemon
WHERE Speed > 100;
-- 3. Contare quanti Pokémon sono considerati "Legendary"
SELECT COUNT(*) AS legendary_count
FROM pokemon 
WHERE Legendary='true';
-- 4. Recuperare i Pokémon con attacco superiore a 120 e difesa superiore a 100
SELECT * FROM pokemon
WHERE Attack > 120 AND Defense > 100;
-- 5. Ottenere tutti i Pokémon della prima generazione
SELECT * FROM pokemon
WHERE Generation = 1;
-- 6. Mostrare i nomi e il totale di statistiche dei Pokémon ordinati per valore totale in ordine decrescente
SELECT Name, Total
FROM pokemon
ORDER BY Total DESC;
-- 7. Mostrare i Pokémon che hanno entrambi i tipi "Grass" e "Poison"
SELECT * FROM pokemon
WHERE `Type 1` IN ('Grass', 'Poison') AND `Type 2` IN ('Grass', 'Poison');
-- 8. Recuperare i Pokémon con punti salute (HP) inferiori a 50, ordinati per HP in ordine crescente
SELECT * FROM pokemon
WHERE HP < 50
ORDER BY HP ASC;
-- 9. Contare i Pokémon per ogni generazione
SELECT Generation, COUNT(*) AS count
FROM pokemon
GROUP BY Generation;
-- 10. Ottenere tutti i Pokémon di tipo principale "Water" con una velocità superiore a 80
SELECT * FROM pokemon
WHERE `Type 1` = 'Water' AND Speed > 80;
-- 1. Ottenere i Pokémon con il valore totale più alto per ogni generazione
SELECT Generation, max(total) AS Max_Total
FROM pokemon
GROUP BY Generation;
-- 2. Calcolare la media di attacco per ogni tipo principale
SELECT `Type 1`, AVG(Attack) AS AvgAttack
FROM pokemon
GROUP BY `Type 1` ORDER BY AvgAttack;
-- 3. Mostrare i Pokémon con velocità superiore alla media della tabella
SELECT Name, speed
FROM pokemon
WHERE speed > (SELECT Avg(speed) 
FROM pokemon);
-- 4. Trovare i Pokémon con il valore totale pari o superiore a 500, ordinati per tipo principale e poi per nome
SELECT Name, `Type 1`,`Type 2`, Total
FROM pokemon
WHERE Total >= 500
ORDER BY `Type 1`, Name;
-- 5. Visualizzare i tre Pokémon con il valore di difesa più alto
SELECT Name, defense
FROM pokemon
-- WHERE Defense = (SELECT max(Defense) FROM pokemon)
ORDER BY Defense DESC 
LIMIT 3;
-- 6. Recuperare il nome e il tipo principale dei Pokémon che hanno un attacco maggiore della loro difesa
SELECT Name, `Type 1`, Attack, Defense
FROM pokemon
WHERE Attack > Defense;
-- 7. Contare quanti Pokémon ci sono per ogni combinazione di tipo principale e secondario
SELECT `Type 1`, `Type 2`, count(*) AS Conta
FROM pokemon
GROUP BY `Type 1`, `Type 2`;
-- 8. Ottenere i Pokémon di tipo "Dragon" che appartengono alla terza generazione
SELECT *
FROM pokemon
WHERE (`Type 1` = 'Dragon' or `Type 2` = 'Dragon') AND Generation = 3;
-- 9. Visualizzare i Pokémon non leggendari che hanno una velocità massima tra 80 e 100
SELECT *
FROM pokemon
WHERE `Speed` BETWEEN 80 AND 100
and `Legendary` = 'false';
-- 10. Calcolare il valore medio di HP, Attacco e Difesa per Pokémon leggendari e non leggendari
SELECT `Legendary`, avg(hp) AS HpM, avg(Attack) AS AttM, avg(Defense) AS Def
FROM pokemon
GROUP BY `Legendary`;
-- 1. Creare una tabella virtuale con tutti i possibili tipi distinti (combinazioni di `Type 1` e `Type 2`) e il numero di Pokémon per ciascuna combinazione
SELECT DISTINCT `Type 1`, `Type 2`, count(*)
FROM pokemon
GROUP BY `Type 1`,`Type 2`
ORDER BY `Type 1`,`Type 2`;
-- 2. Trovare i Pokémon leggendari con il massimo valore di ogni statistica (HP, Attack, Defense, Sp. Atk, Sp. Def, Speed)
SELECT  `Type 1`, `Type 2`,
		max(HP), 
		max(Attack), 
        max(Defense), 
        max(`Sp. Atk`), 
        max(`Sp. Def`),
		max(Speed)
FROM pokemon
WHERE `Legendary` = 'True'
GROUP BY `Type 1`, `Type 2`;
-- 3. Elencare tutti i Pokémon con il valore totale massimo per ogni combinazione di tipo principale (`Type 1`) e secondario (`Type 2`)
SELECT Name, `Type 1`, `Type 2`, Total
FROM pokemon
WHERE Total =(
	SELECT MAX(Total)
    FROM pokemon
)
ORDER BY `Type 1`, `Type 2`;
-- 4. Trovare i 5 Pokémon con il miglior rapporto Attacco/Difesa
SELECT Attack/Defense AS Rapporto, Name, Attack, Defense
FROM pokemon
ORDER BY Rapporto Desc
LIMIT 5;
-- 5. Creare un elenco di Pokémon raggruppati per generazione, calcolando il totale complessivo delle statistiche per ciascuna generazione
SELECT sum(Total) AS Total_Generation_sum, Generation
FROM pokemon
GROUP BY Generation
ORDER BY Total_Generation_sum;
-- 6. Elencare tutti i Pokémon con una velocità maggiore della media per il loro tipo principale (`Type 1`)
SELECT Name, `Type 1`, speed
FROM pokemon
WHERE speed > (SELECT Avg(speed) 
FROM pokemon
);
-- 7. Contare il numero di Pokémon leggendari e non leggendari per ciascun tipo principale
SELECT COUNT(*) AS Conteggio, `Type 1`, Legendary
FROM pokemon
GROUP BY `Type 1`, `Legendary`
ORDER BY `Type 1`, `Legendary`;
-- 8. Creare una classifica per tipo principale (`Type 1`) basata sulla media di attacco dei Pokémon di quel tipo
SELECT `Type 1`, avg(Attack) AS Media_Attacco
FROM pokemon
GROUP BY `Type 1`
ORDER BY Media_Attacco DESC;
-- 9. Trovare i Pokémon con il minor valore totale tra quelli della prima generazione con entrambi i tipi definiti (`Type 1` e `Type 2` non NULL)
SELECT  Name, `Type 1`, `Type 2`, Total
FROM pokemon
WHERE Generation = 1 AND `Type 2` !='' AND Total =(SELECT min(Total)    #!= dovrebbe essere in realtà not null ma non funziona
			FROM pokemon 
			WHERE Generation = 1)
ORDER BY `Type 1`, `Type 2`;
-- 10. Creare un elenco con il numero di Pokémon per ciascuna combinazione di generazione e stato leggendario, ordinato per generazione e numero di Pokémon
SELECT Generation, Legendary, COUNT(*) AS Count
FROM pokemon
GROUP BY Generation, Legendary
ORDER BY Generation, Count DESC;
