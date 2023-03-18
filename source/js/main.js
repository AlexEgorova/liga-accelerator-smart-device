import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {initAccordion} from './modules/accordion';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  initAccordion();
  initModals();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)

// Modal open

const headerButton = document.querySelector('.header__button');
const modalFeedback = document.querySelector('.modal');


headerButton.addEventListener('click', (event) => {
  event.preventDefault();
  modalFeedback.classList.add('is-active');
});

// Modal close

const modalCloseButton = modalFeedback.querySelector('.modal__close-btn');

modalCloseButton.addEventListener('click', () => {
  modalFeedback.classList.remove('is-active');
});

// Intro-button

const introButton = document.querySelector('.intro__button');
const inputFormFeedback = document.querySelector('.form input');

introButton.addEventListener('click', (event) => {
  event.preventDefault();

  const elementId = introButton.getAttribute('href');

  document.querySelector('' + elementId).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
  setTimeout(function () {
    inputFormFeedback.focus();
  }, 500);
});

// Company-button

const companyWrapper = document.querySelector('.company__wrapper');
const companyButton = companyWrapper.querySelector('.company__button');

companyButton.removeAttribute('data-nojs');

companyWrapper.setAttribute('data-company', 'is-close');

companyButton.addEventListener('click', () => {
  if (companyWrapper.hasAttribute('data-company')) {
    companyWrapper.removeAttribute('data-company');
    companyButton.textContent = 'Свернуть';
  } else {
    companyWrapper.setAttribute('data-company', 'is-close');
    companyButton.textContent = 'Подробнее';
  }
});
