const phone = document.querySelector('.mobile-button__button--call');
const text = document.querySelector('.mobile-button__button--chat');

phone.addEventListener('click', function () {
  document.querySelector('.feedback').classList.add('feedback__popup');
  document.querySelector('.blur').style.zIndex = "5";
  document.querySelector('body').style.overflow = 'hidden';
})

text.addEventListener('click', function () {
  document.querySelector('.feedback-call').classList.add('feedback__popup');
  document.querySelector('.blur').style.zIndex = "5";
  document.querySelector('body').style.overflow = 'hidden';
})
