$(document).ready(function(){
  	var contentWindowHeight=$(document).height() - ($("#header_container").height() + $("footer").height() + 185);
  	$(".col-md-10").css("height",contentWindowHeight);
  });