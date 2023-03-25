import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {initAccordion} from './modules/accordion';
import {initPhoneMask} from './modules/phone-mask/phone-mask';
import {initCompanyButton} from './modules/company-button';
import {initIntroButton} from './modules/intro-button';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------
  initIntroButton();
  initCompanyButton();
  initPhoneMask();
  initAccordion();
  initModals();

  // Submit

  // const formFeedback = document.querySelector('.feedback__form');
  // const userNameFeedback = formFeedback.querySelector('form input[type=text]');
  // const userPhoneFeedback = formFeedback.querySelector('form input[type=tel]');
  // const userPhoneModal = modalFeedback.querySelector('form input[type=tel]');
  // const userQuestionFeedback = formFeedback.querySelector('form textarea');
  // const userQuestionModal = modalFeedback.querySelector('form textarea');

  // const setStorage = (element, name, tel, question) => {
  //   const userName = element.querySelector(name);
  //   const userPhone = element.querySelector(tel);
  //   const userQuestion = element.querySelector(question);

  //   localStorage.setItem('userName', userName.value);
  //   localStorage.setItem('userPhone', userPhone.value);
  //   localStorage.setItem('userQuestion', userQuestion.value);

  //   userName.value = '';
  //   userPhone.value = '';
  //   userQuestion.value = '';
  // };

  // formFeedback.addEventListener('submit', (event) => {
  //   event.preventDefault();

  //   setStorage(formFeedback, userNameFeedback, userPhoneFeedback, userQuestionFeedback);
  // });

  // modalFeedback.addEventListener('submit', (event) => {
  //   event.preventDefault();

  //   setStorage(formFeedback, userNameModal, userPhoneModal, userQuestionModal);
  // });

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    const form = new Form();
    form.init();
    window.form = form;
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
