const chat = document.querySelector('.button-link__button--chat');
const concrete = document.querySelector('.feedback-call__close');

chat.addEventListener('click', function () {
  document.querySelector('.feedback-call').classList.add('feedback__popup');
  document.querySelector('.blur').style.zIndex = "5";
  document.querySelector('body').style.overflow = 'hidden';
})

concrete.addEventListener('click', function () {
  document.querySelector('.feedback-call').classList.remove('feedback__popup');
  document.querySelector('.blur').style.zIndex = "-1";
  document.querySelector('body').style.overflow = 'auto';
})
