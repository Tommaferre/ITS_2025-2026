-- 1. Inserire un singolo record
-- Inserire un prodotto nella tabella Prodotti:
insert into prodotti
values ('P011', 'Cravatta', 'gialla', 'Unica', 'MZ01');
-- 2. Inserire più record in una sola istruzione
-- Inserire più fornitori nella tabella Fornitori: `
insert into fornitori
values ('F011', 'gigino', 5, 'Roma'),
		('F012', 'Pino', 8, 'Napoli'),
		('F013', 'Pina', 5, 'Roma');
-- 3. Inserire un record parziale
-- Inserire un cliente con alcuni campi lasciati nulli:
INSERT INTO clienti (cod_cliente, nome) 
VALUES ('C011', 'Paolo Ferri');
-- 4. Inserire un record calcolato da un'altra tabella
-- Copiare un prodotto dalla tabella Prodotti alla tabella ProdottiArchivio:
INSERT INTO prodottiArchivio (codp, nome, colore, taglia)
SELECT codp, nome, colore, taglia 
FROM prodotti 
WHERE codp = 'P005';
-- 5. Inserire una riga con una sottoquery
-- Inserire un ordine per il cliente più recente:
INSERT INTO ordini (codOrdine, cod_cliente, data_ordine)
SELECT 'O011', cod_cliente, current_date
from clienti 
ORDER BY data_registrazione DESC 
LIMIT 1;
-- 6. Inserire un record con valori default
-- Inserire un fornitore con i valori predefiniti per alcuni campi:
INSERT INTO fornitori (codf, nome)
VALUES ('F013', 'Standard Supply');
-- 7. Inserire dati con valori calcolati
-- Inserire un record nella tabella Vendite calcolando il totale:
INSERT INTO vendite (codVendita, codprodotto, quantita, prezzo_unitario, totale)
VALUES ('V011', 'P003', 2, 49.99, 2 * 49.99);
-- 8. Inserire dati duplicati con modifiche
-- Duplicare un prodotto con un nuovo codice e colore:
INSERT INTO prodotti (codp, nome, colore, taglia, magazzino)
SELECT 'P012', nome, 'Blu', taglia, magazzino 
FROM prodotti 
WHERE codp = 'P001';
-- 9. Inserire dati nella tabella di associazione
-- Aggiungere una relazione tra fornitori e prodotti:
INSERT INTO FornitoriProdotti 
VALUES ('F001', 'P011', 50);
-- 10. Inserire dati provenienti da una tabella di log
INSERT INTO ordini 
SELECT * 
FROM OrdiniTemp;

set sql_safe_update = 0;
-- Inserire tutti i record da una tabella temporanea a una tabella definitiva:
-- 1. Aggiornare il colore dei prodotti con il codice "P001" in "rosso"
update prodotti
set colore = 'rosso'
where  codp = 'P001';
-- 2. Incrementare il numero di soci di tutti i fornitori con sede a "Milano" di 2
update fornitori
set Nsoci = Nsoci +2
where sede = 'Milano';
-- 3. Aggiornare il magazzino del prodotto "P002" a "MZ002"
UPDATE prodotti 
SET magazzino = 'MZ002' 
WHERE codp = 'P002';
-- 4. Ridurre del 10% la quantità disponibile per tutti i prodotti forniti da "F001"
UPDATE FornitoriProdotti 
SET qta = qta * 0.9 
WHERE codf = 'F001';
-- 5. Impostare il colore dei prodotti senza un colore definito a "bianco"
UPDATE prodotti 
SET colore = 'Bianco' 
WHERE colore IS NULL;
-- 6. Cambiare l'indirizzo di tutti i fornitori con codice "F002" in "Via Roma, 10"
UPDATE fornitori 
SET sede = 'Via Roma, 10'
WHERE codf = 'F002';
-- 7. Impostare la quantità a 0 per i prodotti mai forniti da alcun fornitore
UPDATE prodotti 
SET magazzino = NULL 
WHERE codp NOT IN (SELECT DISTINCT codp 
				   FROM FornitoriProdotti);
-- 8. Aggiornare la sede dei fornitori con meno di 3 soci a "Sede Sconosciuta"
UPDATE fornitori 
SET sede = 'Sede Sconosciuta' 
WHERE nSoci < 3;
-- 9. Cambiare la taglia di tutti i prodotti di colore "verde" a "L"
UPDATE prodotti 
SET taglia = 'L'
WHERE colore = 'Verde';
-- 10. Aggiornare il nome dei fornitori che hanno fornito almeno un prodotto con quantità superiore a 100 in "Fornitore Premium"
UPDATE fornitori 
SET nome = 'Fornitore Premium' 
WHERE codf IN (SELECT DISTINCT codf 
			   FROM FornitoriProdotti 
		       WHERE qta > 100);
-- 1. Eliminare i prodotti con magazzino "MZ003"
delete from prodotti
where magazzino='MZ003';
-- 2. Rimuovere tutti i fornitori con sede a "Napoli"
DELETE FROM fornitori
WHERE sede = 'Napoli';
-- 3. Eliminare tutte le relazioni prodotto-fornitore per il prodotto con codice "P004"
delete from fornitoriprodotti
where codp = 'P004';
-- 4. Rimuovere tutti i prodotti con colore "nero"
DELETE FROM prodotti
WHERE colore = 'Nero';
-- 5. Eliminare tutti i fornitori con meno di 5 soci
DELETE FROM fornitori 
WHERE nSoci < 5;
-- 6. Eliminare le relazioni prodotto-fornitore per i fornitori con codice "F003"
DELETE FROM FornitoriProdotti 
WHERE codf = 'F003';
-- 7. Eliminare tutti i prodotti mai forniti da alcun fornitore
DELETE FROM prodotti 
WHERE codp NOT IN (SELECT DISTINCT codp 
				   FROM FornitoriProdotti);
-- 8. Rimuovere tutti i fornitori che non hanno fornito prodotti
DELETE FROM fornitori 
WHERE codf NOT IN (SELECT DISTINCT codf 
				   FROM FornitoriProdotti);
-- 9. Eliminare tutti i prodotti con quantità inferiore a 10 in qualsiasi relazione prodotto-fornitore
DELETE FROM prodotti 
WHERE codp IN (SELECT codp 
			   FROM FornitoriProdotti
               WHERE qta < 10);
-- 10. Rimuovere tutti i prodotti di taglia "S" e colore "giallo"
DELETE FROM prodotti 
WHERE taglia = 'S' AND colore = 'Giallo';
-- 1. Selezionare tutti i dettagli dei prodotti di colore rosso
SELECT * 
FROM prodotti 
WHERE colore = 'Rosso';
-- 2. Trovare i nomi e le sedi dei fornitori con più di 5 soci
SELECT nome, sede 
FROM fornitori 
WHERE nSoci > 5;
-- 3. Trovare il nome e l'email dei clienti registrati negli ultimi 30 giorni
SELECT nome, email, data_registrazione 
FROM clienti 
WHERE data_registrazione >= CURRENT_DATE - INTERVAL '30' DAY;
-- 4. Calcolare il totale delle vendite per ogni prodotto
SELECT codprodotto, SUM(totale) AS totale_vendite 
FROM vendite 
GROUP BY codprodotto;
-- 5. Recuperare i dettagli dei fornitori che forniscono almeno un prodotto di colore "verde"
SELECT DISTINCT f.* 
FROM fornitori f 
JOIN FornitoriProdotti fp ON f.codf = fp.codf 
JOIN prodotti p ON fp.codp = p.codp 
WHERE p.colore = 'Verde';
-- 6. Trovare i nomi dei clienti che hanno effettuato ordini
SELECT DISTINCT c.nome 
FROM clienti c 
JOIN ordini o ON c.cod_cliente = o.cod_cliente;
-- 7. Visualizzare i prodotti mai forniti da alcun fornitore
SELECT * 
FROM prodotti 
WHERE codp NOT IN (SELECT DISTINCT codp FROM FornitoriProdotti);
-- 8. Trovare i fornitori che forniscono almeno due prodotti diversi
SELECT codf 
FROM FornitoriProdotti 
GROUP BY codf 
HAVING COUNT(DISTINCT codp) >= 2;
-- 9. Recuperare i dettagli delle vendite per prodotti il cui prezzo unitario è maggiore della media
SELECT * 
FROM vendite 
WHERE prezzo_unitario > (SELECT AVG(prezzo_unitario) 
						 FROM vendite);

-- 10. Trovare i prodotti venduti esclusivamente nel magazzino "MZ001"
SELECT * 
FROM prodotti 
WHERE magazzino = 'MZ01';

-- 1. Selezionare il nome e il prezzo aumentato del 10% per tutti i prodotti
SELECT nome, prezzo * 1.10 AS prezzo_aumentato 
FROM prodotti;
-- 2. Trovare i prodotti con un prezzo tra 50 e 100 (inclusi)
SELECT * 
FROM prodotti 
WHERE prezzo BETWEEN 50 AND 100;
-- 3. Visualizzare i fornitori con un numero di soci maggiore o uguale a 10
SELECT * 
FROM fornitori
WHERE nSoci >= 10;
-- 4. Calcolare la quantità totale fornita per ogni prodotto
SELECT codp, SUM(qta) AS quantita_totale 
FROM FornitoriProdotti
GROUP BY codp;
-- 5. Trovare i fornitori con il nome che inizia con "A" (query corretta ma non ritorna nulla perchè non sono presenti fornitori che iniziano per a)
SELECT * 
FROM fornitori 
WHERE nome LIKE 'A%';
-- 6. Mostrare tutti i prodotti che non sono né rossi né gialli
SELECT * 
FROM prodotti 
WHERE colore NOT IN ('Rosso', 'Giallo');
-- 7. Trovare i fornitori che si trovano in città diverse da "Milano"
SELECT * 
FROM fornitori 
WHERE sede != 'Milano';
-- 9. Selezionare tutti i fornitori che forniscono almeno un prodotto in quantità superiore a 50
SELECT DISTINCT f.* 
FROM fornitori f 
JOIN FornitoriProdotti fp ON f.codf = fp.codf
WHERE fp.qta > 50;
-- 10. Visualizzare i prodotti con prezzo maggiore di 20 e in magazzini diversi da "MZ01"
SELECT p.nome, v.prezzo_unitario
FROM prodotti p
join vendite v on p.codp = v.codprodotto
where v.prezzo_unitario > 20 AND p.magazzino != 'MZ01';
-- 1. Mostrare il nome dei prodotti e i nomi dei fornitori che li forniscono
SELECT p.nome AS prodotto, f.nome AS fornitore
FROM prodotti p
JOIN FornitoriProdotti fp ON p.codp = fp.codp
JOIN fornitori f ON fp.codf = f.codf;
-- 2. Trovare i fornitori che non forniscono alcun prodotto (LEFT JOIN con condizione NULL)
SELECT f.nome
FROM fornitori f
LEFT JOIN FornitoriProdotti fp ON f.codf = fp.codf
WHERE fp.codp IS NULL;
-- 3. Calcolare la quantità totale fornita per ogni prodotto e visualizzare anche i prodotti che non sono forniti (LEFT JOIN) COALESCE =restituisce il tipo di dati dell'espressione con la precedenza del tipo di dati più alta
SELECT p.nome, COALESCE(SUM(fp.qta), 0) AS quantita_totale
FROM prodotti p
LEFT JOIN FornitoriProdotti fp ON p.codp = fp.codp
GROUP BY p.nome;
-- 4. Visualizzare i fornitori che forniscono prodotti con quantità maggiore di 50
SELECT f.*
FROM fornitori f
JOIN fornitoriprodotti fp ON f.codf = fp.codf
WHERE fp.Qta > 50;

-- 5. Trovare i prodotti non forniti da nessun fornitore
SELECT p.*
FROM prodotti p
LEFT JOIN fornitoriprodotti fp ON p.codp = fp.codp
WHERE fp.codf IS NULL;
-- 6. Trovare i fornitori che forniscono solo prodotti di colore "rosso"
SELECT f.nome
FROM fornitori f
JOIN FornitoriProdotti fp ON f.codf = fp.codf
JOIN prodotti p ON fp.codp = p.codp
GROUP BY f.nome
HAVING COUNT(DISTINCT p.colore) = 1 AND MAX(p.colore) = 'Rosso';
-- 7. Visualizzare i fornitori che forniscono almeno due prodotti diversi
SELECT f.*
FROM fornitori f
JOIN fornitoriprodotti fp ON f.codf= fp.codf
GROUP BY f.codf
HAVING COUNT(DISTINCT fp.codp) > 1;
-- 8. Trovare i prodotti forniti solo da un unico fornitore
SELECT p.*
FROM prodotti p
JOIN fornitoriprodotti fp ON p.codp = fp.codp
GROUP BY p.codp
HAVING COUNT(DISTINCT fp.codf) = 1;
-- 9. Trovare i fornitori che forniscono prodotti con quantità media superiore a 30
SELECT f.*
FROM fornitori f
JOIN fornitoriprodotti fp ON f.codf = fp.codf
GROUP BY f.codf
HAVING AVG(fp.Qta) > 30;
-- 10. Visualizzare i prodotti e il numero di fornitori che li forniscono
SELECT p.nome, COUNT(fp.codf) AS numero_fornitori
FROM prodotti p
LEFT JOIN FornitoriProdotti fp ON p.codp = fp.codp
GROUP BY p.nome;

-- esercizi col group by
-- 1. Contare il numero totale di prodotti disponibili
SELECT COUNT(*) AS totale_prodotti 
FROM prodotti;
-- 2. Calcolare la quantità totale fornita per ogni prodotto
SELECT p.codp, p.nome, SUM(fp.Qta) AS TotSupply
FROM prodotti p
JOIN fornitoriprodotti fp ON p.codp = fp.codp
GROUP BY p.codp;

-- 3. Determinare la quantità media di prodotti forniti da ciascun fornitore
SELECT f.codf, f.nome, ROUND(AVG(fp.Qta), 2) AS AvgSupply
FROM fornitori f
JOIN fornitoriprodotti fp ON f.codf = fp.codf
GROUP BY f.codf;
-- 4. Calcolare il numero di fornitori per ciascun prodotto
SELECT p.codp, p.nome, COUNT(DISTINCT fp.codf) AS TotSuppliers
FROM prodotti p
JOIN fornitoriprodotti fp ON p.codp = fp.codp
GROUP BY p.codp;

-- 5. Trovare il prodotto con la quantità massima fornita
SELECT codp, SUM(qta) AS quantita_totale 
FROM FornitoriProdotti 
GROUP BY codp 
ORDER BY quantita_totale DESC 
LIMIT 1;
-- 6. Determinare la quantità totale fornita per ciascun colore di prodotto
SELECT p.colore, SUM(fp.qta) AS quantita_totale 
FROM prodotti p 
JOIN FornitoriProdotti fp ON p.codp = fp.codp 
GROUP BY p.colore;
-- 7. Contare il numero di prodotti forniti da ogni fornitore
SELECT codf, COUNT(DISTINCT codp) AS numero_prodotti 
FROM FornitoriProdotti 
GROUP BY codf;
-- 8. Calcolare il numero medio di soci dei fornitori per città
SELECT sede, AVG(nSoci) AS numero_medio_soci
FROM fornitori 
GROUP BY sede;
-- 9. Trovare i prodotti con una quantità totale fornita superiore a 100
SELECT codp, SUM(qta) AS quantita_totale 
FROM FornitoriProdotti 
GROUP BY codp 
HAVING quantita_totale > 100;
-- 10. Determinare il numero di prodotti forniti e la quantità totale fornita da fornitori con più di 5 soci
SELECT fp.codf, COUNT(DISTINCT fp.codp) AS numero_prodotti, SUM(fp.qta) AS quantita_totale 
FROM FornitoriProdotti fp 
JOIN fornitori f ON fp.codf = f.codf 
WHERE f.nSoci > 5 
GROUP BY fp.codf;


-- 1: Convertire il testo in maiuscolo
-- : Seleziona i nomi dei clienti in maiuscolo.
SELECT UPPER(nome) AS nome_maiuscolo
FROM clienti;

--  2: Convertire il testo in minuscolo
-- : Seleziona i cognomi dei clienti in minuscolo. Cognome non esiste, faccio col nome
SELECT LOWER(nome) AS nome_minuscolo
FROM clienti;

--  3: Concatenare stringhe
-- : Crea una colonna che mostri il nome completo (nome + cognome). (colonna cognome non esiste, concateno la mail
SELECT CONCAT(Nome, ' (', Email, ')') AS NameAndEmail
FROM clienti;
--  4: Estrarre una parte di testo
-- : Estrai i primi tre caratteri del nome del cliente.
SELECT LEFT(nome, 3) AS primi_tre_caratteri 
FROM clienti;
--  5: Calcolare la lunghezza di una stringa
-- : Trova la lunghezza del nome dei clienti.
SELECT nome, LENGTH(nome) AS lunghezza_nome 
FROM clienti;
--  6: Rimuovere spazi iniziali e finali
-- : Rimuovi spazi inutili dai nomi dei clienti.
SELECT TRIM(nome) AS nome_senza_spazi 
FROM clienti;
--  7: Sostituire una parte di testo
-- : Sostituisci "Rosso" con "Red" nei colori dei prodotti.
 -- l'avevo già modificato in un' altra query quindi ho modificato rosso invece di Rosso
SELECT REPLACE(colore, 'rosso', 'Red') AS colore_tradotto
FROM prodotti;
--  8: Cercare una sottostringa
-- : Trova i clienti con lettera iniziale del nome "A".
SELECT * 
FROM clienti
WHERE nome LIKE 'A%';
-- 9. Formatta i codici ordine con 5 cifre (es. O0001)
SELECT
REPLACE(LPAD(codp, 5, '0'), 'P', '0') AS ProductCode
FROM prodotti;

-- Funzioni numeriche
--  1: Arrotondare un numero
-- : Arrotonda il prezzo dei prodotti a due decimali.
SELECT ROUND(totale, 2) AS totale_arrotondato
FROM vendite;
--  2: Trovare il valore assoluto
-- : Calcola il valore assoluto della differenza tra quantità e 50.
SELECT ABS(quantita - 50) AS differenza_assoluta 
FROM vendite;
--  3: Calcolare la potenza
-- : Calcola il quadrato della quantità dei prodotti.
SELECT quantita, POWER(quantita, 2) AS quadrato_quantita 
FROM vendite;
--  4: Calcolare la radice quadrata
-- : Trova la radice quadrata del prezzo di ogni prodotto.
SELECT p.nome, SQRT(v.Prezzo_unitario) AS SquaredPrice
FROM prodotti p
JOIN vendite v ON p.codp = v.codprodotto;
--  5: Generare numeri casuali
-- : Associa un numero casuale a ogni cliente.
SELECT cod_cliente, nome, RAND() AS numero_casuale 
FROM clienti;
--  6: Trovare il valore massimo e minimo
-- : Mostra il prezzo massimo e minimo dei prodotti.
SELECT MAX(Prezzo_Unitario) AS max, MIN(Prezzo_Unitario) AS MIN
FROM vendite;
--  7: Arrotondare per eccesso e per difetto
-- : Mostra il prezzo arrotondato per eccesso e per difetto.
SELECT p.nome, v.Prezzo_Unitario, CEIL(v.Prezzo_Unitario) AS CeiledPrice, FLOOR(v.Prezzo_Unitario) AS FlooredPrice 
FROM prodotti p
JOIN vendite v ON p.codp = v.codprodotto;
--  8: Calcolare il resto della divisione (MOD)
-- : Trova il resto della divisione tra quantità e 3 per ogni prodotto.
SELECT p.*, MOD(fp.Qta, 3) AS Module
FROM prodotti p
JOIN fornitoriprodotti fp ON p.codp = fp.codp;

--  9: Calcolare una media
-- : Calcola la media dei prezzi dei prodotti.
SELECT AVG(prezzo_unitario) AS media_totale
FROM vendite;

-- Funzioni data, ora, datetime
--  1: Estrarre la data corrente
-- : Visualizza la data corrente per ogni ordine.
SELECT codOrdine, data_ordine
FROM ordini;

--  2: Calcolare l'età di un cliente
-- : Calcola l'età in anni di ogni cliente in base alla data di nascita.
-- ?? calcolo da quanto tempo è iscritto un cliente
SELECT cod_cliente, nome, DATEDIFF(CURDATE(), data_registrazione) AS giorni_iscrizione 
FROM clienti;
--  3: Estrarre anno, mese e giorno
-- : Estrai l'anno, il mese e il giorno dalla data di un ordine.
SELECT codOrdine, YEAR(data_ordine) AS anno, MONTH(data_ordine) AS mese, DAY(data_ordine) AS giorno 
FROM ordini;

--  4: Calcolare la differenza tra date
-- : Calcola il numero di giorni trascorsi tra la data dell'ordine e oggi.
SELECT codOrdine, DATEDIFF(CURDATE(), data_ordine) AS giorni_trascorsi 
FROM ordini;

--  5: Aggiungere giorni a una data
-- : Aggiungi 10 giorni alla data di ogni ordine.
SELECT codOrdine, DATE_ADD(data_ordine, INTERVAL 10 DAY) AS data_modificata 
FROM ordini;

--  6: Sottrarre mesi da una data
-- : Sottrai 3 mesi alla data di ogni ordine.
SELECT codOrdine, DATE_SUB(data_ordine, INTERVAL 3 MONTH) AS data_modificata 
FROM ordini;

--  7: Estrarre il giorno della settimana
-- : Mostra il giorno della settimana per ogni ordine (1 = Domenica, 7 = Sabato).
SELECT codOrdine, DAYOFWEEK(data_ordine) AS giorno_settimana 
FROM ordini;

--  8: Formattare una data
-- : Formatta la data degli ordini nel formato "GG/MM/AAAA".
SELECT codOrdine, DATE_FORMAT(data_ordine, '%d/%m/%Y') AS data_formattata 
FROM ordini;

--  9: Calcolare il numero di mesi tra due date
-- -- : Calcola il numero di mesi tra la data dell'ordine e oggi.
SELECT codOrdine, TIMESTAMPDIFF(MONTH, data_ordine, CURDATE()) AS mesi_trascorsi 
FROM ordini;


