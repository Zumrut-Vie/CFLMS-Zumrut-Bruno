// $("form").submit(function(e) {

// 	e.preventDefault();
	
//Remove the form from the page

 $("form").submit(function(e) {

	e.preventDefault($("#myform").remove());
 });

	

//Create 5 new DIVs in the article element

$(document).ready(function() {
        for ( var i = 1; i <= 5; i++ ) {
        	$("article").append("<div></div>")
		} 
       
        });


//Within the input field change the value to "Search for..."

$(document).ready(function(){
		$("#msg").val("Search for ...");

		});

//Add a class name of "box" to each new DIV

$(document).ready(function(){
		$("div").addClass("box");;

		});

//Change the link to "www.codefactory.wien"	
	
$(document).ready(function(){
		$("a").attr("href", "http://www.codefactory.wien");

		});

