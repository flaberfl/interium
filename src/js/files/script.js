// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
window.addEventListener("load", function () {
  document.body.classList.remove("load");
});


// Инициализация Fancybox
Fancybox.bind("[data-fancybox]", {
  // Дополнительные настройки
  closeButton: true,
  // animationEffect: "fade",
  // transitionEffect: "slide",
  animationEffect: 'false',
});

Fancybox.defaults = {
  animationEffect: 'zoom-in',
  animationDuration: 500,
  loop: false,
  buttons: ['zoom', 'thumbs', 'close'],
  protect: false
};