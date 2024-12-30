const gap = 16;

const carousel = document.querySelector(".carousel2"),
  content = document.querySelector(".comment-photo__inner"),
  next = document.querySelector(".comment-photo-btn-r"),
  prev = document.querySelector(".comment-photo-btn-l");
  next4 = document.querySelector(".comment-photo-btn-r-grey"),
  prev4 = document.querySelector(".comment-photo-btn-l-grey");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
    prev4.style.display = "none";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
    next4.style.display = "flex";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
    prev4.style.display = "flex";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
    next4.style.display = "none";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));
