const html = new mojs.Html({
	el: '#cube',
	x: '700%',
	y: {[-10]: 0},
	duration: 1000,
	repeat: 999,
	opacity: {1 : 0.5},
	isYoyo: true
}).play();

$(document).ready(function(){
	$('#myModal').draggable();
	console.log("I am ready!");
	
	$('#submitBtn').click(function(){
		$('#myLoginData').submit();
	});
});