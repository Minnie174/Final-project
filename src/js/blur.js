const blur = document.querySelector('.blur');
const mobile = document.querySelector('.mobile-pop');

blur.addEventListener('click', function () {
  mobile.classList.remove('mobile__popup');
  document.querySelector('.feedback').classList.remove('feedback__popup');
  document.querySelector('.feedback-call').classList.remove('feedback__popup');
  blur.style.zIndex = "-1";
})
