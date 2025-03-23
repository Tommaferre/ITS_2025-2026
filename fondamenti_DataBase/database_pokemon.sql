CREATE TABLE pokemon_tipi (
	
	id int auto_increment,
    tipo varchar(30) not null unique,
    primary key (id)

); 
insert into pokemon_tipi (tipo) 
SELECT  distinct `Type 1`
FROM esercitazioni.pokemon
ORDER BY `Type 1`;