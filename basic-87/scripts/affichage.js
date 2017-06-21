$(function()
{
	var request = $.ajax(
	{
	  url: "http://localhost/J50-ProjetGitHub/ProjetMike/basic-87/scripts/affichage.php",
	  method: "GET",
	  dataype : "json"
	});
	 
	request.done(function(jsonData)
	{
		console.log('dans le done');
		jsonData = JSON.parse(jsonData);
		content = "";

		///// AFFICHAGE des marque+modele des voiures dans content
		jsonData.forEach(function(unElmtDeJsonData)
		{
 	 		var modeleAjaxElmt = unElmtDeJsonData.modele;
 	 		var marqueAjaxElmt = unElmtDeJsonData.marque;
			content += "<li>" + modeleAjaxElmt + " " + marqueAjaxElmt + "</li>";
		});

		console.log('toto');
		//Ecriture du content dans la page html
		$("#right_column").find('ul').html(content);
	});

	request.fail(function(jqXHR, textStatus)
	{
	  alert( "Request sur la page affichage.php has failed: " + textStatus );
	});
});