import {Modals} from './modals';

let modals;

// Здесь реализован пример открытия модалки через колбэк закрытия
// const openModalInCloseCallback = (name, context = this) => {
//   context._enableScrolling = false;
//   context._setSettings('default');
//   modals.open(name);
// };

// closeCallback() {
//   openModalInCloseCallback('modal-5');
// },

const settings = {
  'default': {
    preventDefault: true,
    stopPlay: true,
    lockFocus: true,
    startFocus: true,
    focusBack: true,
    eventTimeout: 400,
    openCallback: false,
    closeCallback: false,
  },
  'feedback-modal': {
    openCallback: () => console.log('Я отработаю при открытии modal'),
    closeCallback: () => console.log('Я отработаю при закрытии modal'),
  },

};

const initModals = () => {
  const modalElements = document.querySelectorAll('.modal');
  modalElements.forEach((el) => {
    setTimeout(() => {
      el.classList.remove('modal--preload');
    }, 100);
  });
  modals = new Modals(settings);

  const openModalButton = document.querySelector('.header__button');

  if (openModalButton !== null) {
    openModalButton.addEventListener('click', () => {
      modals.open('feedback-modal');
    });
  } else {
    document.querySelector('.header__logo').focus();
  }

  // Используйте в разработке экспортируемую переменную modals, window сделан для бэкэнда
  // window.modals = modals;
};

export {modals, initModals};
