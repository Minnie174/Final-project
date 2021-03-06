const burger = document.querySelector('.button-link--burger');
const mobile = document.querySelector('.mobile-pop');
const close = document.querySelector('.mobile-button__button--close');

burger.addEventListener('click', function () {
  mobile.classList.add('mobile__popup');
  document.querySelector('.blur').style.zIndex = "5";
  document.querySelector('body').style.overflow = 'hidden';
})

close.addEventListener('click', function () {
  mobile.classList.remove('mobile__popup');
  document.querySelector('.blur').style.zIndex = "-1";
  document.querySelector('body').style.overflow = 'auto';
})
