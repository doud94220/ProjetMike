<?php 

try{
		$pdo = new PDO
		('mysql:host=localhost;dbname=MikeMonRoi','root','', 
		array(
			PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING, 
			PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'
			)
		);

	}catch(PDOExeption $e){
		echo 'Connexion impossible. Message error:' . $e;
	}


if($_SERVER['REQUEST_METHOD'] == 'POST')
{
	if(!empty($_POST))
	{

			$stmt = $pdo -> prepare("INSERT INTO voiture(marque, modele,annee,couleur,image) VALUES(:marque, :modele, :annee, :couleur, :image)");
			$stmt -> bindParam(':marque', $_POST["marque"]);
			$stmt -> bindParam(':modele', $_POST["modele"]);
			$stmt -> bindParam(':annee', $_POST["annee"]);
			$stmt -> bindParam(':couleur', $_POST["couleur"]);
			$stmt -> bindParam(':image', $_POST["image"]);
			$stmt -> execute();
	
	}
}