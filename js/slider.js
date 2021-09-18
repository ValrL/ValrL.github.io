
const navItems = document.querySelectorAll('.slider-user-foto-small');
const slides = document.querySelectorAll('.slider-user-review');
const next = document.getElementById('arrowRight');
const previous = document.getElementById('arrowLeft');
let currentSlide = 0;

for(let i = 0; i<navItems.length; i++) {
    navItems[i].onclick = function () {
        currentSlide = i;
        document.querySelector('.slider-user-review.container.active').classList.remove('active');
        document.querySelector('.slider-user-foto-small.active').classList.remove('active');
        navItems[currentSlide].classList.add('active');
        slides[currentSlide].classList.add('active');
    }
}

function hideSlides(){
    slides[currentSlide].className = 'slider-user-review container';
    navItems[currentSlide].className = 'slider-user-foto-small';
}

function showSlides(){
    slides[currentSlide].className = 'slider-user-review container active';
    navItems[currentSlide].className = 'slider-user-foto-small active';
}

function goToSlide(slide){
    hideSlides();
    currentSlide = (slide + slides.length) % slides.length;
    showSlides();
    console.log(currentSlide);
}


function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}





next.onclick = function() {
    nextSlide(currentSlide);
};

previous.onclick = function() {
    previousSlide(currentSlide);
};

