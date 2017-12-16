const burst2 = new mojs.Burst({
	radius: {0: 400},
	count: 9,
	children: {
		fill: 'white',
		strokeWidth: {2: 0},
		duration: 1000,
		opacity: {1: 0},
		radius: {5: 1}
	},
});

const burst3 = new mojs.Burst({
	radius: {0: 500},
	count: 30,
	angle: 30,
	children: {
		fill: ['pink', 'white', 'cyan', 'yellow'],
		duration: 1500,
		repeat: 999,
		delay: 'stagger( rand(0, 100) )',
		isSwirl: true,
		radius: {15: 5}
	}
});


// const circ_opt = {
	// shape: 'circle',
	// radius: {0: 200},
	// fill: 'none',
	// stroke: 'yellow',
	// duration: 3500,
	// opacity: {1: 0}
// }

const circ = new mojs.Shape({
	radius: {0: 200, easing: 'cubic.out'},
	fill: 'none',
	stroke: '#42eef4',
	strokeWidth: 40,
	duration: 200
}).then({
	radius: 80,
	scale: { to: 0, easing: 'quad.in' }
});

const circ2 = new mojs.Shape({
	radius: {0: 200, easing: 'cubic.out'},
	fill: 'none',
	stroke: '#cff6f7',
	strokeWidth: 50,
	duration: 200,
	delay: 200
}).then({
	radius: 80,
	scale: { to: 0, easing: 'quad.in'}
});

const card = new mojs.Shape({
	shape: 'rect',
	radius: 160,
	radiusY: 210,
	y: {[250]: -100},
	opacity: {0: 1},
	duration: 400,
	delay: 500,
	easing: 'cubic.out',
	fill: 'white'
});

$(document).ready(function(){
	var gift = document.querySelector('#gift');
	var giftbox = $('#gift');
	var squashCurve =  mojs.easing.path('M0,100.004963 C0,100.004963 25,147.596355 25,100.004961 C25,70.7741867 32.2461944,85.3230873 58.484375,94.8579105 C68.9280825,98.6531013 83.2611815,99.9999999 100,100');

	var gift_ready = new mojs.Tween({
		repeat: 999,
		duration: 1000,
		onUpdate: function (progress) {
			var squashProgress = squashCurve(progress)
			var scaleX = 1 - 2*squashProgress
			var scaleY = 1 + 2*squashProgress
		
			gift.style.transform = 'scaleX(' + scaleX + ') ' + 'scaleY(' + scaleY + ')';
		}
	});
	
	gift_ready.play();

// const circ2 = new mojs.Shape({...circ_opt, delay: 500});

	const timeline = new mojs.Timeline();
	timeline.add(circ, circ2, burst2, burst3, card);
	
	giftbox.click(function(){
		gift_ready.stop();
		giftbox.fadeOut('fast');
		timeline.play();
	});
});

