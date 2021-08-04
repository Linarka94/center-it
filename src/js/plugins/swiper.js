import Swiper from "swiper/swiper-bundle";

window.addEventListener("DOMContentLoaded", function () {

	const featuresSwiper =  new Swiper(".featuresSwiper", {
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			767: {
				effect: "coverflow",
				centeredSlides: true,
				slidesPerView: 2,
				spaceBetween: 36,
				coverflowEffect: {
					rotate: 20,
					stretch: 5,
					depth: 200,
					modifier: 1,
					slideShadows: false,
				},
			}
		}
	});

	if (window.matchMedia('(max-width: 767px)').matches) {

		function startSwiper(swiperContainerSelector) {
			const swiperContainer = document.querySelector(swiperContainerSelector);
			const swiperWrapper = swiperContainer.querySelector("div");
			const swiperSlides = Array.from(swiperWrapper.children);
			const swiperPaginator = document.createElement('div');
			swiperPaginator.classList.add('swiper-pagination');

			swiperContainer.className = 'swiper-container';
			swiperContainer.classList.add(swiperContainerSelector.slice(1));
			swiperWrapper.className = 'swiper-wrapper';
			swiperSlides.forEach((slide) => {
				slide.classList.add('swiper-slide');
			});

			swiperContainer.append(swiperPaginator);

			const options = {
					init: false,
					autoHeight: true,
					loop: true,
					autoplay: {
						delay: 5000,
						disableOnInteraction: false,
					},
					effect: "coverflow",
					grabCursor: true,
					centeredSlides: true,
					slidesPerView: 1.1,
					spaceBetween: 36,
					coverflowEffect: {
						rotate: 20,
						stretch: 5,
						depth: 200,
						modifier: 1,
						slideShadows: false,
					},
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					}
				};

			const mySwiper = new Swiper(swiperContainerSelector, options);


			mySwiper.init();
		}

		startSwiper('.serviceSwiper');
		startSwiper('.stepSwiper');
	}
});
