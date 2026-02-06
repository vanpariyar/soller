const slider = document.getElementById("slider");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const cards = document.querySelectorAll(".card");

let index = 0;
let cardWidth = cards[0].offsetWidth + 30;
let autoSlide;

function updateSlider() {
  slider.style.transform = `translateX(-${index * cardWidth}px)`;
}

/* Next */
function nextSlide() {
  if (index < cards.length - 1) {
    index++;
  } else {
    index = 0;
  }
  updateSlider();
}

/* Prev */
function prevSlide() {
  if (index > 0) {
    index--;
  } else {
    index = cards.length - 1;
  }
  updateSlider();
}

/* Buttons */
next.addEventListener("click", () => {
  clearInterval(autoSlide);
  nextSlide();
  startAuto();
});

prev.addEventListener("click", () => {
  clearInterval(autoSlide);
  prevSlide();
  startAuto();
});

/* Auto slide (slow) */
function startAuto() {
  autoSlide = setInterval(nextSlide, 5000); // 5 seconds
}

startAuto();

/* Resize fix */
window.addEventListener("resize", () => {
  cardWidth = cards[0].offsetWidth + 30;
  updateSlider();
});

const menu = document.getElementById("menuToggle");
const nav = document.getElementById("navMenu");

menu.addEventListener("click",()=>{
  nav.classList.toggle("active");
});

  