// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
window.addEventListener("load", function () {
  document.body.classList.remove("load");
});




document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById('marqueeTrack');
  const logos = Array.from(track.getElementsByClassName('marquee-logo'));

  // Ширина одного логотипа + gap
  const logoWidth = logos[0].offsetWidth + parseInt(getComputedStyle(logos[0]).gap || '0');

  let offset = 0;

  function scrollMarquee() {
    offset -= 1; // Скорость движения (меняй число для изменения скорости)

    // Если прошли ширину оригинального набора логотипов — обнуляем
    if (offset <= -logoWidth * (logos.length / 2)) {
      offset = 0;
    }

    track.style.transform = `translateX(${offset}px)`;
    requestAnimationFrame(scrollMarquee);
  }

  scrollMarquee();

  // Пауза при наведении (опционально)
  const container = document.querySelector('.marquee-container');
  let animationFrameId;

  function animate() {
    offset -= 1;
    if (offset <= -logoWidth * (logos.length / 2)) offset = 0;
    track.style.transform = `translateX(${offset}px)`;
    animationFrameId = requestAnimationFrame(animate);
  }

  container.addEventListener('mouseenter', () => {
    cancelAnimationFrame(animationFrameId);
  });

  container.addEventListener('mouseleave', () => {
    animate();
  });
});
