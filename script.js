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
	var height = $("#menu").height();
	var width = $(".body").width();
	var fontsize = $("#bFooter_part").height();
	$(".body").css("margin-top", height*2);
	$(".miniBio img").css("width", width/4);
	
	var add = $(".Comments").css("margin-top");
	var checks=["#notepad", "#geany", "#eclipse"];
	
	$(".title").css("height", $(".thumbnails").height());
	$(".title").css("width", $(".thumbnails").width());
	$(".source").css("height", $(".source").height()/2);
	$(".title").css("top", 0-$(".title").height());
	
	$(".Comments").css("margin-top", $(".body").height()/2 - $(".Comments").height()/2);
	
	$("#bFooter").css("top", getDocHeight());
	$("#bFooter").css("width", $("#bFooter").width()-10);
	
	$(".bFooter_part").css("left", $(".bFooter").width() - $(".bFooter_part").width());
}
function getDocHeight(){
	var max = $(".body").outerHeight(true) + 1;
    return max;
}
function Fade(){
		$(".source").hover(
			function(){
				$(this).children(".title").animate({
					"opacity": 1,
				},{
					queue: false,
					duration: 250
				});
			},function(){
				$(this).children(".title").animate({
					"opacity": 0,
				},{
					queue: false,
					duration: 250
				});
			}
		
		);
}
Fade();
hoverMenu();
extraCrap();
});
