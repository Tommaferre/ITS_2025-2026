select 
a.FirstName,
a.LastName, 
concat(b.firstname, ' ', b.LastName) as responsabile
from employee a
right join employee b on a.ReportsTo = b.EmployeeId;
-- Trova tutti gli album nella tabella Album.
select title
from album;
-- Trova il nome degli artisti nella tabella Artist.
select Name
from artist;
-- Trova i dettagli dei clienti che vivono negli Stati Uniti.
Select *
from customer
where country = 'USA';
-- Trova i dipendenti con il titolo "Sales Manager".
select *
from employee
where Title = 'Sales Manager';
-- Trova i generi musicali elencati nella tabella Genre.
select distinct Name
from genre;
-- Trova i dettagli degli album e degli artisti associati.
select b.Name, a.Title
from album a
join artist b on a.artistid = b.artistid;
-- Trova i brani e i loro generi.
select a.name, b.name
from track a 
join genre b on a.genreid = b.genreid;
-- Trova i dettagli delle fatture e dei clienti.
select * 
from invoice
join customer using(customerid);
-- Trova le playlist e i brani associati.
select a.name as nome_playlist, c.name as nome_brano
from playlist a
join playlisttrack b on a.PlaylistId= b.PlaylistId
join track c on b.trackid = c.TrackId ;
-- Trova i brani con il rispettivo tipo di supporto.
select a.name, b.name
from track a 
join mediatype b on a.MediaTypeId= b.MediaTypeId;
-- Conta il numero totale di clienti.
select count(customerid) as numero_totale_clienti
from customer;
-- Calcola il totale delle vendite registrate nella tabella Invoice.
select count(distinct invoiceid) as numero_totale_vendite
from invoice;
-- Trova il prezzo massimo tra i brani nella tabella Track.
select  max(unitprice) as prezzo_massimo
from track;
-- Trova il numero di dipendenti per ogni città.
select count(distinct employeeid) as numero_dipendenti_per_citta, city
from employee
group by city;
-- Trova il prezzo medio per unità dei brani.
select avg(unitprice) as prezzo_medio
from track;
-- trova i brani più lunghi (durata superiore alla media).
select name, milliseconds
from track
where Milliseconds > (select avg(milliseconds) from track);
-- Trova i dipendenti che non riportano a nessuno.
select LastName, FirstName 
from employee
where ReportsTo is null;
-- Trova i clienti che non hanno effettuato fatture.
select firstname, lastname
from customer 
where customerid not in (
		select a.CustomerId
		from customer a 
		join invoice b on a.CustomerId= b.CustomerId);
-- Trova le città che hanno più di 2 dipendenti.
select count(distinct employeeid) as numero_dipendenti_per_citta, city
from employee
group by city
having numero_dipendenti_per_citta>2;
-- Trova i brani appartenenti a generi diversi da "Rock".
select a.name, b.name
from track a 
join genre b on a.GenreId= b.GenreId
where b.Name != 'Rock';