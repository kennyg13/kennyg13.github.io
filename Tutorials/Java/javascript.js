$(document).ready(function(){
var height = $("#menu").height();
$(".trunk").css("margin-top", height*2);
var marginTop = $(".lessons").css("margin-left");

console.log($(".trunk").height() + "," + $("#menu").height());

$(".lessons").css("margin-top", marginTop);
var hoverMenu = function(){
		var temp = height;
		var name = "";
		$(".Option div").hover(
			function(){
				for(var i = 1; i < $(this).children().size(); i++){
					name = "." + $(this).attr("class") + " ." + i;
					$(name).animate({
						"top": height
					}, [,1000]);
					
					height += temp;
				}
				height = temp;
			},
			function(){
				for(var i = $(this).children().size() - 1; i > 0; i--){
					name = "." + $(this).attr("class") + " ." + i;
					$(name).animate({
						"top": 0
					}, [,1000]);
					name = "";
				}
				height = temp;
			}
		);
}
var classShowing = 1;
var most = 2;
var hideLessons = function(b){
	var size = $(".lessons").children().size();
	var hidden = ".lessons ."
	var show = hidden + b;
	for(var k = 0; k < b; k++){
		var a = hidden + k;
		$(a).hide();
	}
	for(var i = b + 1; i < size; i++){
		var j = hidden + i;
		$(j).hide();
	}
	$(show).fadeIn(1000);
	classShowing = b;
	buttonHide();
}	
var next = function(){
	hideLessons(classShowing);
	$(".next").click(function(){
		classShowing += 1;
		hideLessons(classShowing);
	});
	$(".before").click(function(){
		classShowing -= 1;
		hideLessons(classShowing);
	});
}
var buttonHide = function(){
	if(classShowing == most){
		$(".next").hide()
		$(".before").show();
	}
	else if(classShowing == 1){
		$(".before").hide();
		$(".next").show();
	}
	else{
		$("#button").show();
	}
}
var tutorialWidth = function(){
	var width = $(".tutorials").width();
	var space = (width / 4);
	$(".icon").css("width", space);
}
var background = function(){
	var colors = ["#ffdb4d", "#009933", "#990033", "#66C2C2"];
	for(var i = 1; i < $(".tutorials").children().size() + 1; i++){
		//alert(i);
		var count = Math.random();
		var name = "." + i + " .icon";
		if(count > 0.75){
			$(name).css("background-color", colors[0]);
		}
		else if(count > 0.50){
			$(name).css("background-color", colors[1]);
		}
		else if(count > 0.25){
			$(name).css("background-color", colors[2]);
		}
		else{
			$(name).css("background-color", colors[3]);
		}
	}
}
hoverMenu();
buttonHide();
next();
tutorialWidth();
background();
});

