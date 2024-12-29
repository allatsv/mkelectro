const gap1 = 8;
const carousel1 = document.querySelector(".carousel-height"),
  content1 = document.querySelector(".content__product-scroll-imgs"),
  next1 = document.querySelector(".btn-bottom"),
  prev1 = document.querySelector(".btn-top");

next1.addEventListener("click", e => {
  carousel1.scrollBy(height + gap1, 0);
  if (carousel1.scrollheight !== 0) {
    prev1.style.display = "flex";
  }
  if (content1.scrollheight - height - gap1 <= carousel1.scrollLeft + height) {
    next1.style.display = "none";
  }
});
prev1.addEventListener("click", e => {
  carousel1.scrollBy(-(height + gap1), 0);
  if (carousel1.scrollLeft - height - gap1 <= 0) {
    prev1.style.display = "none";
  }
  if (!content1.scrollheight - height - gap1 <= carousel1.scrollLeft + height) {
    next1.style.display = "flex";
  }
});

let height = carousel1.offsetheight;
window.addEventListener("resize", e => (height = carousel1.offsetheight));
