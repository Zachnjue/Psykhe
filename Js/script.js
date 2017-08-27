//custom js file

//front-end 
$(document).ready(function () {
	$("i.glyphicon-plus").click(function() {//add topic button functionality
    $("#addTopic").slideToggle();

    //tooltips
    $("[data-toggle='tooltip']").tooltip();
		$("[data-toggle='tooltip']").tooltip();
	});
});