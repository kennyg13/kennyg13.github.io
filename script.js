$(document).ready(function(){
var hoverMenu = function(){
	var menu = $(".option div").height();
	var temp = menu;
	var name = "";
	$(".option div").hover(
		function(){
			for(var i = 1; i < $(this).children().size(); i++){
				name = "." + $(this).attr("class") + " ." + i;
				$(name).animate({
					"top": menu
				},{
					queue: false,
					duration: 250
				});
				
				menu += temp;
			}
			menu = temp;
		},
		function(){
			for(var i = $(this).children().size() - 1; i > 0; i--){
				name = "." + $(this).attr("class") + " ." + i;
				$(name).animate({
					"top": 0
				},{
					queue: false,
					duration: 250
				});
				name = "";
			}
			menu = temp;
		}
	);
}
var extraCrap = function(){
	$(".miniBio img").css("width", $(".body").width()/4);
	
	$(".title").css("height", $(".thumbnails").height());
	$(".title").css("width", $(".thumbnails").width());
	$(".source").css("height", $(".source").height()/2);
	$(".title").css("top", 0-$(".title").height());
	
	$(".Comments").css("margin-bottom", $(".miniBio img").height());

}
hoverMenu();
extraCrap();
});
