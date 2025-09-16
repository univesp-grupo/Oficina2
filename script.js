let currentIndex = 0;
const images = document.querySelectorAll(".carrossel img");

function showNextImage() {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("active");
}
