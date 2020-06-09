
// 1. Change the href attribute to "www.codefactory.wien" for all links

$(document).ready(function(){
		$("a").attr("href", "http://www.codefactory.wien");

		});
// 2. Change the text color to red for the <code> tags

$(document).ready(function(){
		$("code").css({"color":"red"});
	})

// 3. Change the background color to "#2a7b90" for all <li> elements which are direct child of an <ol> element

$(document).ready(function(){
		$("ol li").css({"background-color":"#2a7b90"});
	})

// 4. Within the form, change the placeholder text to "Express your opinion"

$(document).ready(function(){
		$("textarea").val("Express your opinion");

		});

// 5. Replace all images on the page with this one "https://codefactory.wien/wp-content/themes/hestia/cf-images/big-jpg/1-frontend.jpg"



// 6. Change the background color to orange for all blockquote elements and the font-style to italic

// 7. At the top of the page, change the logo color "Simple" to black and "Blog" to white

// 8. Remove the "Oct 01, 2006" Date from the page

// 9. Extend the Sidebar Menu with 3 additional items "New Templates", "Order Template" and "Contact Us"

// 10. Change the sentence "Be not afraid of life. Believe that life is worth living, and your belief will help create the fact." into "When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop."