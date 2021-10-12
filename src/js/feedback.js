const call = document.querySelector('.button-link__button--call');
const cancel = document.querySelector('.feedback-call__btn--close');

call.addEventListener('click', function () {
  document.querySelector('.feedback').classList.add('feedback__popup');
  document.querySelector('.blur').style.zIndex = "5";
  document.querySelector('body').style.overflow = 'hidden';
})

cancel.addEventListener('click', function () {
  document.querySelector('.feedback').classList.remove('feedback__popup');
  document.querySelector('.blur').style.zIndex = "-1";
  document.querySelector('body').style.overflow = 'auto';
})


