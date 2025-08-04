document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu logic
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('toggle');
        });
    }

    // Image Carousel Logic
    let slideIndex = 0;
    let slideInterval;
    const slides = document.querySelectorAll('.carousel-slide');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const carousel = document.querySelector('.carousel');

    function showSlides() {
        slides.forEach(slide => slide.style.display = 'none');
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        if (slides[slideIndex - 1]) {
            slides[slideIndex - 1].style.display = 'block';
        }
    }

    function plusSlides(n) {
        moveSlide(slideIndex += n);
    }

    function moveSlide(n) {
        slides.forEach(slide => slide.style.display = 'none');
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        if (slides[slideIndex - 1]) {
            slides[slideIndex - 1].style.display = 'block';
        }
    }

    function startSlideShow() {
        if (slides.length > 0) {
            showSlides(); // Show first slide immediately
            slideInterval = setInterval(showSlides, 5000); // Change image every 5 seconds
        }
    }

    if (carousel) {
        prev.addEventListener('click', () => plusSlides(-1));
        next.addEventListener('click', () => plusSlides(1));

        carousel.addEventListener('mouseenter', () => clearInterval(slideInterval));
        carousel.addEventListener('mouseleave', () => startSlideShow());

        startSlideShow();
    }
});
