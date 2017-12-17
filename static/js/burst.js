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


class Airplane extends mojs.CustomShape {
	getShape() { return '<defs><path d="M95 50C95 74.84 74.84 95 50 95C25.16 95 5 74.84 5 50C5 25.16 25.16 5 50 5C74.84 5 95 25.16 95 50Z" id="e1Lweip9W"></path><path d="M89.42 50C89.42 71.76 71.76 89.42 50 89.42C28.24 89.42 10.58 71.76 10.58 50C10.58 28.24 28.24 10.58 50 10.58C71.76 10.58 89.42 28.24 89.42 50Z" id="aCltXuADW"></path><mask id="maskaj47x3PMU" x="4.58" y="4.58" width="90.84" height="90.84" maskUnits="userSpaceOnUse"><rect x="4.58" y="4.58" width="90.84" height="90.84" fill="white"></rect><use xlink:href="#aCltXuADW" opacity="1" fill="black"></use></mask><path d="M76.1 31.69L77.24 32.28L78.26 33.1L79.13 34.14L79.76 35.33L80.14 36.58L80.26 37.87L80.13 39.14L79.77 40.36L79.17 41.5L78.35 42.52L77.31 43.38L76.13 44.02L75.96 44.07L75.9 44.14L75.77 44.3L75.63 44.45L75.48 44.59L75.32 44.72L75.15 44.84L53.12 59.65L53.12 59.65L50.21 61.61L49.83 61.86L49.41 62.15L48.94 62.46L48.69 62.63L48.43 62.8L47.9 63.16L47.62 63.35L47.05 63.73L46.77 63.92L46.18 64.32L45.59 64.71L45.01 65.1L43.88 65.87L43.6 66.05L43.34 66.23L35.12 71.76L34.86 71.93L34.62 72.09L34.4 72.24L33.77 72.66L33.77 72.66L31.01 74.52L16.14 52.41L34.63 56.03L67.72 33.79L67.89 33.68L68.08 33.58L68.26 33.49L68.45 33.41L68.65 33.35L68.73 33.33L68.84 33.19L69.88 32.33L71.07 31.69L72.32 31.32L73.61 31.2L74.88 31.32L76.1 31.69Z" id="evxI1u9Hx"></path><path d="M38.12 63.1L34.32 57.41L34.32 57.41L32.52 54.71L43.6 47.32L45.4 50.02L56.48 42.62L60.28 48.31L38.12 63.1Z" id="bLMXbj6SP"></path><path d="M75.88 31.77L76.97 32.39L77.93 33.23L78.73 34.27L78.81 34.43L73.31 37.83L69.81 32.17L69.81 32.17L70.99 31.59L72.22 31.27L73.47 31.2L74.7 31.37L75.88 31.77Z" id="btW5vWkDF"></path><path d="M78.82 47.84L32.52 79.88" id="c17JkRx9u9"></path></defs><g><g><use xlink:href="#e1Lweip9W" opacity="1" fill="#00dbe0" fill-opacity="1"></use></g><g><use xlink:href="#aCltXuADW" opacity="1" fill="#00dbe0" fill-opacity="1"></use><g mask="url(#maskaj47x3PMU)"><use xlink:href="#aCltXuADW" opacity="1" fill-opacity="0" stroke="#bcfdff" stroke-width="6" stroke-opacity="1"></use></g></g><g><use xlink:href="#evxI1u9Hx" opacity="1" fill="#1ba4e1" fill-opacity="0.76"></use></g><g><use xlink:href="#bLMXbj6SP" opacity="1" fill="#5270e8" fill-opacity="0.77"></use></g><g><use xlink:href="#btW5vWkDF" opacity="1" fill="#5270e8" fill-opacity="0.89"></use></g><g><g><use xlink:href="#c17JkRx9u9" opacity="1" fill-opacity="0" stroke="#ffffff" stroke-width="3" stroke-opacity="1"></use></g></g></g>'; }
}

mojs.addShape('airplane', Airplane);

class PlaneText extends mojs.CustomShape {
	getShape() {return '<text x=0 y=35 font-size="8" class="awardtext"><tspan style="font-weight: bold">Your events really took off.</tspan> <tspan x=0 y=45>Congrats for going above and beyond!</tspan></text>';}
}

mojs.addShape('planetext', PlaneText);

class nextButton extends mojs.CustomShape {
	getShape() { return '<defs><path d="M88.14 36.74C91.93 36.74 95 39.8 95 43.59C95 47.53 95 52.47 95 56.41C95 60.2 91.93 63.27 88.14 63.27C71.52 63.27 28.48 63.27 11.86 63.27C8.07 63.27 5 60.2 5 56.41C5 52.47 5 47.53 5 43.59C5 39.8 8.07 36.74 11.86 36.74C28.48 36.74 71.52 36.74 88.14 36.74Z" id="amazURIF3"></path><path d="M88.14 36.74C91.93 36.74 95 39.8 95 43.59C95 47.53 95 52.47 95 56.41C95 60.2 91.93 63.27 88.14 63.27C78.33 63.27 51.39 63.27 40.49 63.27C39.99 63.27 39.75 62.65 40.12 62.31C45.75 57.2 60.92 43.41 66.38 38.44C67.58 37.34 69.16 36.74 70.79 36.74C75.63 36.74 84.17 36.74 88.14 36.74Z" id="c28SG0SM1"></path><path d="M62.29 61.82L74.94 50L62.29 38.18L62.29 45.67L41.95 45.67L41.95 54.35L62.29 54.35L62.29 61.82Z" id="c51VfPsPxN"></path></defs><g id="clickMe"><g><use xlink:href="#amazURIF3" opacity="1" fill="#5de92f" fill-opacity="1"></use></g><g><use xlink:href="#c28SG0SM1" opacity="1" fill="#77f363" fill-opacity="1"></use></g><g><use xlink:href="#c51VfPsPxN" opacity="1" fill="#41a81f" fill-opacity="1"></use></g></g>';}
}

mojs.addShape('next', nextButton);

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

const plane = new mojs.Shape({
	shape: 'airplane',
	radius: {0: 100},
	easing: 'elastic.out',
	delay: 800,
	y: -200
});

const planetext = new mojs.Shape({
	shape: 'planetext',
	x: -50,
	delay: 1000,
	duration: 500,
	opacity: {0: 1},
	fill: 'black',
	scale: 2
});

// position from -80 to 80
const nextB = new mojs.Shape({
	shape: 'next',
	x: {[-80]: 80},
	y: 80,
	delay: 3000,
	easing: 'quad.in'
});

$(document).ready(function(){
	var gift = document.querySelector('#gift');
	var giftbox = $('#gift');
	var giftaudio = document.getElementById('giftaudio');
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
	timeline.add(circ, circ2, burst2, burst3, card, plane, planetext, nextB);
	
	giftbox.click(function(){
		gift_ready.stop();
		giftbox.fadeOut('fast');
		giftaudio.play();
		timeline.play();
	});

	document.getElementById('clickMe').addEventListener('click', function(){
		window.location.href = "/";
	});
});

