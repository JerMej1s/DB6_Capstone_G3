create database partyplanner;

use partyplanner;

create table user (
	idUser int not null auto_increment,
    firstName varchar(30),
    lastName varchar(30),
    phoneNumber varchar(50),
    email varchar(50) unique,
    password varchar(10),
    primary key(idUser)   
);

create table event (
	idEvent int not null auto_increment,
    idUser int,
    eventName varchar(100),
    date DateTime,
    city varchar(85),
    state varchar(2),
    primary key(idEvent)
);

create table cocktail (
    idDrink int not null default 0,
    idDrinkz int,
    idEvent int,
    strDrink varchar(100),
    strDrinkThumb varchar(1000)    
);

create table meal (
	idMeal int not null default 0,
    idMealz int,
    idEvent int,
    strMeal varchar(100),
    strMealThumb varchar(100)
);

insert into user (firstName, lastName, phoneNumber, email, password) values ('Brandon', 'Miller', '980-296-2966', 'brandonmiller1@rocketmortgage.com', 'abc123');
insert into user (firstName, lastName, phoneNumber, email, password) values ('Marko', 'Johnson', '313-757-9252', 'markojohnson@rocketmortgage.com', 'abc123');
insert into user (firstName, lastName, phoneNumber, email, password) values ('Jeremy', 'Jones', '313-757-9201', 'jeremyjones@rocketmortgage.com', 'abc123');

insert into event (idUser, eventName, date, city, state) values (1, 'DevBuild Graduation Party', '2021-11-19', 'Peoria', 'AZ');
insert into event (idUser, eventName, date, city, state) values (2, 'A Holiday Celebration', '2021-11-19', 'Southfield', 'MI');
insert into event (idUser, eventName, date, city, state) values (3, 'Friendsgiving', '2021-12-18', 'Pleasant Ridge', 'MI');
