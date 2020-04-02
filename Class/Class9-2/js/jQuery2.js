$(document).ready( function(){


$("#_hide").click(function(){
  $(".gridContent div:first-child p").hide(3000);
});

$("#_show").click(function(){
  $(".gridContent div:first-child p").show(3000);
});

$("#_toggle").click( function(){
  $(".gridContent div:nth-child(2) p").toggle();
});

$("#_html").click(function() {
  $(".gridContent div:nth-child(3) p").html("Hello <b>World</b>!");
});

$("#_css").click(function(){
  $(".box").css({"background-color":"lightblue","width":"100px","height":"100px"});
});


$("footer").mouseover(function(){
    $("footer p").html("Yeah! You're over me");
});

$("footer").mouseleave(function() {
  $("footer p").html("Comeback...=(");
});



// --------------------- Debug #4 ----------------------------


$("*Tog").click(function(){
$(".smallGridBug div:first-child p").toggle();
});

$("*hm").click(function(){
  $(".smallGridBug div:nth-child(3)p")._html({"<h1>Hello World </h1>"});
});

$("*ddd").click(function(){

$(".smallGridBug div:nth-child(3) p").css("color","lightblue");
}




});
