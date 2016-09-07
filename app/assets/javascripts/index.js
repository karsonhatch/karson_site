$(document).ready(function(){
	$('#fade').fadeIn(3000);
	$('#fade2').delay(1500).fadeIn(3000).fadeOut(1000);
	$('#fade3').delay(6000).fadeIn(3000)
	$('#fade4').delay(8000).fadeIn(3000)
	$('#fade5').delay(8000).fadeIn(3000)
	$('#cookie').click(function (){
		// cookies[:have_you_seen_me] = true;
		alert("this is supposed to slap a cookie in your vag, but it isn't doing it for one reason or another.")
	});
});