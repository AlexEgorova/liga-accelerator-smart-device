// Company-button

function initCompanyButton() {
  const companyButton = document.querySelector('.company__button');
  const companyWrapper = document.querySelector('.company__wrapper');

  companyWrapper.setAttribute('data-company', 'is-close');

  if (companyButton === null) {
    companyWrapper.setAttribute('data-company', 'is-open');
  } else {
    companyButton.addEventListener('click', () => {
      if (companyWrapper.hasAttribute('data-company')) {
        companyWrapper.removeAttribute('data-company');
        companyButton.textContent = 'Свернуть';
      } else {
        companyWrapper.setAttribute('data-company', 'is-close');
        companyButton.textContent = 'Подробнее';
      }
    });
  }
}

export {initCompanyButton};
