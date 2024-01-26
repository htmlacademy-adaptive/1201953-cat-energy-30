/* в этот файл добавляет скрипты*/
const navigation = document.querySelector('.navigation');
const navigationToggle = document.querySelector('.navigation__toggle');

navigation.classList.remove('navigation--nojs');

navigationToggle.addEventListener('click', () => {
  if (navigation.classList.contains('navigation--closed')) {
    navigation.classList.add('navigation--opened');
    navigation.classList.remove('navigation--closed');
  } else {
    navigation.classList.remove('navigation--opened');
    navigation.classList.add('navigation--closed');
  }
});

const slider = document.querySelector('.slider');
const sliderBefore = document.querySelector('.slider__view--before');
const sliderAfter = document.querySelector('.slider__view--after');
const sliderButton = document.querySelector('.slider__button');

let isActive = false;

const beforeAfterSlider = (x) => {
  const shift = Math.max(0, Math.min(x, slider.offsetWidth));
  sliderBefore.style.width = `${shift}px`;
  sliderAfter.style.clipPath = `inset(0 0 0 ${shift}px)`;
  sliderButton.style.left = `${shift}px`;
};

document.addEventListener('mousemove', (e) => {
  if (!isActive) {
    return;
  }

  let x = e.pageX;
  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
});

document.addEventListener('mousedown', () => {
  isActive = true;
});

document.addEventListener('mouseup', () => {
  isActive = false;
});

document.addEventListener('mouseleave', () => {
  isActive = false;
});

document.addEventListener('touchstart', () => {
  isActive = true;
});

document.addEventListener('touchend', () => {
  isActive = false;
});

document.addEventListener('touchcancel', () => {
  isActive = false;
});

document.addEventListener('touchmove', (e) => {
  if (!isActive) {
    return;
  }

  let x;
  let i;

  for (i = 0; i < e.changedTouches.length; i++) {
    x = e.changedTouches[i].pageX;
  }
  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
});


