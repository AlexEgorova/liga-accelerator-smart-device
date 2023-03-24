// Intro-button

function initIntroButton() {
  const introContainer = document.querySelector('.intro__container');
  const introButton = document.querySelector('.intro__container a');
  const scrollElement = document.querySelector('#feedbackForm');

  if (introButton !== null) {
    introButton.addEventListener('click', (event) => {
      event.preventDefault();

      scrollElement.scrollIntoView({
        behavior: 'smooth',
      });
    });
  } else {
    introContainer.focus();
  }
}

export {initIntroButton};
