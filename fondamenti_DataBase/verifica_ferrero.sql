use biblioteche;

insert into biblioteche (Nome, Indirizzo, Citta, Numero_telefono, giorno_settimana, orario_apertura, orario_chiusura)
values ('Biblioteca Centrale', 'Via Roma 1, Milano', 'Milano', '02 1234567', 'Lunedì', '09:00:00', '18:00:00'),
 ('Villa Amoretti', 'C.so Orbassano 200', 'Torino', '0110113860', 'Mercoledì', '10:00:00', '19:00:00');

insert into libri (Isbn_Cod, Titolo, Autore, Genere, Anno_Pubblicazione, Stato_conservazione) 
values ('9781234567897','1984', 'George Orwell', 'romanzo', '1949', 'Buono'),
 ('0123456789012','1984', 'George Orwell', 'romanzo', '1949', 'Discreto'),
 ('0123498764212','Percy Jackson e gli dei dell Olimpo: Il ladro di fulmini', 'Rick Riordan', 'Fantasy','2005', 'Ottimo'),
 ('2645891354215', 'Geronimo Stilton: Nel Regno della Fantasia', 'Elisabetta Dami', 'Romanzo','2003','Ottimo'),
 ('9783161484100', 'Il Grande Libro', 'Gigi Carletti', 'Romanzo', 2021, 'Ottimo');

insert into libri_biblioteche (Isbn_Cod, Cod_Biblioteca, Numero_copie)
values ('2645891354215', 2, 10),
('0123498764212', 1, 5),
('0123498764212', 2, 5),
('9781234567897',1,6),
('2645891354215',1,15),
('0123456789012',2,5),
('9783161484100',1,8);

insert into utenti (nome, cognome, Data_nascita, numero_cellulare) 
values ('Tommaso', 'Ferrero', '2003-07-06', '3288484821'),
('Alessandro', 'Caves', '2004-05-08', '3214563278'),
('Alessandro', 'DeFi', '2002-06-04', '3734981234'),
('Simone', 'Pizza', '2005-03-09', '3667895431'),
('Domenico', 'Rossò', '2004-06-02', '3558192043'),
('Andrea', 'Sapiente', '1999-02-04', '3786491231');

insert into iscrizioni() 
values (1,2, '2025-02-25'),
(2,1,'2024-03-26'),
(4,2, '2024-01-01'),
(5,1,'2023-03-12'),
(3,1, '2008-09-26'),
(6,2,'2007-02-24');

insert into prestiti(Cod_utente, isbn_cod, Cod_biblioteca, data_inizio_prestito, data_scadenza_prestito_prevista, data_fine_prestito, num_libri_in_prestito)
values (1,'0123456789012',2,'2025-02-25', '2025-03-25', null, 3),
(5,'2645891354215',1,'2023-03-15', '2023-04-15', '2023-03-15', 2),
(2,'2645891354215',1,'2024-03-26', '2024-04-26', null, 4),
(1,'0123456789012',2,'2025-02-25', '2025-03-25', null, 1),
(3, '9783161484100',1, '2010-01-01', '2010-02-01', '2010-02-01', 2)
;
insert into prenotazioni(Cod_utente, ISBN_COD, Cod_Biblioteca, Data_Prenotazione, Data_Max_per_ritiro)
values (1, '9783161484100', 1, '2025-04-25', '2025-05-25'),
(2,'0123498764212', 2, '2025-02-26','2025-03-26');

insert into eventi (Titolo, Descrizione, Data_Evento, Ora_Evento, Numero_Max_Partecipanti, Cod_Biblioteca)
values('incontro con l autore', 'presentazione del libro Percy Jackson','2025-03-25','17:00:00',50,2),
('incontro con l autore', 'presentazione del libro Geronimo Stilton','2025-03-25','16:00:00',50,1),
('incontro con l autore', 'presentazione del libro 1984','2025-03-28','16:00:00',50,1); 
insert into partecipanti_eventi_prenotazioni (Cod_Evento, Cod_Utente)
values (1,1);

-- Elencare tutti i libri disponibili in una specifica biblioteca.
select a.titolo, c.Nome
from libri a
join libri_biblioteche b on a.ISBN_Cod = b.ISBN_Cod
join biblioteche c on b.Cod_Biblioteca=c.Cod_Biblioteca;
-- Trovare gli utenti con più di 3 libri in prestito attualmente.
select a.nome, a.cognome, b.Num_Libri_in_Prestito
from utenti a
join prestiti b on a.Cod_Utente=b.Cod_Utente
where Num_Libri_in_Prestito>=3;
-- Elencare i prestiti attivi di un determinato utente.
select a.nome, a.cognome
from utenti a
join prestiti b on a.Cod_Utente=b.Cod_Utente
where Data_FINE_Prestito = null;
-- Elencare tutti gli eventi in una specifica biblioteca ordinati per data.
select Titolo, descrizione, Data_Evento, Cod_Biblioteca
from eventi
where Cod_Biblioteca = '1'
order by Data_Evento;
-- Verificare quali libri hanno il maggior numero di prenotazioni.
select Isbn_cod, COUNT(*) AS numero_prenotazioni
from prenotazioni
group by Isbn_cod
order by numero_prenotazioni desc;
-- Trovare i libri più frequentemente prestati nell’ultimo anno.
select Isbn_cod, COUNT(*) AS numero_prestiti
from prestiti
where Data_INIZIO_Prestito between CURDATE() - INTERVAL 1 YEAR AND CURDATE()
group by Isbn_cod
order by numero_prestiti desc;
-- Elencare le biblioteche con il maggior numero di prestiti attivi.
select Cod_Biblioteca, COUNT(*) AS numero_prestiti_attivi
from prestiti
where Data_FINE_Prestito IS NULL 
group by Cod_Biblioteca
order by numero_prestiti_attivi desc;
-- Visualizzare gli utenti iscritti a più di una biblioteca.
select Cod_Utente
from iscrizioni
group by Cod_Utente
having COUNT(distinct Cod_Biblioteca) > 1;
-- Trovare i libri danneggiati presenti in una biblioteca specifica.

-- Trovare gli eventi con più iscritti e verificare se hanno ancora posti disponibili.
select E.Cod_Evento, E.Titolo, COUNT(*) AS numero_iscritti, E.Numero_Max_Partecipanti
FROM eventi E
JOIN ; -- non sono riuscito a finire per mancanza di tempo
