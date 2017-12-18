const html = new mojs.Html({
	el: '#cube',
	//x: '700%',
	y: {[-10]: 0},
	duration: 1000,
	repeat: 999,
	opacity: {1 : 0.5},
	isYoyo: true
}).play();

$(document).ready(function(){
	$('#loginSuccess').hide();
	$('.draggable').draggable();
	console.log("I am ready!");


	$li_1 = $('#list-item-1');
	$li_2 = $('#list-item-2');
	$li_3 = $('#list-item-3');

	features = ["Compete with others to get the most points and earn cool achievements! Top the leaderboard and earn cool badges along the way!", 
		"Events are always displayed to keep you updated. Get a fresh look on the the weekly schedule. If you can't think of an event, there's an option to let the app choose one for you!",
		"Every account lets you personalize your info. Your stats are always kept. Make it you!"
	]

	$li_1.click(function(){
		$li_2.removeClass('active');
		$li_3.removeClass('active');
		$(this).addClass('active');
		$('#card-context').html(features[0]);
	});

	$li_2.click(function(){
		$li_1.removeClass('active');
		$li_3.removeClass('active');
		$(this).addClass('active');
		$('#card-context').html(features[1]);
	});

	$li_3.click(function(){
		$li_1.removeClass('active');
		$li_2.removeClass('active');
		$(this).addClass('active');
		$('#card-context').html(features[2]);
	});
});