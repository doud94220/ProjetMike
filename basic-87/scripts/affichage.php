<?php
	//Connexion à la base
    try
    {
        $dbh = new PDO('mysql:host=localhost;dbname=mikemonroi','root','');
        $dbh->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_WARNING);
    }
    catch(PDOException $e)
    {
        echo 'Connexion impossible à la base mikemonroi. Message error:'.$e;
    }

    // Gestion du get
    if($_SERVER['REQUEST_METHOD'] == 'GET') //Si on a accédé à la page en GET
    {
		if(empty($_GET)) //Si GET vide
		{
			$stmt = $dbh->prepare("SELECT * FROM voiture"); //On prépare une requete d'affichage de tous les voiture
		}

		//Execution de la requete
		$stmt->execute();

		// On affiche le resultat de la requete
		echo json_encode($stmt->fetchAll());
	}
?>