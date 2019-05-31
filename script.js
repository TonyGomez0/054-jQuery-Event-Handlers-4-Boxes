$(".top-left").click(function(){
$(".top-left").css("background-color","green");
$(".top-left").text("Thank you for clicking on me!");
});

$(".top-right").dblclick(function(){
$(".top-right").css("background-color","blue");
$(".top-right").text("Thank you for double-clicking on me!");
});

$(".bottom-left").hover(function(){
$(".bottom-left").css("background-color","yellow");
$(".bottom-left").text("Thank you for hovering on me!");
});

$(".bottom-right").mouseenter(function(){
$(".bottom-right").css("background-color","red");
$(".bottom-right").text("Thank you for visiting!");
});
$(".bottom-right").mouseleave(function(){
$(".bottom-right").css("background-color","white");
$(".bottom-right").text("come again soon!");
});

