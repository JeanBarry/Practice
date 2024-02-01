const carousel = document.querySelector('.carousel');
const left = document.querySelector('#left');
const right = document.querySelector('#right');

const carouselItem = document.querySelector('.carousel-item');
const carouselItemWidth = carouselItem.offsetWidth;

right.addEventListener('click', () => {
    carousel.scrollLeft += carouselItemWidth;
});

left.addEventListener('click', () => {
    carousel.scrollLeft -= carouselItemWidth;
});