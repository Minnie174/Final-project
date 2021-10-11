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
