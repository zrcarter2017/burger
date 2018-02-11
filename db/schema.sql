-- CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers (
	id INT Primary Key Auto_Increment,
	burger_name VARCHAR(40) NOT NULL,
	devoured BOOLEAN DEFAULT 1,
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP	
);