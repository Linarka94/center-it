import {tns} from 'tiny-slider/src/tiny-slider';

document.addEventListener('DOMContentLoaded', () => {
	tns({
		container: '.slider',
		items: 1,
		mouseDrag: true,
		controls: false,
		navPosition: "bottom",
		autoplay: true,
		autoplayButtonOutput: false,
	});
})
