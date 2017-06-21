
$(function(){
	
		$("form").submit(function(e) {

			e.preventDefault();
			$.ajax({
				url: "http://localhost/ProjetMike/scripts/insert.php",
				method: "POST",
				data: $("form").serialize()
			})
			.done(function(dataPosts){
				$("#message_ajax").html("<div class='alert alert-success'><strong>Success! </strong>User register</div>");
				console.log("User register");
			})
			.fail(function(jqXHR, textStatus) {
				$("#message_ajax").html("<div class='alert alert-danger'><strong>Error! </strong>User not register</div>");
				console.log("User not register");
			});
		});

















	
})