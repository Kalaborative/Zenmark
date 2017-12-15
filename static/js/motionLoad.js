$(document).ready(function(){
	
	const shiftCurve = mojs.easing.path( 'M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0' );
	const scaleCurveBase = mojs.easing.path( 'M0,100 C21.3776817,95.8051376 50,77.3262711 50,-700 C50,80.1708527 76.6222458,93.9449005 100,80' );
	const scaleCurve = (p) => { return 1 + scaleCurveBase(p)/10; };
	const baseSquash = mojs.easing.path('M 0 100.005 C 0 100.005 25 147.596 25 100.005 C 25 70.774 32.246 85.323 58.484 94.858 C 68.928 98.653 83.261 100 100 100');
	const nScaleCurve = (p) => { return 1 - scaleCurveBase(p)/10; };
	
	const bounceFormation = mojs.easing.path('M 0 100 C 2.454 97.827 16.346 108.826 36.754 1.519 C 57.224 55.717 71.84 1.519 73.458 0.418 C 82.759 14.694 89.679 2.185 91.391 0 C 95.988 6.634 100 0 100 0');
	
	const oval = new mojs.Shape({
		shape: 'circle',
		radius: 7,
		radiusX: 160,
		delay: 200,
		fill: {'none': 'black', curve: scaleCurve },
		stroke: {'black': 'black', curve: scaleCurve },
		scaleX: { 1 : 0.3, curve: scaleCurve },
		y: 60,
		duration: 500	
	}).play();

	class Glass extends mojs.CustomShape {
		getShape() { return '<defs><path d="M73.39 87.39L73.28 87.66L73.14 87.93L72.98 88.18L72.79 88.44L72.58 88.68L72.34 88.92L72.09 89.15L71.8 89.37L71.49 89.59L71.16 89.8L70.81 90L70.43 90.2L70.02 90.39L69.6 90.57L69.14 90.75L68.67 90.92L68.17 91.08L67.64 91.24L67.09 91.38L66.52 91.52L65.93 91.66L65.3 91.79L64.66 91.91L63.99 92.02L63.3 92.13L62.58 92.23L61.84 92.32L61.07 92.41L60.28 92.49L59.47 92.56L58.63 92.62L57.77 92.68L56.88 92.73L55.97 92.78L55.04 92.82L54.08 92.85L53.09 92.87L52.09 92.89L51.06 92.9L50 92.9L48.94 92.9L47.91 92.89L46.91 92.87L45.92 92.85L44.96 92.82L44.03 92.78L43.12 92.73L42.23 92.68L41.37 92.62L40.53 92.56L39.72 92.49L38.93 92.41L38.16 92.32L37.42 92.23L36.7 92.13L36.01 92.02L35.34 91.91L34.7 91.79L34.07 91.66L33.48 91.52L32.91 91.38L32.36 91.24L31.83 91.08L31.33 90.92L30.86 90.75L30.4 90.57L29.98 90.39L29.57 90.2L29.19 90L28.84 89.8L28.51 89.59L28.2 89.37L27.91 89.15L27.66 88.92L27.42 88.68L27.21 88.44L27.02 88.18L26.86 87.93L26.72 87.66L26.61 87.39L12.68 21.62L12.55 21.23L12.5 20.77L12.5 20.76L12.55 20.3L12.71 19.83L12.96 19.38L13.31 18.93L13.76 18.49L14.29 18.06L14.92 17.63L15.64 17.22L16.43 16.82L17.31 16.43L18.27 16.05L19.3 15.69L20.41 15.33L21.59 15L22.84 14.67L24.15 14.36L25.53 14.07L26.97 13.79L28.46 13.53L30.02 13.28L31.62 13.06L33.27 12.85L34.98 12.66L36.72 12.49L38.51 12.35L40.34 12.22L42.21 12.11L44.11 12.03L46.05 11.97L48.01 11.94L50 11.92L51.99 11.94L53.95 11.97L55.89 12.03L57.79 12.11L59.66 12.22L61.49 12.35L63.28 12.49L65.02 12.66L66.73 12.85L68.38 13.06L69.98 13.28L71.54 13.53L73.03 13.79L74.47 14.07L75.85 14.36L77.16 14.67L78.41 15L79.59 15.33L80.7 15.69L81.73 16.05L82.69 16.43L83.57 16.82L84.36 17.22L85.08 17.63L85.71 18.06L86.24 18.49L86.69 18.93L87.04 19.38L87.29 19.83L87.45 20.3L87.5 20.76L87.5 20.77L87.45 21.23L87.32 21.62L73.39 87.39ZM16.83 24.96L17.45 25.27L18.09 25.58L18.78 25.87L19.5 26.15L20.25 26.42L21.04 26.68L21.87 26.93L22.74 27.17L23.64 27.4L24.58 27.61L25.55 27.82L26.56 28.01L27.6 28.19L28.69 28.36L29.8 28.52L30.96 28.67L32.15 28.81L33.38 28.94L34.64 29.05L35.94 29.16L37.27 29.25L38.64 29.34L40.05 29.41L41.5 29.47L42.98 29.52L44.49 29.56L46.04 29.58L47.63 29.6L49.26 29.61L49.74 29.61L48.01 29.59L46.05 29.56L44.11 29.5L42.21 29.41L40.34 29.31L38.51 29.18L36.72 29.04L34.98 28.87L33.27 28.68L31.62 28.47L30.02 28.25L28.46 28L26.97 27.74L25.53 27.46L24.15 27.17L22.84 26.86L21.59 26.53L20.41 26.2L19.3 25.84L18.27 25.48L17.31 25.1L16.43 24.71L16.16 24.57L16.26 24.63L16.83 24.96ZM77.16 26.86L75.85 27.17L74.47 27.46L73.03 27.74L71.54 28L69.98 28.25L68.38 28.47L66.73 28.68L65.02 28.87L63.28 29.04L61.49 29.18L59.66 29.31L57.79 29.41L55.89 29.5L53.95 29.56L53.57 29.57L54.03 29.56L55.55 29.52L57.04 29.47L58.5 29.41L59.92 29.34L61.3 29.25L62.65 29.16L63.97 29.05L65.25 28.94L66.5 28.81L67.71 28.67L68.89 28.52L70.04 28.36L71.15 28.19L72.22 28.01L73.27 27.82L74.27 27.61L75.25 27.4L76.19 27.17L77.09 26.93L77.96 26.68L78.8 26.42L78.82 26.42L78.41 26.53L77.16 26.86Z" id="b3n1rudbiB"></path></defs><g><g><use xlink:href="#b3n1rudbiB" opacity="1" fill="#6fecff" fill-opacity="0.05"></use><g><use xlink:href="#b3n1rudbiB" opacity="1" fill-opacity="0" stroke="#3ce0cd" stroke-width="1" stroke-opacity="1"></use></g></g></g>'; }
	}
		
	mojs.addShape('glass', Glass);
	
	const glass = new mojs.Shape({
		shape: 'glass',
		radius: 70,
		fill: 'deeppink',
		stroke: 'aliceblue',
		scaleY: {0: 1},
		delay: 1000,
		duration: 500,
		scaleX: {1: 1, curve: shiftCurve}
	}).play();
	
	
	class iceCube extends mojs.CustomShape {
		getShape() {return '<defs><path d="M15.51 70.25L15.51 35.76L50 18.51L84.49 35.76L84.49 70.25L50 87.5L15.51 70.25Z" id="a5r47qo9yV"></path><path d="M50 53.01L84.49 35.76L50 18.51L15.51 35.76L50 53.01Z" id="a2YNJwER5U"></path><linearGradient id="gradientb4FkiGhpqb" gradientUnits="userSpaceOnUse" x1="50" y1="0" x2="50" y2="30.4"><stop style="stop-color: #ffffff;stop-opacity: 1" offset="0%"></stop><stop style="stop-color: #89fff5;stop-opacity: 1" offset="100%"></stop></linearGradient><path d="M15.51 70.25L50 87.5L50 53.01L15.51 35.76L15.51 70.25Z" id="bNwTo9Fn1"></path></defs><g><g><use xlink:href="#a5r47qo9yV" opacity="1" fill="#05fce8" fill-opacity="0.98"></use></g><g><use xlink:href="#a2YNJwER5U" opacity="1" fill="url(#gradientb4FkiGhpqb)"></use></g><g><use xlink:href="#bNwTo9Fn1" opacity="1" fill="#11e0cf" fill-opacity="1"></use></g></g>';}
	}
	
	// ice cube goes from -100 to 50
	// ice cube x goes from -20 to 20
	mojs.addShape('ice', iceCube);
	
	const OPTS = {
		shape: 'ice',
		radius: 10,
		x: 'rand(-20, 20)',
		y: {[-100]: 50, easing: bounceFormation},
		delay: 2000,
		duration: 1000
	}
	
	const ice = new mojs.Shape({
		...OPTS}).then({scale: 0, duration: 300}).play();
		
	const ice2 = new mojs.Shape({...OPTS, delay: 3000}).then({scale: 0, duration: 300}).play();

	const ice3 = new mojs.Shape({...OPTS, delay: 4000}).then({scale: 0, duration: 300}).play();
	
	const ice4 = new mojs.Shape({...OPTS, delay: 5000}).then({scale: 0, duration: 300}).play();
	
	const ice5 = new mojs.Shape({...OPTS, delay: 6000}).then({scale: 0, duration: 300}).play();
	
	const ice6 = new mojs.Shape({...OPTS, delay: 7000}).then({scale: 0, duration: 300}).play();
	
	const ice7 = new mojs.Shape({...OPTS, delay: 8000}).then({scale: 0, duration: 300}).play();
	
	const ice8 = new mojs.Shape({...OPTS, delay: 9000}).then({scale: 0, duration: 300}).play();
	
	const ice9 = new mojs.Shape({...OPTS, delay: 10000}).then({scale: 0, duration: 300, onComplete: function () { window.location.href = "/welcome" }}).play();
	
	
	var $loading = $('.loadtext');
	$loading.hide();
	setTimeout(function(){ $loading.fadeIn('slow'); }, 2000);
	
});