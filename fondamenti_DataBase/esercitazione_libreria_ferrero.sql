-- 1. Elenco di tutti i libri
select titolo
from libro;
-- 2. Elenco di tutti gli autori
select *
from autore;
-- 3. Elenco di tutti gli editori
select *
from editore;
-- 4. Selezionare il titolo e il prezzo dei libri ordinati per prezzo crescente
select titolo, prezzo
from libro
order by prezzo asc;
-- 5. Selezionare i libri con un prezzo superiore a 15€
select titolo, prezzo
from libro 
where prezzo > 15
order by prezzo asc;
-- 6. Contare il numero totale di libri nel database
select count(*)
from libro;
-- 7. Ottenere la media delle pagine dei libri
select avg(pagine) as media_pagine
from libro;
-- 8. Trovare il libro più costoso
select titolo, prezzo
from libro
order by prezzo desc
limit 1;
-- 9. Trovare il libro meno costoso
select titolo, prezzo
from libro
order by prezzo asc
limit 1;
-- 10. Contare il numero di autori per nazione
select nazionalita, count(*) as Numero_autori
from autore
group by nazionalita;
-- 11. Elenco dei libri con più di 500 pagine
select titolo, pagine
from libro
where pagine > 500
order by pagine asc;
-- 12. Elenco degli autori italiani
select nome, cognome, nazionalita
from autore
where nazionalita ='it';
-- 13. Trovare tutti i libri pubblicati da un determinato editore (es. Mondadori)
select l.titolo, e.nome
from libro as l
right join editore as e on l.editore_id = e.id
order by e.nome;
-- 14. Contare il numero di libri per ogni editore
select e.nome as editore, count(l.id) as numero_libri
from libro as l
join editore as e on l.editore_id = e.id
group by e.nome;
-- 15. Trovare i libri con più di 400 pagine pubblicati da un determinato editore
select titolo, pagine
from libro
where pagine > 400 and editore_id = (select id from editore where nome = 'Einaudi');
-- 16. Trovare il numero di autori che hanno scritto almeno un libro
select count(distinct autore_id) as Numero_autori
from autore_libro;
-- 17. Trovare gli autori che hanno scritto più di un libro
select a.nome, a.cognome, count(al.libro_id) as Numero_libri
from autore as a
join autore_libro as al on a.id = al.autore_id
group by a.id
having Numero_libri > 1;
-- 18. Trovare gli autori che non hanno scritto alcun libro
select nome, cognome 
from autore 
where id not in (select autore_id from autore_libro);
-- 19. Selezionare i libri con più di un autore
select a.titolo, count(al.libro_id) as numero_autori
from libro as a
join autore_libro as al on a.id = al.autore_id
group by a.id
having count(al.libro_id)>1;
-- 20. Contare il numero di libri per autore
SELECT a.nome, a.cognome, count(al.libro_id) as numero_libri
FROM autore as a 
join autore_libro as al on a.id = al.autore_id
group by a.id;
-- 21. Ottenere la somma totale del prezzo di tutti i libri
select sum(prezzo) as somma_totale
from libro;
-- 22. Contare il numero di libri con un prezzo compreso tra 10 e 20 euro
select count(titolo) as numero_libri
from libro
where prezzo >= 10 and prezzo <= 20;
-- 23. Trovare il prezzo medio dei libri per editore
select e.nome, avg(a.prezzo) as prezzo_medio
from libro as a
join editore as e on a.editore_id = e.id
group by e.nome
order by prezzo_medio; 
-- 24. Trovare gli autori con più libri pubblicati da editori diversi
select a.nome, count(distinct l.editore_id) as numero_editori
from autore as a
join autore_libro as al  on a.id = al.autore_id               -- lista che associa ogni autore ai libri che ha scritto.
join libro as l on al.libro_id = l.id						  -- lista con gli editori dei libri che ogni autore ha scritto
group by a.id
having count(distinct l.editore_id)>1;
-- 25. Trovare i libri con il prezzo più alto per ogni editore
select  e.nome, a.titolo, a.prezzo
from editore as e
join libro as a on e.id = a.editore_id
where a.prezzo = (select max(l.prezzo)
				  from libro as l
                  where l.editore_id= e.id);
-- 26. Ottenere i 5 libri più costosi
select titolo, prezzo
from libro
order by prezzo desc
limit 5;
-- 27. Contare il numero di libri pubblicati da ciascun editore con più di 3 libri
select count(l.id) as conto, e.nome
from libro as l
join editore as e on l.editore_id= e.id
group by l.editore_id
having conto > 3;
-- 28. Selezionare il nome degli editori che hanno pubblicato almeno un libro con più di 500 pagine
select e.nome, count(*) as numero_libri    
from editore e
join libro l on e.id = l.editore_id
where l.pagine >500
group by editore_id;
-- 29. Trovare gli autori che hanno scritto libri pubblicati da più di un editore
select a.nome, count(distinct l.editore_id) as numero_editori
from autore as a
join autore_libro as al on a.id = al.autore_id    -- dopo questo join ho tutti i libri scritti da ogni autore
join libro as l on al.libro_id= l.id			  -- dopo il secondo join ho una lista con tutti i libri per ogni autore e gli editori che li hanno pubblicati
group by a.id
having count(distinct l.editore_id)>1;
-- 30. Contare il numero di libri per ogni autore con più di 1 libro
select a.nome, a.cognome, count(al.libro_id) as NUM_LIBRI
from autore a
join autore_libro al on a.id = al.autore_id
group by a.id
having NUM_LIBRI > 1;


drop view editori_autori_vista;

create view editori_autori_vista as
select distinct e.nome, a.nome as Nome_autore, a.cognome
from editore e
join libro l on l.editore_id= l.id
join autore_libro al on al.libro_id= l.id
join autore a on a.id= al.autore_id;