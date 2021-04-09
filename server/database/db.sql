CREATE DATABASE GEEK_Cosmetics;

USE GEEK_Cosmetics;

DROP TABLE IF EXISTS articulos;

CREATE TABLE articulos (
    id VARCHAR(2) PRIMARY KEY,
    descripcion VARCHAR (100) NOT NULL,
    precio DOUBLE NOT NULL,
    existencia INT NOT NULL
) ENGINE=InnoDB;

DROP TABLE IF EXISTS ordenes;

CREATE TABLE ordenes (
    numero_de_orden INT(10) AUTO_INCREMENT PRIMARY KEY,
    nombre_de_usuario VARCHAR(50) NOT NULL,
    fecha VARCHAR(15) NOT NULL,
    subtotal DOUBLE NOT NULL,
    iva DOUBLE NOT NULL,
    total DOUBLE NOT NULL
) ENGINE=InnoDB;