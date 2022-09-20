$(document).ready(function() {

	function fullHeight(){
		var winHeight = $(window).height();
		$('.start_s').height(winHeight);
	};
	fullHeight();
	$(window).resize(function(){
		fullHeight();
	});
	
});