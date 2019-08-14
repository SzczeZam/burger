DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
    id INT(33) NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY(id) 
);

INSERT INTO burgers(burger_name)
values
("The Classic"),
("Double Cheese Burger"),
("Double Bacon Cheese Burger"),
("Veggy Edgy Burger"),
("Aubergine and Aioli Burger");

SELECT * FROM burgers;