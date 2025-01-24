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

        images[currentImage].style.display = 'block';

        setInterval(() => {
            images[currentImage].style.display = 'none';
            currentImage = (currentImage + 1) % images.length;
            images[currentImage].style.display = 'block';
        }, 4000);
    });
});
