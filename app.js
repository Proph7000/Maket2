gamburgerBtn.addEventListener('click', function(e) {
    drawer.classList.toggle('open');
    e.stopPropagation();
  });

function burgerMenu(icon) {
    icon.classList.toggle("change");
}

//Slider
let slideIndex = 1;

const rightBtn = document.querySelector('.right-button')
const leftBtn = document.querySelector('.left-button')

rightBtn.addEventListener('click', () => {
    nextSlide('right')
})
leftBtn.addEventListener('click', () => {
    previousSlide('left')
})

showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("back-img");
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
   
    for (let slide of slides) {
        slide.style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "block";    
}