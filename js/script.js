const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('active');
});
// Slideshow Code
document.addEventListener('DOMContentLoaded', function() {
    const slideshows = document.querySelectorAll('.destination-slideshow');

    slideshows.forEach(slideshow => {
        const images = slideshow.querySelectorAll('img');
        let currentImage = 0;

        images[currentImage].style.opacity = 1;

        setInterval(() => {
            images[currentImage].style.opacity = 0;
            currentImage = (currentImage + 1) % images.length;
            images[currentImage].style.opacity = 1;
        }, 4000);
    });
});
