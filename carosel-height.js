const gap56 = 16;

const carousel5 = document.querySelector(".carousel-height"),
  content5 = document.querySelector(".content__product-scroll-imgs"),
  next55 = document.querySelector(".btn-bottom"),
  prev55 = document.querySelector(".btn-top");
  next5 = document.querySelector(".btn-bottom-grey"),
  prev5 = document.querySelector(".btn-top-grey");

next55.addEventListener("click", e => {
  carousel5.scrollBy(width56 + gap56, 0);
  if (carousel5.scrollHeight !== 0) {
    prev55.style.display = "flex";
    prev5.style.display = "none";
  }
  if (content5.scrollHeight - width56 - gap56 <= carousel5.scrollTop + width56) {
    next55.style.display = "none";
    next5.style.display = "flex";
  }
});
prev55.addEventListener("click", e => {
  carousel5.scrollBy(-(width56 + gap56), 0);
  if (carousel5.scrollTop - width56 - gap56 <= 0) {
    prev55.style.display = "none";
    prev5.style.display = "flex";
  }
  if (!content5.scrollHeight - width56 - gap56 <= carousel5.scrollTop + width56) {
    next55.style.display = "flex";
    next5.style.display = "none";
  }
});

let width56 = carousel5.offsetWidth;
window.addEventListener("resize", e => (width56 = carousel5.offsetWidth));
