let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveSlide(direction) {
    currentIndex += direction;

    // Wrap around the slider if the beginning or end is reached
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}