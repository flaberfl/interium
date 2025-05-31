// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
window.addEventListener("load", function () {
  document.body.classList.remove("load");
});



// element?.addEventListener
// Фильтр товаров по Категориям


const filterArea = document.querySelector('.filter-category__top');
const filterBox = document.querySelectorAll('.filter-category__slide');
const navBox = filterArea?.querySelectorAll('nav ul li');


const filterGoods = (filterClass) => {
  navBox.forEach((item) => item.classList.remove('active'));
  const active = document.querySelector(`[data-f="${filterClass}"]`);
  if (active) active.classList.add('active');

  filterBox.forEach((item) => {
    item.classList.remove('hide');
    if (!item.classList.contains(filterClass) && filterClass !== 'all') {
      item.classList.add('hide');
    }
  });
};

document.querySelector('.filter-category__nav')?.addEventListener('click', (event) => {

  if (event.target.tagName !== 'LI') return;
  let filterClass = event.target.dataset['f'];
  filterGoods(filterClass);
  // window.location.hash = event.target.dataset['f'];
});

// if (window.location.hash) {
//   console.log(window.location.hash);
//   filterGoods(window.location.hash.slice(1));
// }


// Добавление и удаления класса по клику


let block = document.getElementsByClassName('product-item__favorite');
for (let i = 0; i < block.length; i++) {
  block[i].onclick = function () {
    this.classList.toggle('active');
  }
}

let addToBasket = document.getElementsByClassName('button__basket');
for (let i = 0; i < addToBasket.length; i++) {
  addToBasket[i].onclick = function () {
    this.classList.toggle('active');
  }
}

let addSocial = document.getElementsByClassName('contact-social__button');
for (let i = 0; i < addSocial.length; i++) {
  addSocial[i].onclick = function () {
    this.classList.toggle('active');
  }
}

let deliveryMetod = document.getElementsByClassName('shipping-checkout__item-list');
for (let i = 0; i < deliveryMetod.length; i++) {
  deliveryMetod[i].onclick = function () {
    this.classList.toggle('active');
  }
}


// // Получаем элемент с классом body
const btnsSide = document.querySelector('.side-buttons');

// Определяем функцию, которая будет вызываться при прокрутке страницы
function addActiveClass() {
  // Проверяем, проскролили ли мы страницу на 400px сверху
  if (window.scrollY >= 200) {
    // Если да, то добавляем класс active
    // console.log(scrollY);
    btnsSide.classList.add('active');
  } else {
    // Иначе удаляем класс active, если он уже есть
    btnsSide.classList.remove('active');
  }
}

// Добавляем обработчик события прокрутки
window.addEventListener('scroll', addActiveClass);


// Назначение активной вкладки МЕНЮ
// const activeMenu = document.querySelectorAll('.menu__item-active');
// activeMenu.forEach((element, i) => {
//   element.classList.add('active');
// })

const outBlock = document.querySelector('.menu__container');
const outForm = document.querySelector('.form-search');

let menuParents = document.querySelectorAll('.menu__item');

let btnExit = document.querySelector('.menu__button-back');

for (let index = 0; index < menuParents.length; index++) {
  const menuParent = menuParents[index];

  // При наведении добавляем класс active
  menuParent.addEventListener('mouseenter', function (e) {
    menuParent.classList.add('active');
  });

  // При убирании курсора с пункта меню - убираем класс active
  menuParent.addEventListener('mouseleave', function (e) {
    menuParent.classList.remove('active');
  });

  // При клике на любом из пунктов меню - появляется кнопка "Вернуться назад"
  menuParent.addEventListener('click', function (e) {
    btnExit.classList.add('active');
    console.log('Открылась кнопка Вернуться назад');
  });

  // При клике на кнопку - открывается предыдущее меню
  btnExit.addEventListener('click', function (e) {
    btnExit.classList.remove('active');
    console.log('Закрылась кнопка Вернуться назад');
  });

  outForm.addEventListener('click', function (e) {
    btnExit.classList.remove('active');
    console.log('Закрылась кнопка Вернуться назад');
  });

// Если кликнули за пределами блока
  document.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(outBlock);

    if (!withinBoundaries) {
      console.log('Клик за элементом');
      btnExit.classList.remove('active');
      // div.style.display = 'none'; // скрываем элемент т к клик был за его пределами
    }
  })



  // При нажатии пальцем на пункт меню - добавляем класс active, если он был присвоен - то удаляем
  // menuParent.addEventListener('click', function (e) {
  //   activeMenu.forEach((element, i) => {
  //     element.classList.remove('active');
  //     // menuParent.classList.add('active');
  //     // element.classList.add('active');
  //   })
  // });
}

if (window.innerWidth > 1200) {

  console.log('1200');

  //Назначение активной вкладки МЕНЮ
  const activeMenu = document.querySelectorAll('.menu__item-active');
  activeMenu.forEach((element, i) => {
    element.classList.add('active');
  })

  if (document.querySelector(".wrap-icon-btn-d")) {
    document.addEventListener("click", function (e) {
      activeMenu.forEach((element, i) => {
        element.classList.add('active');
      })
    });
  };
}

// if (document.querySelector(".wrap-icon-btn")) {
//   document.addEventListener("click", function (e) {
//     btnExit.classList.remove('active');
//     console.log('Ура!!');
//   });
// };




// const activeTabs = document.querySelectorAll('.menu__item-active');
// activeTabs.forEach((element, i) => {
//   element.classList.add('active')
// })




// var el = document.getElementsByClassName('menu__item');

// for (var i = 0; i < el.length; i++) {
//   el[i].addEventListener("mouseenter", showSub, false);
//   el[i].addEventListener("mouseleave", hideSub, false);
// }


// function showSub(e) {
//   if (this.children.length > 1) {
//     this.children[1].style.height = "auto";
//     this.children[1].style.overflow = "visible";
//     this.children[1].style.opacity = "1";
//     this.classList.add('active');
//   } else {
//     return false;
//   }
// }

// function hideSub(e) {
//   if (this.children.length > 1) {
//     this.children[1].style.height = "0px";
//     this.children[1].style.overflow = "hidden";
//     this.children[1].style.opacity = "0";
//     this.classList.remove('active');
//   } else {
//     return false;
//   }
// }






//menu all category
// function showAllCategory() {
//   let buttonAllCategoryMenu = document.querySelector(".menu__list")

//   buttonAllCategoryMenu.addEventListener("mouseenter", function (event) {
//     event.target.parentElement.parentElement.classList.add("active")
//   })

//   buttonAllCategoryMenu.addEventListener("mouseleave", function (event) {
//     if (event.target.parentElement.classList.contains("menu__link")) {
//       event.target.parentElement.parentElement.classList.remove("active")
//     }
//   })

// }
// showAllCategory();

