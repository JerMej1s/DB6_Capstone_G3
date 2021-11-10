create database partyplanner;

use partyplanner;

create table cocktail (
    idDrink int not null,
    idEvent int,
    strDrink varchar(30),
    primary key(idDrink)
);

create table meal (
	idMeal int not null,
    idEvent int,
    strMeal varchar(50),
    primary key(idMeal)
);

create table user (
	idUser int not null auto_increment,
    firstName varchar(30),
    lastName varchar(30),
    phoneNumber varchar(20),
    userName varchar(20) unique,
    password varchar(10),
    primary key(idUser)   
);

create table event (
	idEvent int not null auto_increment,
    idUser int,
    date DateTime,
    city varchar(85),
    state varchar(2),
    primary key(idEvent),
    foreign key eventUser(idUser) references user(idUser)
);
