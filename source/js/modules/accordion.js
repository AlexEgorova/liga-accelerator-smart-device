function initAccordion() {
  const accordionToggleList = document.querySelectorAll('.accordion__toggle');
  const accordionBodyList = document.querySelectorAll('.accordion__body');
  const accordionItemList = document.querySelectorAll('.accordion__item');

  accordionToggleList.forEach((item) => item.classList.remove('no-js'));
  accordionBodyList.forEach((item) => item.classList.remove('no-js'));

  function setTabIndex() {
    accordionItemList.forEach((item) => item.setAttribute('tabindex', '-1'));
  }

  function removeTabIndex() {
    accordionItemList.forEach((item) => item.removeAttribute('tabindex'));
  }

  if (screen.width < 768) {
    setTabIndex();
  } else {
    removeTabIndex();
  }

  accordionToggleList.forEach((item) => {
    item.addEventListener('click', () => {
      let content = item.nextElementSibling;

      if (content.style.maxHeight && item.classList.contains('is-open')) {
        accordionToggleList.forEach(function (element) {
          element.classList.remove('is-open');
        });
        accordionBodyList.forEach(function (element) {
          element.style.maxHeight = null;
        });
        setTabIndex();
      } else {
        accordionToggleList.forEach(function (element) {
          element.classList.remove('is-open');
          item.classList.add('is-open');
        });
        accordionBodyList.forEach(function (element) {
          element.style.maxHeight = null;
          content.style.maxHeight = content.scrollHeight + 'px';
        });
        removeTabIndex();
      }
    });
  });
}

export {initAccordion};
