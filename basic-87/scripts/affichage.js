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
		jsonData = JSON.parse(jsonData);
		content = "";

		///// AFFICHAGE des marque+modele des voiures dans content
		jsonData.forEach(function(unElmtDeJsonData)
		{
 	 		var modeleAjaxElmt = unElmtDeJsonData.modele;
 	 		var marqueAjaxElmt = unElmtDeJsonData.marque;
			content += "<li>" + modeleAjaxElmt + " " + marqueAjaxElmt + "</li>";
		});

		//Ecriture du content dans la page html
		$("#right_columnl").find("ul").html(content);
	});

	request.fail(function(jqXHR, textStatus)
	{
	  alert( "Request sur la page affichage.php has failed: " + textStatus );
	});
});