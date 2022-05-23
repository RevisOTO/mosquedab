CREATE DATABASE FORM;
use FORM;

DROP TABLE Formulario;

CREATE TABLE Formulario(
    NombreCompleto VARCHAR(255),
    Fecha_Nac DATE,
    Celular VARCHAR(14),
    Estado VARCHAR(255),
    Ciudad VARCHAR(255),
    CP VARCHAR(5),
    CURP VARCHAR(255)
);

INSERT INTO Formulario (NombreCompleto,Fecha_Nac,Celular,Estado,Ciudad,CP,CURP)
VALUES 
('Rafael Mosqueda Barragán','2001-03-12','8671931129','Tamaulipas','Nuevo Laredo','88296','OJNDFS37324UJHB'),
('Jose Perez Hernandez','2002-07-02','8676543561','Tamaulipas','Nuevo Laredo','88000','UIDSHF12834YNFD23'),
('Rene Salina de Los Santos','2001-05-25','8675314562','Tamaulipas','Soto La Marina','88034','ODSIF123IOKJNSDF'),
('Martin Gerardo Sanabia Estrada','2001-07-25','867765098','Tamaulipas','Matamoros','88462','OISUDHF213IOSDF'),
('Luis Saavedra Aguilar','2001-10-19','867234512','Tamaulipas','San Fernando','88097','JDNF932MUDAEJKND1');


SELECT *
FROM Formulario;