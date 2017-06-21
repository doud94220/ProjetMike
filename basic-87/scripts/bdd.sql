CREATE DATABASE IF NOT EXISTS MikeMonRoi;

USE MikeMonRoi;

CREATE TABLE voiture (
  id_voiture INT(3) NOT NULL AUTO_INCREMENT,
  marque VARCHAR(30) NOT NULL,
  modele VARCHAR(30) NOT NULL,
  annee YEAR NOT NULL,
  couleur ENUM('black','white','blue','mike') NOT NULL,
  image VARCHAR(80),
  PRIMARY KEY (id_voiture)
) ENGINE=InnoDB ;

INSERT INTO voiture (id_voiture, marque, modele, annee, couleur, image) VALUES
(1, 'Mercedes', 'Mercedes-Benz', 2005, 'rouge', 'images/voitures/mercedes-benz.jpg'),
(2, 'Peugeot', '307', 2008, 'bleu', 'images/voitures/peugeot-307.jpg'),
(3, 'volkswagen', 'polo', 2011, 'blanc', 'images/voitures/polo-blanche.jpg');
