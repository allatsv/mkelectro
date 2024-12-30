const gap3 = 16;

const carousel3 = document.querySelector(".carousel"),
  content3 = document.querySelector(".products__blocks"),
  next3 = document.querySelector(".products__right"),
  prev3 = document.querySelector(".products__left");



next3.addEventListener("click", e => {
  carousel3.scrollBy(width3 + gap3, 0);
  if (carousel3.scrollWidth !== 0) {
    prev3.style.display = "flex";
   
  }
  if (content3.scrollWidth - width3 - gap3 <= carousel3.scrollLeft + width3) {
    next3.style.display = "none";
   
  }
});
prev3.addEventListener("click", e => {
  carousel3.scrollBy(-(width3 + gap3), 0);
  if (carousel3.scrollLeft - width3 - gap3 <= 0) {
    prev3.style.display = "none";
    
  }
  if (!content3.scrollWidth - width3 - gap3 <= carousel3.scrollLeft + width3) {
    next3.style.display = "flex";

  }
});

let width3 = carousel3.offsetWidth;
window.addEventListener("resize", e => (width3 = carousel3.offsetWidth));
