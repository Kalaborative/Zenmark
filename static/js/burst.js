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
	getShape() {return '<text x=0 y=25 font-size="8" class="awardtext"><tspan font-size="10" style="font-weight: bold">Airplane</tspan><tspan x=0 y=35 style="font-weight: bold">Your events really took off.</tspan> <tspan x=0 y=45>Congrats for going above and beyond!</tspan></text>';}
}

mojs.addShape('planetext', PlaneText);

class nextButton extends mojs.CustomShape {
	getShape() { return '<defs><path d="M88.14 36.74C91.93 36.74 95 39.8 95 43.59C95 47.53 95 52.47 95 56.41C95 60.2 91.93 63.27 88.14 63.27C71.52 63.27 28.48 63.27 11.86 63.27C8.07 63.27 5 60.2 5 56.41C5 52.47 5 47.53 5 43.59C5 39.8 8.07 36.74 11.86 36.74C28.48 36.74 71.52 36.74 88.14 36.74Z" id="amazURIF3"></path><path d="M88.14 36.74C91.93 36.74 95 39.8 95 43.59C95 47.53 95 52.47 95 56.41C95 60.2 91.93 63.27 88.14 63.27C78.33 63.27 51.39 63.27 40.49 63.27C39.99 63.27 39.75 62.65 40.12 62.31C45.75 57.2 60.92 43.41 66.38 38.44C67.58 37.34 69.16 36.74 70.79 36.74C75.63 36.74 84.17 36.74 88.14 36.74Z" id="c28SG0SM1"></path><path d="M62.29 61.82L74.94 50L62.29 38.18L62.29 45.67L41.95 45.67L41.95 54.35L62.29 54.35L62.29 61.82Z" id="c51VfPsPxN"></path></defs><g id="clickMe"><g><use xlink:href="#amazURIF3" opacity="1" fill="#5de92f" fill-opacity="1"></use></g><g><use xlink:href="#c28SG0SM1" opacity="1" fill="#77f363" fill-opacity="1"></use></g><g><use xlink:href="#c51VfPsPxN" opacity="1" fill="#41a81f" fill-opacity="1"></use></g></g>';}
}

mojs.addShape('next', nextButton);

class Sword extends mojs.CustomShape {
	getShape() { return '<defs><path d="M95 50C95 74.84 74.84 95 50 95C25.16 95 5 74.84 5 50C5 25.16 25.16 5 50 5C74.84 5 95 25.16 95 50Z" id="dRR52HFt"></path><path d="M38.52 68.12L61.48 68.12L61.48 71.94L38.52 71.94L38.52 68.12Z" id="dcEahEcki"></path><path d="M41.14 71.94L58.86 71.94L58.86 73.54L41.14 73.54L41.14 71.94Z" id="aamJPSxu7L"></path><path d="M43.75 73.54L56.25 73.54L56.25 91.42L43.75 91.42L43.75 73.54Z" id="eOiMcIaRG"></path><path d="M50 73.54L56.25 73.54L56.25 91.42L50 91.42L50 73.54Z" id="c49QyVlm6A"></path><path d="M89.42 50C89.42 71.76 71.76 89.42 50 89.42C28.24 89.42 10.58 71.76 10.58 50C10.58 28.24 28.24 10.58 50 10.58C71.76 10.58 89.42 28.24 89.42 50Z" id="c1p3PH6wga"></path><mask id="maskd5nIaIOmtC" x="4.58" y="4.58" width="90.84" height="90.84" maskUnits="userSpaceOnUse"><rect x="4.58" y="4.58" width="90.84" height="90.84" fill="white"></rect><use xlink:href="#c1p3PH6wga" opacity="1" fill="black"></use></mask><path d="M50 70.03L56.25 70.03L56.25 19.58L50 14.35L50 70.03Z" id="c4zhR6Bg2"></path><path d="M50 70.03L43.75 70.03L43.75 19.58L50 14.35L50 70.03Z" id="b1ur5fBJe"></path><path d="M41.14 64.13L41.14 27.85" id="d72mt9rlUf"></path><path d="M58.86 64.13L58.86 27.85" id="aYWBBFiLE"></path></defs><g><g><use xlink:href="#dRR52HFt" opacity="1" fill="#f83909" fill-opacity="1"></use></g><g><use xlink:href="#dcEahEcki" opacity="1" fill="#ffffff" fill-opacity="1"></use></g><g><use xlink:href="#aamJPSxu7L" opacity="1" fill="#3c1c14" fill-opacity="1"></use></g><g><use xlink:href="#eOiMcIaRG" opacity="1" fill="#531708" fill-opacity="1"></use></g><g><use xlink:href="#c49QyVlm6A" opacity="1" fill="#35130b" fill-opacity="1"></use></g><g><g mask="url(#maskd5nIaIOmtC)"><use xlink:href="#c1p3PH6wga" opacity="1" fill-opacity="0" stroke="#cc2900" stroke-width="6" stroke-opacity="1"></use></g></g><g><use xlink:href="#c4zhR6Bg2" opacity="1" fill="#e3d8d6" fill-opacity="1"></use></g><g><use xlink:href="#b1ur5fBJe" opacity="1" fill="#ccc1be" fill-opacity="1"></use></g><g><g><use xlink:href="#d72mt9rlUf" opacity="1" fill-opacity="0" stroke="#ffffff" stroke-width="1" stroke-opacity="1"></use></g></g><g><g><use xlink:href="#aYWBBFiLE" opacity="1" fill-opacity="0" stroke="#ffffff" stroke-width="1" stroke-opacity="1"></use></g></g></g>';}
}

mojs.addShape('sword', Sword);

class SwordText extends mojs.CustomShape {
	getShape() {return '<text x=0 y=25 font-size="8" class="awardtext"><tspan font-size="10" style="font-weight: bold">Sword</tspan> <tspan x=0 y=35 style="font-weight: bold">Your events really brought out the </tspan><tspan x=0 y=45 style="font-weight: bold"> competitive spirit!</tspan><tspan x=0 y=55>But will you come out on top?</tspan></text>';}
}

mojs.addShape('swordtext', SwordText);

class Hourglass extends mojs.CustomShape {
	getShape() {return '<defs><path d="M95 50C95 74.84 74.84 95 50 95C25.16 95 5 74.84 5 50C5 25.16 25.16 5 50 5C74.84 5 95 25.16 95 50Z" id="a42gcSzmyu"></path><path d="M89.42 50C89.42 71.76 71.76 89.42 50 89.42C28.24 89.42 10.58 71.76 10.58 50C10.58 28.24 28.24 10.58 50 10.58C71.76 10.58 89.42 28.24 89.42 50Z" id="c37NyLtzLK"></path><mask id="maska8ifR8ibB" x="4.58" y="4.58" width="90.84" height="90.84" maskUnits="userSpaceOnUse"><rect x="4.58" y="4.58" width="90.84" height="90.84" fill="white"></rect><use xlink:href="#c37NyLtzLK" opacity="1" fill="black"></use></mask><path d="M35.4 70.59C35.36 65.75 36.88 60.96 39.96 56.23C40.52 55.36 41.31 54.36 42.32 53.21C43.92 51.41 44.24 48.81 43.12 46.68C42.67 45.82 41.84 44.6 40.63 43C37.11 38.34 35.36 33.81 35.4 29.41" id="bcDS5biIp"></path><path d="M64.6 70.59C64.64 65.75 63.12 60.96 60.04 56.23C59.48 55.36 58.69 54.36 57.68 53.21C56.08 51.41 55.76 48.81 56.88 46.68C57.33 45.82 58.16 44.6 59.37 43C62.89 38.34 64.64 33.81 64.6 29.41" id="l57xQPXZlF"></path><path d="M35.4 66.35L35.4 32.1" id="b28t5Thq9o"></path><path d="M36.55 64.39L64.12 64.39C64.55 65.85 64.81 66.76 64.92 67.13C65.09 67.72 64.65 68.31 64.03 68.31C60.3 68.31 50.98 68.31 36.07 68.31L36.55 64.39Z" id="jdhcMNBx7"></path><path d="M64.12 66.35L64.12 32.1" id="eCdyePgw9"></path><path d="M61 29.41C62.47 29.41 63.46 30.92 62.87 32.27C62.28 33.62 60.81 36.99 58.44 42.39C55.15 45.57 53.1 47.55 52.27 48.35C51.02 49.56 49.03 49.56 47.77 48.36C46.94 47.56 44.87 45.57 41.55 42.39C38.99 36.97 37.38 33.58 36.74 32.23C36.12 30.92 37.08 29.41 38.53 29.41C40.82 29.41 44.56 29.41 46.85 29.41C46.85 29.41 53.1 29.41 53.1 29.41C55.31 29.41 58.79 29.41 61 29.41Z" id="ehCGgHWxw"></path><path d="M35.4 25.16L64.6 25.16L64.6 32.1L35.4 32.1L35.4 25.16Z" id="cWazn6ZA2"></path><path d="M35.3 25.16L64.5 25.16L64.5 29.09L35.3 29.09L35.3 25.16Z" id="c1wsSjRf9v"></path><path d="M35.4 66.35L64.6 66.35L64.6 73.29L35.4 73.29L35.4 66.35Z" id="a30KhLu4d"></path><path d="M41.55 49.23C41.55 50.31 40.68 51.19 39.59 51.19C38.51 51.19 37.63 50.31 37.63 49.23C37.63 48.14 38.51 47.26 39.59 47.26C40.68 47.26 41.55 48.14 41.55 49.23Z" id="f8MNybg0n"></path><clipPath id="clipb1vVYyF5Zy"><use xlink:href="#f8MNybg0n" opacity="1"></use></clipPath><path d="M62.37 49.23C62.37 50.31 61.49 51.19 60.41 51.19C59.32 51.19 58.44 50.31 58.44 49.23C58.44 48.14 59.32 47.26 60.41 47.26C61.49 47.26 62.37 48.14 62.37 49.23Z" id="i7kbpKptE7"></path><clipPath id="clipf3NQSFVXbu"><use xlink:href="#i7kbpKptE7" opacity="1"></use></clipPath><path d="M50 64.39L50 47.26" id="b3m77PKEpd"></path><path d="M35.4 68.63L64.6 68.63L64.6 72.56L35.4 72.56L35.4 68.63Z" id="e1aunlOM0J"></path></defs><g><g><use xlink:href="#a42gcSzmyu" opacity="1" fill="#79d206" fill-opacity="1"></use></g><g><g mask="url(#maska8ifR8ibB)"><use xlink:href="#c37NyLtzLK" opacity="1" fill-opacity="0" stroke="#60a409" stroke-width="6" stroke-opacity="1"></use></g></g><g><g><use xlink:href="#bcDS5biIp" opacity="1" fill-opacity="0" stroke="#304711" stroke-width="1" stroke-opacity="1"></use></g></g><g><g><use xlink:href="#l57xQPXZlF" opacity="1" fill-opacity="0" stroke="#304711" stroke-width="1" stroke-opacity="1"></use></g></g><g><g><use xlink:href="#b28t5Thq9o" opacity="1" fill-opacity="0" stroke="#deeace" stroke-width="1" stroke-opacity="1"></use></g></g><g><use xlink:href="#jdhcMNBx7" opacity="1" fill="#f3d821" fill-opacity="1"></use></g><g><g><use xlink:href="#eCdyePgw9" opacity="1" fill-opacity="0" stroke="#deeace" stroke-width="1" stroke-opacity="1"></use></g></g><g><use xlink:href="#ehCGgHWxw" opacity="1" fill="#f3d821" fill-opacity="1"></use></g><g><use xlink:href="#cWazn6ZA2" opacity="1" fill="#512903" fill-opacity="1"></use><g><use xlink:href="#cWazn6ZA2" opacity="1" fill-opacity="0" stroke="#080808" stroke-width="1" stroke-opacity="1"></use></g></g><g><use xlink:href="#c1wsSjRf9v" opacity="1" fill="#a4a089" fill-opacity="1"></use></g><g><use xlink:href="#a30KhLu4d" opacity="1" fill="#512903" fill-opacity="1"></use><g><use xlink:href="#a30KhLu4d" opacity="1" fill-opacity="0" stroke="#080808" stroke-width="1" stroke-opacity="1"></use></g></g><g><g clip-path="url(#clipb1vVYyF5Zy)"><use xlink:href="#f8MNybg0n" opacity="1" fill-opacity="0" stroke="#ffffff" stroke-width="2" stroke-opacity="1"></use></g></g><g><g clip-path="url(#clipf3NQSFVXbu)"><use xlink:href="#i7kbpKptE7" opacity="1" fill-opacity="0" stroke="#ffffff" stroke-width="2" stroke-opacity="1"></use></g></g><g><g><use xlink:href="#b3m77PKEpd" opacity="1" fill-opacity="0" stroke="#f3d821" stroke-width="1" stroke-opacity="1"></use></g></g><g><use xlink:href="#e1aunlOM0J" opacity="1" fill="#a4a089" fill-opacity="1"></use></g></g>';}
}

mojs.addShape('hourglass', Hourglass);

class HourglassText extends mojs.CustomShape {
	getShape() {return '<text x=0 y=25 font-size="8" class="awardtext"><tspan font-size="10" style="font-weight: bold">Hourglass</tspan><tspan x=0 y=35 style="font-weight: bold">Your passion is longlasting.</tspan> <tspan x=0 y=45>And so are your events.</tspan></text>';}
}

mojs.addShape('hourglasstext', HourglassText);

class Umbrella extends mojs.CustomShape {
	getShape() {return '<defs><path d="M95 50C95 74.84 74.84 95 50 95C25.16 95 5 74.84 5 50C5 25.16 25.16 5 50 5C74.84 5 95 25.16 95 50Z" id="aL6v2A9o"></path><path d="M89.42 50C89.42 71.76 71.76 89.42 50 89.42C28.24 89.42 10.58 71.76 10.58 50C10.58 28.24 28.24 10.58 50 10.58C71.76 10.58 89.42 28.24 89.42 50Z" id="a2S3kmHbJ9"></path><mask id="maskb2gaKlokiH" x="4.58" y="4.58" width="90.84" height="90.84" maskUnits="userSpaceOnUse"><rect x="4.58" y="4.58" width="90.84" height="90.84" fill="white"></rect><use xlink:href="#a2S3kmHbJ9" opacity="1" fill="black"></use></mask><path d="M61.36 38.43L50 16.94" id="ijjjsKkUS"></path><path d="M42.2 67.71C43.62 69.87 44.5 71.23 44.85 71.77C46.86 74.86 50.94 75.81 54.11 73.95C55.25 73.28 52.73 74.76 53.8 74.13C57.18 72.14 58.45 67.88 56.71 64.37C55.55 62.02 52.64 56.16 48 46.77" id="bglTeSvY8"></path><path d="M30.66 59.31C32.34 58.5 34.34 58.12 36.67 58.17C40.29 54.06 44.38 50.91 48.96 48.7C53.53 46.49 58.58 45.23 64.11 44.92C65.51 42.62 67.18 41.01 69.14 40.06C71.09 39.12 73.33 38.85 75.84 39.25C70.63 31.99 64.98 27.47 58.89 25.67C52.8 23.88 46.28 24.83 39.31 28.51C32.96 31.08 28.73 35.24 26.61 41C24.5 46.75 24.5 54.09 26.61 63.03C27.64 61.36 28.99 60.12 30.66 59.31Z" id="a1UpR0fade"></path><path d="M34.41 50L23.05 28.51" id="b6geHk2SY"></path><path d="M51.75 31.9C55.76 34.57 59.93 38.79 64.25 44.54C58.13 44.37 52.87 45.35 48.47 47.51C44.08 49.66 40.14 52.98 36.67 57.46C35.68 49.6 35.39 43.26 35.78 38.43C36.16 33.61 37.64 30.3 40.2 28.51C43.89 28.1 47.74 29.23 51.75 31.9Z" id="a2WcCEOeQX"></path><path d="M37.86 22.89C38.4 22.64 39.04 22.86 39.29 23.39C39.95 24.75 41.44 27.86 42.1 29.22C42.36 29.75 42.13 30.39 41.6 30.65C41.02 30.93 40.25 31.3 39.67 31.58C39.13 31.83 38.49 31.61 38.24 31.08C37.58 29.72 36.09 26.61 35.43 25.25C35.17 24.72 35.4 24.08 35.93 23.82C36.51 23.54 37.28 23.17 37.86 22.89Z" id="c1rudTuzm"></path><path d="M43.55 37.31L32.19 15.82" id="iKUqIyj1r"></path></defs><g><g><use xlink:href="#aL6v2A9o" opacity="1" fill="#77b3d4" fill-opacity="1"></use></g><g><g mask="url(#maskb2gaKlokiH)"><use xlink:href="#a2S3kmHbJ9" opacity="1" fill-opacity="0" stroke="#5088a7" stroke-width="6" stroke-opacity="1"></use></g></g><g><g><use xlink:href="#ijjjsKkUS" opacity="1" fill-opacity="0" stroke="#77d4af" stroke-width="1" stroke-opacity="1"></use></g></g><g><g><filter id="shadow10680255" x="34.2" y="38.77" width="33.28" height="44.13" filterUnits="userSpaceOnUse" primitiveUnits="userSpaceOnUse"><feFlood></feFlood><feComposite in2="SourceAlpha" operator="in"></feComposite><feGaussianBlur stdDeviation="0"></feGaussianBlur><feOffset dx="2" dy="0" result="afterOffset"></feOffset><feFlood flood-color="#000000" flood-opacity="0.5"></feFlood><feComposite in2="afterOffset" operator="in"></feComposite><feMorphology operator="dilate" radius="1"></feMorphology><feComposite in2="SourceAlpha" operator="out"></feComposite></filter><path d="M42.2 67.71C43.62 69.87 44.5 71.23 44.85 71.77C46.86 74.86 50.94 75.81 54.11 73.95C55.25 73.28 52.73 74.76 53.8 74.13C57.18 72.14 58.45 67.88 56.71 64.37C55.55 62.02 52.64 56.16 48 46.77" id="b3TTwULlaw" fill="none" stroke="white" filter="url(#shadow10680255)"></path></g><g><use xlink:href="#bglTeSvY8" opacity="1" fill-opacity="0" stroke="#324b59" stroke-width="4" stroke-opacity="1"></use></g></g><g><g><filter id="shadow5570266" x="17.03" y="16.79" width="67.81" height="56.23" filterUnits="userSpaceOnUse" primitiveUnits="userSpaceOnUse"><feFlood></feFlood><feComposite in2="SourceAlpha" operator="in"></feComposite><feGaussianBlur stdDeviation="0"></feGaussianBlur><feOffset dx="1" dy="2" result="afterOffset"></feOffset><feFlood flood-color="#000000" flood-opacity="0.38"></feFlood><feComposite in2="afterOffset" operator="in"></feComposite><feMorphology operator="dilate" radius="1"></feMorphology><feComposite in2="SourceAlpha" operator="out"></feComposite></filter><path d="M30.66 59.31C32.34 58.5 34.34 58.12 36.67 58.17C40.29 54.06 44.38 50.91 48.96 48.7C53.53 46.49 58.58 45.23 64.11 44.92C65.51 42.62 67.18 41.01 69.14 40.06C71.09 39.12 73.33 38.85 75.84 39.25C70.63 31.99 64.98 27.47 58.89 25.67C52.8 23.88 46.28 24.83 39.31 28.51C32.96 31.08 28.73 35.24 26.61 41C24.5 46.75 24.5 54.09 26.61 63.03C27.64 61.36 28.99 60.12 30.66 59.31Z" id="h7YhaVeh3" fill="white" fill-opacity="1" filter="url(#shadow5570266)"></path></g><use xlink:href="#a1UpR0fade" opacity="1" fill="#e04b6c" fill-opacity="1"></use><g><use xlink:href="#a1UpR0fade" opacity="1" fill-opacity="0" stroke="#324b59" stroke-width="2" stroke-opacity="1"></use></g></g><g><g><use xlink:href="#b6geHk2SY" opacity="1" fill-opacity="0" stroke="#77d4af" stroke-width="1" stroke-opacity="1"></use></g></g><g><use xlink:href="#a2WcCEOeQX" opacity="1" fill="#c5e4f9" fill-opacity="1"></use><g><use xlink:href="#a2WcCEOeQX" opacity="1" fill-opacity="0" stroke="#324b59" stroke-width="1" stroke-opacity="1"></use></g></g><g><use xlink:href="#c1rudTuzm" opacity="1" fill="#324b59" fill-opacity="1"></use></g><g><g><use xlink:href="#iKUqIyj1r" opacity="1" fill-opacity="0" stroke="#77d4af" stroke-width="1" stroke-opacity="1"></use></g></g></g>';}
}

mojs.addShape('umbrella', Umbrella);

class UmbrellaText extends mojs.CustomShape {
	getShape() {return '<text x=0 y=25 font-size="8" class="awardtext"><tspan font-size="10" style="font-weight: bold">Umbrella</tspan><tspan x=0 y=35 style="font-weight: bold">Amidst all those trolls, </tspan><tspan x=0 y=45 style="font-weight: bold"> you kept your cool!</tspan><tspan x=0 y=55>Your events were fail-proof.</tspan></text>';}
}

mojs.addShape('umbrellatext', UmbrellaText);

class Dove extends mojs.CustomShape {
	getShape() {return '<defs><path d="M95 50C95 74.84 74.84 95 50 95C25.16 95 5 74.84 5 50C5 25.16 25.16 5 50 5C74.84 5 95 25.16 95 50Z" id="c1jHj2IoLA"></path><path d="M89.42 50C89.42 71.76 71.76 89.42 50 89.42C28.24 89.42 10.58 71.76 10.58 50C10.58 28.24 28.24 10.58 50 10.58C71.76 10.58 89.42 28.24 89.42 50Z" id="bVISRy3YJ"></path><mask id="maskfc1Xj4VZM" x="4.58" y="4.58" width="90.84" height="90.84" maskUnits="userSpaceOnUse"><rect x="4.58" y="4.58" width="90.84" height="90.84" fill="white"></rect><use xlink:href="#bVISRy3YJ" opacity="1" fill="black"></use></mask><path d="M60.39 22.84C65.5 22.84 69.64 27.05 69.64 32.25C69.64 32.44 69.64 32.64 69.62 32.83C73.31 33.62 76.03 36.26 76.03 39.41C76.03 39.41 76.03 39.41 76.03 39.41C76.03 43.17 72.13 46.22 67.33 46.22C65.14 46.22 47.69 46.22 45.51 46.22C40.7 46.22 36.81 43.17 36.81 39.41C36.81 39.41 36.81 39.41 36.81 39.41C36.81 36.12 39.77 33.38 43.71 32.74C44.06 29.18 47.02 26.4 50.61 26.4C51.4 26.4 52.16 26.53 52.87 26.78C54.54 24.4 57.29 22.84 60.39 22.84Z" id="aWf8XWk54"></path><path d="M38.47 17.11L39.47 17.79L40.35 18.54L41.11 19.37L41.75 20.27L42.28 21.24L42.68 22.29L42.97 23.41L43.14 24.6L43.16 25.15L43.3 25.15L43.36 24.53L43.42 23.62L43.45 22.69L43.45 21.76L43.43 20.82L43.38 19.88L43.3 18.92L43.19 17.97L44.21 18.23L45.08 18.65L45.82 19.23L46.41 19.96L46.87 20.85L47.19 21.89L47.37 23.09L47.41 24.44L47.37 25.07L47.39 25.07L47.41 25.01L47.66 24.43L47.89 23.83L48.12 23.21L48.33 22.58L48.96 23.21L49.49 23.83L49.91 24.43L50.22 25.01L50.22 25.02L50.3 25.01L50.75 25.72L51.17 26.43L51.56 27.14L51.91 27.87L52.23 28.61L52.52 29.35L52.77 30.1L52.99 30.86L53.18 31.62L53.34 32.4L53.47 33.18L53.56 33.97L53.62 34.77L53.65 35.57L53.64 36.39L53.61 37.21L53.54 38.04L53.43 38.88L53.29 39.73L53.11 40.6L52.9 41.47L52.65 42.35L52.37 43.24L52.05 44.14L51.69 45.05L51.31 45.97L50.88 46.9L50.42 47.84L49.92 48.79L49.39 49.74L48.82 50.71L48.22 51.69L47.81 51.65L47.4 51.61L46.99 51.58L46.59 51.56L46.18 51.54L45.77 51.52L45.37 51.51L44.97 51.51L44.56 51.51L44.16 51.52L43.76 51.54L43.36 51.56L42.96 51.58L42.56 51.61L42.16 51.65L41.76 51.69L41.36 51.74L40.97 51.8L40.57 51.86L40.18 51.92L39.78 51.99L39.39 52.07L39 52.15L38.6 52.24L38.21 52.34L37.82 52.44L37.43 52.54L37.39 52.55L37.46 52.63L37.88 52.5L38.42 52.36L39 52.24L39.64 52.14L40.32 52.05L41.05 51.98L41.82 51.92L42.65 51.88L43.52 51.86L44.45 51.85L45.09 51.86L45.74 51.88L46.38 51.92L47.03 51.98L47.68 52.04L48.35 52.11L49.03 52.2L49.73 52.29L50.45 52.38L51.2 52.48L51.98 52.57L52.79 52.67L53.64 52.77L54.53 52.86L55.47 52.95L56.45 53.03L57.49 53.1L58.59 53.16L59.3 53.19L60.01 53.2L60.71 53.21L61.41 53.21L62.11 53.19L62.79 53.17L63.48 53.13L64.15 53.08L64.83 53.02L65.49 52.95L66.15 52.87L66.81 52.78L67.46 52.67L68.11 52.56L68.75 52.43L69.38 52.3L70.01 52.15L70.64 51.99L70.68 51.98L70.72 51.98L70.76 51.98L70.8 51.99L70.84 52L70.88 52.01L70.92 52.03L70.95 52.05L70.98 52.07L70.99 52.08L71.21 52L71.98 51.65L72.74 51.23L73.47 50.75L74.19 50.21L74.89 49.61L75.56 48.94L76.22 48.21L76.86 47.41L77.47 46.55L78.07 45.63L78.65 44.65L79.2 43.6L79.74 42.49L79.91 43.88L80 45.2L80.02 46.45L79.96 47.64L79.82 48.75L79.61 49.79L79.32 50.77L78.95 51.67L78.51 52.51L77.98 53.29L77.34 54.02L76.59 54.71L75.74 55.36L74.78 55.96L73.71 56.52L72.54 57.03L72.27 57.13L76.45 55.89L75.8 57.51L75.13 58.89L74.43 60.05L73.72 60.97L72.98 61.67L72.14 62.18L71.1 62.57L69.86 62.84L69.5 62.87L69.43 63.29L69.42 63.35L69.41 63.41L69.4 63.47L69.38 63.53L69.37 63.58L69.35 63.64L69.33 63.7L69.31 63.76L69.29 63.82L69.26 63.87L69.24 63.93L69.21 63.98L69.18 64.04L69.15 64.09L69.12 64.14L69.09 64.19L69.06 64.25L69.02 64.3L68.74 64.68L68.45 65.04L68.15 65.39L67.83 65.73L67.5 66.05L67.16 66.36L66.8 66.65L66.44 66.93L66.06 67.2L65.67 67.45L65.27 67.69L64.85 67.91L64.42 68.12L63.99 68.32L63.53 68.5L63.07 68.67L62.59 68.83L62.11 68.97L61.33 69.17L60.59 69.34L59.88 69.49L59.19 69.61L58.53 69.7L57.88 69.77L57.25 69.82L56.63 69.85L56.02 69.85L55.42 69.83L54.81 69.79L54.21 69.73L53.6 69.65L52.98 69.55L52.35 69.43L51.71 69.29L51.04 69.14L50.36 68.97L49.35 68.69L48.37 68.38L47.4 68.03L46.46 67.64L45.53 67.22L44.63 66.77L43.75 66.28L43.23 65.96L43.24 66L43.45 66.55L43.69 67.12L43.94 67.72L44.22 68.33L44.52 68.96L44.85 69.59L45.21 70.24L45.59 70.88L46 71.52L46.43 72.16L46.9 72.78L47.39 73.39L47.92 73.98L48.47 74.55L48.85 74.91L49.24 75.26L49.65 75.6L50.07 75.94L50.52 76.28L50.98 76.6L51.46 76.93L51.96 77.24L52.47 77.55L53 77.86L53.55 78.16L54.11 78.45L54.69 78.74L55.29 79.02L55.91 79.3L56.54 79.57L57.19 79.84L57.86 80.1L58.55 80.36L58.56 80.36L58.57 80.36L58.57 80.37L58.58 80.38L58.58 80.39L58.59 80.39L58.59 80.4L58.59 80.41L58.59 80.42L58.59 80.43L58.58 80.44L58.58 80.44L58.57 80.45L58.57 80.46L58.56 80.46L58.55 80.47L58.54 80.47L58.53 80.47L58.52 80.47L57.46 80.38L56.42 80.28L55.39 80.16L54.39 80.04L53.41 79.91L52.45 79.77L51.51 79.63L50.59 79.47L49.69 79.3L48.81 79.12L47.96 78.94L47.12 78.74L46.3 78.54L45.51 78.32L44.74 78.1L43.98 77.87L43.25 77.62L42.54 77.37L41.85 77.11L40.82 76.69L39.85 76.24L38.92 75.77L38.05 75.27L37.22 74.76L36.43 74.24L35.69 73.71L34.99 73.17L34.33 72.62L33.72 72.07L33.15 71.53L32.61 70.99L32.12 70.46L31.66 69.95L31.24 69.45L30.85 68.96L30.5 68.5L30.18 68.07L29.9 67.66L29.52 67.09L29.15 66.5L28.79 65.91L28.45 65.3L28.12 64.69L27.8 64.07L27.5 63.44L27.21 62.8L26.94 62.15L26.68 61.49L26.43 60.82L26.2 60.15L25.98 59.46L25.77 58.76L25.58 58.06L25.4 57.34L25.23 56.62L25.08 55.88L24.94 55.14L24.93 55.06L24.61 54.57L24.35 54.03L24.17 53.45L24.06 52.83L24.03 52.5L23.99 52.17L23.96 51.82L23.92 51.46L23.89 51.1L23.86 50.73L23.82 50.35L23.79 49.96L23.76 49.56L23.72 49.16L23.69 48.74L23.59 48.32L23.49 47.85L23.38 47.33L23.27 46.76L23.21 46.43L22.97 46.01L22.88 45.49L22.66 44.96L22.34 44.33L21.95 43.74L21.5 43.17L20.99 42.63L20.42 42.12L19.8 41.63L19.11 41.17L18.36 40.74L18.83 40.03L19.55 39.47L20.51 39.06L21.72 38.8L23.17 38.69L24.26 38.74L24.39 38.71L24.9 38.7L25.41 38.81L25.75 38.98L26 39.03L27.19 39.5L28.22 40.17L29.11 41.04L28.96 41.18L29.66 41.51L30.6 42.38L31.22 43.48L31.44 44.74L31.43 44.83L31.51 44.74L31.96 44.25L32.38 43.76L32.79 43.25L33.19 42.74L33.56 42.21L33.93 41.68L34.27 41.13L34.61 40.58L34.92 40.02L35.22 39.45L35.5 38.87L35.77 38.28L36.03 37.68L36.26 37.07L36.48 36.45L36.69 35.82L36.89 35.18L37.07 34.53L37.24 33.87L37.39 33.21L37.54 32.53L37.67 31.85L37.79 31.15L37.89 30.45L37.98 29.73L38.06 29.01L38.13 28.27L38.19 27.53L38.23 26.78L38.25 26.2L38.2 25.3L38.11 24.35L38 23.4L37.86 22.46L37.69 21.52L37.5 20.59L37.28 19.66L37.03 18.73L36.76 17.8L36.46 16.88L36.13 15.96L37.36 16.5L38.47 17.11Z" id="b1YDhxCyZi"></path><path d="M23.36 40.68C23.36 41 23.06 41.25 22.68 41.25C22.31 41.25 22 41 22 40.68C22 40.36 22.31 40.1 22.68 40.1C23.06 40.1 23.36 40.36 23.36 40.68Z" id="c4WYf5R4nQ"></path><clipPath id="clipa607FUXKQJ"><use xlink:href="#c4WYf5R4nQ" opacity="1"></use></clipPath></defs><g><g><use xlink:href="#c1jHj2IoLA" opacity="1" fill="#76f5e6" fill-opacity="1"></use></g><g><g mask="url(#maskfc1Xj4VZM)"><use xlink:href="#bVISRy3YJ" opacity="1" fill-opacity="0" stroke="#57cbbd" stroke-width="6" stroke-opacity="1"></use></g></g><g><use xlink:href="#aWf8XWk54" opacity="1" fill="#21e1cb" fill-opacity="1"></use></g><g><g><filter id="shadow13629060" x="-2.64" y="-5.04" width="107.66" height="110.51" filterUnits="userSpaceOnUse" primitiveUnits="userSpaceOnUse"><feFlood></feFlood><feComposite in2="SourceAlpha" operator="in"></feComposite><feGaussianBlur stdDeviation="2.45"></feGaussianBlur><feOffset dx="4" dy="4" result="afterOffset"></feOffset><feFlood flood-color="#000000" flood-opacity="0.5"></feFlood><feComposite in2="afterOffset" operator="in"></feComposite><feMorphology operator="dilate" radius="0"></feMorphology><feComposite in2="SourceAlpha" operator="out"></feComposite></filter><path d="M38.47 17.11L39.47 17.79L40.35 18.54L41.11 19.37L41.75 20.27L42.28 21.24L42.68 22.29L42.97 23.41L43.14 24.6L43.16 25.15L43.3 25.15L43.36 24.53L43.42 23.62L43.45 22.69L43.45 21.76L43.43 20.82L43.38 19.88L43.3 18.92L43.19 17.97L44.21 18.23L45.08 18.65L45.82 19.23L46.41 19.96L46.87 20.85L47.19 21.89L47.37 23.09L47.41 24.44L47.37 25.07L47.39 25.07L47.41 25.01L47.66 24.43L47.89 23.83L48.12 23.21L48.33 22.58L48.96 23.21L49.49 23.83L49.91 24.43L50.22 25.01L50.22 25.02L50.3 25.01L50.75 25.72L51.17 26.43L51.56 27.14L51.91 27.87L52.23 28.61L52.52 29.35L52.77 30.1L52.99 30.86L53.18 31.62L53.34 32.4L53.47 33.18L53.56 33.97L53.62 34.77L53.65 35.57L53.64 36.39L53.61 37.21L53.54 38.04L53.43 38.88L53.29 39.73L53.11 40.6L52.9 41.47L52.65 42.35L52.37 43.24L52.05 44.14L51.69 45.05L51.31 45.97L50.88 46.9L50.42 47.84L49.92 48.79L49.39 49.74L48.82 50.71L48.22 51.69L47.81 51.65L47.4 51.61L46.99 51.58L46.59 51.56L46.18 51.54L45.77 51.52L45.37 51.51L44.97 51.51L44.56 51.51L44.16 51.52L43.76 51.54L43.36 51.56L42.96 51.58L42.56 51.61L42.16 51.65L41.76 51.69L41.36 51.74L40.97 51.8L40.57 51.86L40.18 51.92L39.78 51.99L39.39 52.07L39 52.15L38.6 52.24L38.21 52.34L37.82 52.44L37.43 52.54L37.39 52.55L37.46 52.63L37.88 52.5L38.42 52.36L39 52.24L39.64 52.14L40.32 52.05L41.05 51.98L41.82 51.92L42.65 51.88L43.52 51.86L44.45 51.85L45.09 51.86L45.74 51.88L46.38 51.92L47.03 51.98L47.68 52.04L48.35 52.11L49.03 52.2L49.73 52.29L50.45 52.38L51.2 52.48L51.98 52.57L52.79 52.67L53.64 52.77L54.53 52.86L55.47 52.95L56.45 53.03L57.49 53.1L58.59 53.16L59.3 53.19L60.01 53.2L60.71 53.21L61.41 53.21L62.11 53.19L62.79 53.17L63.48 53.13L64.15 53.08L64.83 53.02L65.49 52.95L66.15 52.87L66.81 52.78L67.46 52.67L68.11 52.56L68.75 52.43L69.38 52.3L70.01 52.15L70.64 51.99L70.68 51.98L70.72 51.98L70.76 51.98L70.8 51.99L70.84 52L70.88 52.01L70.92 52.03L70.95 52.05L70.98 52.07L70.99 52.08L71.21 52L71.98 51.65L72.74 51.23L73.47 50.75L74.19 50.21L74.89 49.61L75.56 48.94L76.22 48.21L76.86 47.41L77.47 46.55L78.07 45.63L78.65 44.65L79.2 43.6L79.74 42.49L79.91 43.88L80 45.2L80.02 46.45L79.96 47.64L79.82 48.75L79.61 49.79L79.32 50.77L78.95 51.67L78.51 52.51L77.98 53.29L77.34 54.02L76.59 54.71L75.74 55.36L74.78 55.96L73.71 56.52L72.54 57.03L72.27 57.13L76.45 55.89L75.8 57.51L75.13 58.89L74.43 60.05L73.72 60.97L72.98 61.67L72.14 62.18L71.1 62.57L69.86 62.84L69.5 62.87L69.43 63.29L69.42 63.35L69.41 63.41L69.4 63.47L69.38 63.53L69.37 63.58L69.35 63.64L69.33 63.7L69.31 63.76L69.29 63.82L69.26 63.87L69.24 63.93L69.21 63.98L69.18 64.04L69.15 64.09L69.12 64.14L69.09 64.19L69.06 64.25L69.02 64.3L68.74 64.68L68.45 65.04L68.15 65.39L67.83 65.73L67.5 66.05L67.16 66.36L66.8 66.65L66.44 66.93L66.06 67.2L65.67 67.45L65.27 67.69L64.85 67.91L64.42 68.12L63.99 68.32L63.53 68.5L63.07 68.67L62.59 68.83L62.11 68.97L61.33 69.17L60.59 69.34L59.88 69.49L59.19 69.61L58.53 69.7L57.88 69.77L57.25 69.82L56.63 69.85L56.02 69.85L55.42 69.83L54.81 69.79L54.21 69.73L53.6 69.65L52.98 69.55L52.35 69.43L51.71 69.29L51.04 69.14L50.36 68.97L49.35 68.69L48.37 68.38L47.4 68.03L46.46 67.64L45.53 67.22L44.63 66.77L43.75 66.28L43.23 65.96L43.24 66L43.45 66.55L43.69 67.12L43.94 67.72L44.22 68.33L44.52 68.96L44.85 69.59L45.21 70.24L45.59 70.88L46 71.52L46.43 72.16L46.9 72.78L47.39 73.39L47.92 73.98L48.47 74.55L48.85 74.91L49.24 75.26L49.65 75.6L50.07 75.94L50.52 76.28L50.98 76.6L51.46 76.93L51.96 77.24L52.47 77.55L53 77.86L53.55 78.16L54.11 78.45L54.69 78.74L55.29 79.02L55.91 79.3L56.54 79.57L57.19 79.84L57.86 80.1L58.55 80.36L58.56 80.36L58.57 80.36L58.57 80.37L58.58 80.38L58.58 80.39L58.59 80.39L58.59 80.4L58.59 80.41L58.59 80.42L58.59 80.43L58.58 80.44L58.58 80.44L58.57 80.45L58.57 80.46L58.56 80.46L58.55 80.47L58.54 80.47L58.53 80.47L58.52 80.47L57.46 80.38L56.42 80.28L55.39 80.16L54.39 80.04L53.41 79.91L52.45 79.77L51.51 79.63L50.59 79.47L49.69 79.3L48.81 79.12L47.96 78.94L47.12 78.74L46.3 78.54L45.51 78.32L44.74 78.1L43.98 77.87L43.25 77.62L42.54 77.37L41.85 77.11L40.82 76.69L39.85 76.24L38.92 75.77L38.05 75.27L37.22 74.76L36.43 74.24L35.69 73.71L34.99 73.17L34.33 72.62L33.72 72.07L33.15 71.53L32.61 70.99L32.12 70.46L31.66 69.95L31.24 69.45L30.85 68.96L30.5 68.5L30.18 68.07L29.9 67.66L29.52 67.09L29.15 66.5L28.79 65.91L28.45 65.3L28.12 64.69L27.8 64.07L27.5 63.44L27.21 62.8L26.94 62.15L26.68 61.49L26.43 60.82L26.2 60.15L25.98 59.46L25.77 58.76L25.58 58.06L25.4 57.34L25.23 56.62L25.08 55.88L24.94 55.14L24.93 55.06L24.61 54.57L24.35 54.03L24.17 53.45L24.06 52.83L24.03 52.5L23.99 52.17L23.96 51.82L23.92 51.46L23.89 51.1L23.86 50.73L23.82 50.35L23.79 49.96L23.76 49.56L23.72 49.16L23.69 48.74L23.59 48.32L23.49 47.85L23.38 47.33L23.27 46.76L23.21 46.43L22.97 46.01L22.88 45.49L22.66 44.96L22.34 44.33L21.95 43.74L21.5 43.17L20.99 42.63L20.42 42.12L19.8 41.63L19.11 41.17L18.36 40.74L18.83 40.03L19.55 39.47L20.51 39.06L21.72 38.8L23.17 38.69L24.26 38.74L24.39 38.71L24.9 38.7L25.41 38.81L25.75 38.98L26 39.03L27.19 39.5L28.22 40.17L29.11 41.04L28.96 41.18L29.66 41.51L30.6 42.38L31.22 43.48L31.44 44.74L31.43 44.83L31.51 44.74L31.96 44.25L32.38 43.76L32.79 43.25L33.19 42.74L33.56 42.21L33.93 41.68L34.27 41.13L34.61 40.58L34.92 40.02L35.22 39.45L35.5 38.87L35.77 38.28L36.03 37.68L36.26 37.07L36.48 36.45L36.69 35.82L36.89 35.18L37.07 34.53L37.24 33.87L37.39 33.21L37.54 32.53L37.67 31.85L37.79 31.15L37.89 30.45L37.98 29.73L38.06 29.01L38.13 28.27L38.19 27.53L38.23 26.78L38.25 26.2L38.2 25.3L38.11 24.35L38 23.4L37.86 22.46L37.69 21.52L37.5 20.59L37.28 19.66L37.03 18.73L36.76 17.8L36.46 16.88L36.13 15.96L37.36 16.5L38.47 17.11Z" id="ec92ppu" fill="white" fill-opacity="1" filter="url(#shadow13629060)"></path></g><use xlink:href="#b1YDhxCyZi" opacity="0.54" fill="#c2e4e0" fill-opacity="1"></use><g><filter id="shadow1823137" x="9.36" y="6.96" width="80.66" height="83.51" filterUnits="userSpaceOnUse" primitiveUnits="userSpaceOnUse"><feFlood></feFlood><feComposite in2="SourceAlpha" operator="out"></feComposite><feGaussianBlur stdDeviation="1"></feGaussianBlur><feOffset dx="1" dy="1" result="afterOffset"></feOffset><feFlood flood-color="#ffffff" flood-opacity="0.8"></feFlood><feComposite in2="afterOffset" operator="in"></feComposite><feMorphology operator="dilate" radius="1"></feMorphology><feComposite in2="SourceAlpha" operator="in"></feComposite></filter><path d="M38.47 17.11L39.47 17.79L40.35 18.54L41.11 19.37L41.75 20.27L42.28 21.24L42.68 22.29L42.97 23.41L43.14 24.6L43.16 25.15L43.3 25.15L43.36 24.53L43.42 23.62L43.45 22.69L43.45 21.76L43.43 20.82L43.38 19.88L43.3 18.92L43.19 17.97L44.21 18.23L45.08 18.65L45.82 19.23L46.41 19.96L46.87 20.85L47.19 21.89L47.37 23.09L47.41 24.44L47.37 25.07L47.39 25.07L47.41 25.01L47.66 24.43L47.89 23.83L48.12 23.21L48.33 22.58L48.96 23.21L49.49 23.83L49.91 24.43L50.22 25.01L50.22 25.02L50.3 25.01L50.75 25.72L51.17 26.43L51.56 27.14L51.91 27.87L52.23 28.61L52.52 29.35L52.77 30.1L52.99 30.86L53.18 31.62L53.34 32.4L53.47 33.18L53.56 33.97L53.62 34.77L53.65 35.57L53.64 36.39L53.61 37.21L53.54 38.04L53.43 38.88L53.29 39.73L53.11 40.6L52.9 41.47L52.65 42.35L52.37 43.24L52.05 44.14L51.69 45.05L51.31 45.97L50.88 46.9L50.42 47.84L49.92 48.79L49.39 49.74L48.82 50.71L48.22 51.69L47.81 51.65L47.4 51.61L46.99 51.58L46.59 51.56L46.18 51.54L45.77 51.52L45.37 51.51L44.97 51.51L44.56 51.51L44.16 51.52L43.76 51.54L43.36 51.56L42.96 51.58L42.56 51.61L42.16 51.65L41.76 51.69L41.36 51.74L40.97 51.8L40.57 51.86L40.18 51.92L39.78 51.99L39.39 52.07L39 52.15L38.6 52.24L38.21 52.34L37.82 52.44L37.43 52.54L37.39 52.55L37.46 52.63L37.88 52.5L38.42 52.36L39 52.24L39.64 52.14L40.32 52.05L41.05 51.98L41.82 51.92L42.65 51.88L43.52 51.86L44.45 51.85L45.09 51.86L45.74 51.88L46.38 51.92L47.03 51.98L47.68 52.04L48.35 52.11L49.03 52.2L49.73 52.29L50.45 52.38L51.2 52.48L51.98 52.57L52.79 52.67L53.64 52.77L54.53 52.86L55.47 52.95L56.45 53.03L57.49 53.1L58.59 53.16L59.3 53.19L60.01 53.2L60.71 53.21L61.41 53.21L62.11 53.19L62.79 53.17L63.48 53.13L64.15 53.08L64.83 53.02L65.49 52.95L66.15 52.87L66.81 52.78L67.46 52.67L68.11 52.56L68.75 52.43L69.38 52.3L70.01 52.15L70.64 51.99L70.68 51.98L70.72 51.98L70.76 51.98L70.8 51.99L70.84 52L70.88 52.01L70.92 52.03L70.95 52.05L70.98 52.07L70.99 52.08L71.21 52L71.98 51.65L72.74 51.23L73.47 50.75L74.19 50.21L74.89 49.61L75.56 48.94L76.22 48.21L76.86 47.41L77.47 46.55L78.07 45.63L78.65 44.65L79.2 43.6L79.74 42.49L79.91 43.88L80 45.2L80.02 46.45L79.96 47.64L79.82 48.75L79.61 49.79L79.32 50.77L78.95 51.67L78.51 52.51L77.98 53.29L77.34 54.02L76.59 54.71L75.74 55.36L74.78 55.96L73.71 56.52L72.54 57.03L72.27 57.13L76.45 55.89L75.8 57.51L75.13 58.89L74.43 60.05L73.72 60.97L72.98 61.67L72.14 62.18L71.1 62.57L69.86 62.84L69.5 62.87L69.43 63.29L69.42 63.35L69.41 63.41L69.4 63.47L69.38 63.53L69.37 63.58L69.35 63.64L69.33 63.7L69.31 63.76L69.29 63.82L69.26 63.87L69.24 63.93L69.21 63.98L69.18 64.04L69.15 64.09L69.12 64.14L69.09 64.19L69.06 64.25L69.02 64.3L68.74 64.68L68.45 65.04L68.15 65.39L67.83 65.73L67.5 66.05L67.16 66.36L66.8 66.65L66.44 66.93L66.06 67.2L65.67 67.45L65.27 67.69L64.85 67.91L64.42 68.12L63.99 68.32L63.53 68.5L63.07 68.67L62.59 68.83L62.11 68.97L61.33 69.17L60.59 69.34L59.88 69.49L59.19 69.61L58.53 69.7L57.88 69.77L57.25 69.82L56.63 69.85L56.02 69.85L55.42 69.83L54.81 69.79L54.21 69.73L53.6 69.65L52.98 69.55L52.35 69.43L51.71 69.29L51.04 69.14L50.36 68.97L49.35 68.69L48.37 68.38L47.4 68.03L46.46 67.64L45.53 67.22L44.63 66.77L43.75 66.28L43.23 65.96L43.24 66L43.45 66.55L43.69 67.12L43.94 67.72L44.22 68.33L44.52 68.96L44.85 69.59L45.21 70.24L45.59 70.88L46 71.52L46.43 72.16L46.9 72.78L47.39 73.39L47.92 73.98L48.47 74.55L48.85 74.91L49.24 75.26L49.65 75.6L50.07 75.94L50.52 76.28L50.98 76.6L51.46 76.93L51.96 77.24L52.47 77.55L53 77.86L53.55 78.16L54.11 78.45L54.69 78.74L55.29 79.02L55.91 79.3L56.54 79.57L57.19 79.84L57.86 80.1L58.55 80.36L58.56 80.36L58.57 80.36L58.57 80.37L58.58 80.38L58.58 80.39L58.59 80.39L58.59 80.4L58.59 80.41L58.59 80.42L58.59 80.43L58.58 80.44L58.58 80.44L58.57 80.45L58.57 80.46L58.56 80.46L58.55 80.47L58.54 80.47L58.53 80.47L58.52 80.47L57.46 80.38L56.42 80.28L55.39 80.16L54.39 80.04L53.41 79.91L52.45 79.77L51.51 79.63L50.59 79.47L49.69 79.3L48.81 79.12L47.96 78.94L47.12 78.74L46.3 78.54L45.51 78.32L44.74 78.1L43.98 77.87L43.25 77.62L42.54 77.37L41.85 77.11L40.82 76.69L39.85 76.24L38.92 75.77L38.05 75.27L37.22 74.76L36.43 74.24L35.69 73.71L34.99 73.17L34.33 72.62L33.72 72.07L33.15 71.53L32.61 70.99L32.12 70.46L31.66 69.95L31.24 69.45L30.85 68.96L30.5 68.5L30.18 68.07L29.9 67.66L29.52 67.09L29.15 66.5L28.79 65.91L28.45 65.3L28.12 64.69L27.8 64.07L27.5 63.44L27.21 62.8L26.94 62.15L26.68 61.49L26.43 60.82L26.2 60.15L25.98 59.46L25.77 58.76L25.58 58.06L25.4 57.34L25.23 56.62L25.08 55.88L24.94 55.14L24.93 55.06L24.61 54.57L24.35 54.03L24.17 53.45L24.06 52.83L24.03 52.5L23.99 52.17L23.96 51.82L23.92 51.46L23.89 51.1L23.86 50.73L23.82 50.35L23.79 49.96L23.76 49.56L23.72 49.16L23.69 48.74L23.59 48.32L23.49 47.85L23.38 47.33L23.27 46.76L23.21 46.43L22.97 46.01L22.88 45.49L22.66 44.96L22.34 44.33L21.95 43.74L21.5 43.17L20.99 42.63L20.42 42.12L19.8 41.63L19.11 41.17L18.36 40.74L18.83 40.03L19.55 39.47L20.51 39.06L21.72 38.8L23.17 38.69L24.26 38.74L24.39 38.71L24.9 38.7L25.41 38.81L25.75 38.98L26 39.03L27.19 39.5L28.22 40.17L29.11 41.04L28.96 41.18L29.66 41.51L30.6 42.38L31.22 43.48L31.44 44.74L31.43 44.83L31.51 44.74L31.96 44.25L32.38 43.76L32.79 43.25L33.19 42.74L33.56 42.21L33.93 41.68L34.27 41.13L34.61 40.58L34.92 40.02L35.22 39.45L35.5 38.87L35.77 38.28L36.03 37.68L36.26 37.07L36.48 36.45L36.69 35.82L36.89 35.18L37.07 34.53L37.24 33.87L37.39 33.21L37.54 32.53L37.67 31.85L37.79 31.15L37.89 30.45L37.98 29.73L38.06 29.01L38.13 28.27L38.19 27.53L38.23 26.78L38.25 26.2L38.2 25.3L38.11 24.35L38 23.4L37.86 22.46L37.69 21.52L37.5 20.59L37.28 19.66L37.03 18.73L36.76 17.8L36.46 16.88L36.13 15.96L37.36 16.5L38.47 17.11Z" id="byaaETDhI" fill="white" fill-opacity="1" filter="url(#shadow1823137)"></path></g></g><g><use xlink:href="#c4WYf5R4nQ" opacity="1" fill="#000000" fill-opacity="1"></use><g clip-path="url(#clipa607FUXKQJ)"><use xlink:href="#c4WYf5R4nQ" opacity="1" fill-opacity="0" stroke="#080909" stroke-width="2" stroke-opacity="1"></use></g></g></g>';}
}


mojs.addShape('dove', Dove);

class DoveText extends mojs.CustomShape {
	getShape() {return '<text x=0 y=25 font-size="8" class="awardtext"><tspan font-size="10" style="font-weight: bold">Dove</tspan><tspan x=0 y=35 style="font-weight: bold">Your events are nice and peaceful. </tspan><tspan x=0 y=45>Ahh, peace and quiet.</tspan></text>';}
}

mojs.addShape('dovetext', DoveText);

const text_OPTS = {	
	x: -50,
	delay: 1000,
	duration: 500,
	opacity: {0: 1},
	fill: 'black',
	scale: 2
}
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

const planetext = new mojs.Shape({...text_OPTS,
	shape: 'planetext', 
	fill: 'blue'
});

const sword = new mojs.Shape({
	shape: 'sword',
	radius: {0: 100},
	easing: 'elastic.out',
	delay: 800,
	y: -200
});

const swordtext = new mojs.Shape({...text_OPTS,
	shape: 'swordtext',
	fill: 'orange'
});

const hourglass = new mojs.Shape({
	shape: 'hourglass',
	radius: {0: 100},
	easing: 'elastic.out',
	delay: 800,
	y: -200
});

const hourglasstext = new mojs.Shape({...text_OPTS,
	shape: 'hourglasstext',
	fill: 'green'
});

const umbrella = new mojs.Shape({
	shape: 'umbrella',
	radius: {0: 100},
	easing: 'elastic.out',
	delay: 800,
	y: -200
});

const umbrellatext = new mojs.Shape({...text_OPTS,
	shape: 'umbrellatext',
	fill: '#215dbc'
});

const dove = new mojs.Shape({
	shape: 'dove',
	radius: {0: 100},
	easing: 'elastic.out',
	delay: 800,
	y: -200
});

const dovetext = new mojs.Shape({...text_OPTS,
	shape: 'dovetext',
	fill: '#3acaf2'
});


// position from -80 to 80
const nextB = new mojs.Shape({
	shape: 'next',
	x: {[-80]: 80},
	y: 80,
	delay: 3000,
	easing: 'quad.in'
});

function choose (choices) {
	var index = Math.floor(Math.random() * choices.length);
	return choices[index];
}

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
	const achievements = new mojs.Timeline();
	achievement = $('#gift').attr('rewardpick');
	console.log(achievement);
	if (achievement == "randomReward") {
		achievement = choose(['plane', 'sword', 'hourglass', 'umbrella', 'dove']);
	}
	switch (achievement) {
		case "plane":
			achievements.add(plane, planetext);
			break;
		case "sword":
			achievements.add(sword, swordtext);
			break;
		case "hourglass":
			achievements.add(hourglass, hourglasstext);
			break;
		case "umbrella":
			achievements.add(umbrella, umbrellatext);
			break;
		case "dove":
			achievements.add(dove, dovetext);
	}

	timeline.add(circ, circ2, burst2, burst3, card, achievements, nextB);
	
	giftbox.click(function(){
		gift_ready.stop();
		giftbox.fadeOut('fast');
		giftaudio.play();
		timeline.play();
	});

	document.getElementById('clickMe').addEventListener('click', function(){
        $.ajax({
            url: '/removegift',
            type: 'POST',
            contentType: 'application/json',
            dataType: 'json'
        }).done(function(){
        	var gift = $("#gift").attr('rewardpick');
        	var payload = {"reward": gift};
        	$.ajax({
        		type: 'POST',
        		url: '/rewardprofile',
        		data: JSON.stringify(payload),
        		dataType: 'json',
        		contentType: 'application/json'
        	}).done(function(){
        		console.log("AJAX Request success");
            	window.location.href = "/welcome";
        	});
        }).fail(function(){
            console.log('AJAX Request failed');
        });
	});
});

