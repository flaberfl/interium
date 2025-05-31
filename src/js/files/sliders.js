/*
Документация по работе в шаблоне:
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

//Подключаем слайдер Swiper с node_modules
//При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
//Пример: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules';
/*
Основные модули слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

//Стили Swiper
//Базовые стили
import "../../scss/base/swiper.scss";
//Полный набор стилей с scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
//Полный набор стилей с node_modules
// import 'swiper/css';

//Инициализация слайдеров
function initSliders() {
	//Список слайдеров
	//Проверяем, есть ли слайдер на странице
	if (document.querySelector('.intro__slider')) { //Указываем класс нужного слайдера
		//Создаем слайдер
		new Swiper('.intro__slider', { //Указываем класс нужного слайдера
			//Подключаем модули слайдера
			//для конкретного случая
			modules: [Pagination, EffectFade, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			// effect: "fade",
			// autoHeight: true,
			// speed: 800,
			speed: 10,
			allowTouchMove: false,
			// effect: 'cube',
			// fadeEffect: {
			// 	crossFade: true
			// },

			// direction: {
			// 	vertical: true
			// },

			// allowTouchMove:false,
			preventInteractionOnTransition: true,

			// slidesPerGroup: 1,
			// watchSlidesProgress: true,


			// touchRatio: 0,
			// simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,


			// Эффекты
			// autoplay: {
			// 	delay: 8000,
			// 	disableOnInteraction: false,
			// },


			// Пагинация

			pagination: {
				el: '.intro__slider-pagination',
				clickable: true,
			},

			// События
			on: {

			}
		});
	}

	if (document.querySelector('.popular__slider')) { //Указываем класс нужного слайдера
		//Создаем слайдер
		new Swiper('.popular__slider', { //Указываем класс нужного слайдера
			//Подключаем модули слайдера
			//для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 28,
			// effect: "fade",
			// autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/


			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.popular__slider-btn.swiper-button-prev',
				nextEl: '.popular__slider-btn.swiper-button-next',
			},

			// Брейкпоинты
			breakpoints: {
				0: {
					slidesPerView: 2,
					spaceBetween: 20,
					// autoHeight: true,
				},
				360: {
					slidesPerView: 2,
					spaceBetween: 18,
					// autoHeight: true,
				},
				640: {
					slidesPerView: 2,
					spaceBetween: 20,
					// autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 28,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 28,
				},
			},

			// События
			on: {

			}
		});
	}

	if (document.querySelector('.filter-category__slider')) { //Указываем класс нужного слайдера
		//Создаем слайдер
		new Swiper('.filter-category__slider', { //Указываем класс нужного слайдера
			//Подключаем модули слайдера
			//для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 28,
			// effect: "fade",
			// autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/


			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.filter-category__slider-btn.swiper-button-prev',
				nextEl: '.filter-category__slider-btn.swiper-button-next',
			},

			// Брейкпоинты
			breakpoints: {
				0: {
					slidesPerView: 2,
					spaceBetween: 20,
					// autoHeight: true,
				},
				360: {
					slidesPerView: 2,
					spaceBetween: 18,
					// autoHeight: true,
				},
				640: {
					slidesPerView: 2,
					spaceBetween: 20,
					// autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 28,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 28,
				},
			},

			// События
			on: {

			}
		});
	}

	if (document.querySelector('.benefits__slider')) { //Указываем класс нужного слайдера
		//Создаем слайдер
		new Swiper('.benefits__slider', { //Указываем класс нужного слайдера
			//Подключаем модули слайдера
			//для конкретного случая
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 30,
			// effect: "fade",
			// autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			enabled: false,

			// Пагинация
			pagination: {
				el: '.benefits__slider-pagination',
				clickable: true,
			},

			// Брейкпоинты
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
				360: {
					slidesPerView: 1,
					spaceBetween: 0,
					enabled: true,
				},
				630: {
					slidesPerView: 2,
					spaceBetween: 20,
					enabled: true,
				},
				940: {
					slidesPerView: 3,
					spaceBetween: 20,
					enabled: true,

				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
					enabled: true,

				},
				1200: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
			},

			// События
			on: {

			}
		});
	}

	if (document.querySelector('.partners-cooperation__slider')) { //Указываем класс нужного слайдера
		//Создаем слайдер
		new Swiper('.partners-cooperation__slider', { //Указываем класс нужного слайдера
			//Подключаем модули слайдера
			//для конкретного случая
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 5.4,
			spaceBetween: 22,
			// effect: "fade",
			// autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			// preloadImages: false,
			lazy: true,

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.partners-cooperation__slider-btn.swiper-button-prev',
				nextEl: '.partners-cooperation__slider-btn.swiper-button-next',
			},


			// Пагинация
			pagination: {
				el: '.partners-cooperation__slider-pagination',
				clickable: true,
			},

			// Брейкпоинты
			breakpoints: {
				0: {
					slidesPerView: 1.1,
					spaceBetween: 20,
					// autoHeight: true,
				},
				500: {
					slidesPerView: 1.2,
					spaceBetween: 20,
					// autoHeight: true,
				},
				640: {
					slidesPerView: 2,
					spaceBetween: 20,
					// autoHeight: true,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 22,
				},
				992: {
					slidesPerView: 4,
					spaceBetween: 22,
				},
				1268: {
					slidesPerView: 5.4,
					spaceBetween: 22,
				},
			},

			// События
			on: {

			}
		});
	}





}
//Скролл на базе слайдера (по классу swiper scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	//Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});