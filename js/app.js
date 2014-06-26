// JavaScript Document
$(document).ready(function(e) {
    $("#shHomeLink, #shBackToTop").click(function() {
		scrollToMao("shTopArea");
	});
	
	$("#shAboutLink").click(function() {
		scrollToMao("shAboutArea");
	});
	
	$("#shContactLink, #shContactBtn").click(function() {
		scrollToMao("shContactArea");
	});
	
});

function scrollToMao(id) {
	$("html, body").animate({
		scrollTop: $("#"+id).offset().top + "px"
	}, {
		duration: 1000,
		easing: "swing"
	});
}