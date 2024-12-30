const gap = 16;

const carousel = document.querySelector(".carousel-height"),
  content = document.querySelector(".content__product-scroll-imgs"),
  next = document.querySelector(".btn-bottom"),
  prev = document.querySelector(".btn-top");
  next5 = document.querySelector(".btn-bottom-grey"),
  prev5 = document.querySelector(".btn-top-grey");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
    prev5.style.display = "none";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
    next5.style.display = "flex";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
    prev5.style.display = "flex";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
    next5.style.display = "none";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));
