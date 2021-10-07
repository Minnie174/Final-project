new Swiper(".swiper-container", {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView:'auto',
    slidesPerGroup: 1,
});


document.getElementById('moreBtn').addEventListener('click', function () {
    document.querySelector('.text__company--hidden').classList.toggle('text__company--hidden-open');
    if(document.querySelector('.text__company--hidden').classList.contains('text__company--hidden-open')) {
        document.getElementById('moreBtn').innerHTML = "Скрыть";
    } else {
        document.getElementById('moreBtn').innerHTML = "Читать далее";
    }
})

document.getElementById('p2').addEventListener('click', function () {
  document.querySelector('.technics__repair--swiper').classList.toggle('swiper-container--hidden');
  if(document.querySelector('.technics__repair--swiper').classList.contains('swiper-container--hidden')) {
    document.getElementById('p2').innerHTML = "Скрыть";
  } else {
    document.getElementById('p2').innerHTML = "Показать все";
  }
})

document.getElementById('p1').addEventListener('click', function () {
  document.querySelector('.brands__swiper-container').classList.toggle('brands__swiper-container--hidden');
  if(document.querySelector('.brands__swiper-container').classList.contains('brands__swiper-container--hidden')) {
    document.getElementById('p1').innerHTML = "Скрыть";
  } else {
    document.getElementById('p1').innerHTML = 'Показать все';
  }
})

const burger = document.querySelector('.button-link--burger');
const mobile = document.querySelector('.mobile-pop');
const close = document.querySelector('.mobile-button__button--close');

burger.addEventListener('click', function () {
    mobile.classList.add('mobile__popup');
    document.querySelector('.blur').style.zIndex = "5";
})

close.addEventListener('click', function () {
    mobile.classList.remove('mobile__popup');
    document.querySelector('.blur').style.zIndex = "-1";
})

const call = document.querySelector('.button-link__button--call');
const chat = document.querySelector('.button-link__button--chat');
const cancel = document.querySelector('.feedback-call__btn--close');
const concrete = document.querySelector('.feedback-call__close');

call.addEventListener('click', function () {
    document.querySelector('.feedback').classList.add('feedback__popup');
    document.querySelector('.blur').style.zIndex = "5";
})

cancel.addEventListener('click', function () {
    document.querySelector('.feedback').classList.remove('feedback__popup');
    document.querySelector('.blur').style.zIndex = "-1";
})

chat.addEventListener('click', function () {
    document.querySelector('.feedback-call').classList.add('feedback__popup');
    document.querySelector('.blur').style.zIndex = "5";
})

concrete.addEventListener('click', function () {
    document.querySelector('.feedback-call').classList.remove('feedback__popup');
    document.querySelector('.blur').style.zIndex = "-1";
})

const phone = document.querySelector('.mobile-button__button--call');
const text = document.querySelector('.mobile-button__button--chat');

phone.addEventListener('click', function () {
    document.querySelector('.feedback').classList.add('feedback__popup');
    document.querySelector('.blur').style.zIndex = "5";
})

text.addEventListener('click', function () {
    document.querySelector('.feedback-call').classList.add('feedback__popup');
    document.querySelector('.blur').style.zIndex = "5";
})

const blur = document.querySelector('.blur');

blur.addEventListener('click', function () {
    mobile.classList.remove('mobile__popup');
    document.querySelector('.feedback').classList.remove('feedback__popup');
    document.querySelector('.feedback-call').classList.remove('feedback__popup');
    blur.style.zIndex = "-1";
})


