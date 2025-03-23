create database biblioteche;
grant all on biblioteche.* to 'ITS_2025'@'localhost';
create table biblioteche (
			Cod_Biblioteca int auto_increment primary key,
            Nome varchar(100) not null,
            Indirizzo varchar(100) not null,
            Citta varchar(100) not null,
            Numero_telefono varchar(100) not null,
            giorno_settimana varchar(20) not null,
            orario_apertura time not null,
            orario_chiusura time not null
);
create table libri (
		ISBN_Cod varchar(13) primary key,
        Titolo varchar(100) not null,
        Autore varchar(100) not null,
        Genere varchar(100) not null,
        Anno_pubblicazione year,
        Stato_conservazione varchar(50) not null
);

create table libri_biblioteche(
		ISBN_Cod varchar(13) not null,
        Cod_Biblioteca int not null,
        Numero_Copie int not null,
		primary key (ISBN_Cod, Cod_Biblioteca),
        foreign key (ISBN_Cod) references libri(ISBN_Cod) on delete cascade,
        foreign key (Cod_Biblioteca) references biblioteche(Cod_Biblioteca) on delete cascade
);

create table utenti (
	Cod_Utente int auto_increment primary key,
    Nome varchar(100) not null,
    Cognome varchar(100) not null,
    Data_Nascita date not null,
	Numero_Cellulare varchar(11) not null
);

CREATE TABLE Iscrizioni (
    Cod_Utente int not null,
    Cod_Biblioteca int not null,
    Data_Iscrizione date not null ,
    primary key (Cod_Utente, Cod_Biblioteca),
    foreign key (Cod_Utente) references utenti(Cod_Utente) on delete cascade,
    foreign key (Cod_Biblioteca) references biblioteche(Cod_Biblioteca) on delete cascade
);
create table prestiti(
	Cod_Prestito int auto_increment primary key,
    Cod_Utente int not null,
    ISBN_Cod varchar(13) not null,
    Cod_Biblioteca int not null,
    Data_INIZIO_Prestito date not null,
    Data_SCADENZA_Prestito_Prevista date not null,
    Data_FINE_Prestito date,  -- questa data potrà essere nulla se ad esempio ho preso il libro oggi e ancora non so quando dovrò restituirlo
	Num_Libri_in_Prestito int not null check (Num_Libri_in_Prestito <=5),
	foreign key (Cod_Utente) references utenti(Cod_Utente) on delete cascade,
	foreign key (ISBN_Cod) references libri(ISBN_Cod) on delete cascade,
    foreign key (Cod_Biblioteca) references biblioteche(Cod_Biblioteca) on delete cascade
);
create table prenotazioni(
	Cod_Prenotazione int auto_increment primary key,
	Cod_Utente int not null,
    ISBN_Cod varchar(13) not null,
    Cod_Biblioteca int not null,
    Data_Prenotazione date not null,
    Data_Max_Per_Ritiro date not null,
    foreign key (Cod_Utente) references utenti(Cod_Utente) on delete cascade,
	foreign key (ISBN_Cod) references libri(ISBN_Cod) on delete cascade,
    foreign key (Cod_Biblioteca) references biblioteche(Cod_Biblioteca) on delete cascade
);

create table eventi(
	Cod_Evento int auto_increment primary key,
    Titolo varchar(100) not null,
    Descrizione varchar(500) not null,
    Data_Evento date not null,
    Ora_Evento time not null,
    Cod_Biblioteca int not null,
	Numero_Max_Partecipanti int not null check(Numero_Max_Partecipanti <=500),
	foreign key (Cod_Biblioteca) references biblioteche(Cod_Biblioteca) on delete cascade
);

create table Partecipanti_Eventi_Prenotazioni(
	Cod_Evento int not null,
    Cod_Utente int not null,
	foreign key (Cod_Utente) references utenti(Cod_Utente) on delete cascade,
	foreign key (Cod_Evento) references eventi(Cod_evento) on delete cascade,
	primary key (Cod_Evento, Cod_Utente)

);
