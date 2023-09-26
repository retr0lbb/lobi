CREATE DATABASE lobi;
use lobi;

CREATE TABLE usuarios(
	id int PRIMARY KEY AUTO_INCREMENT,
    nome varchar(200) not null,
    email varchar(300) not null,
    senha varchar(300) not null
);