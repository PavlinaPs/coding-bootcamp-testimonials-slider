const texts = document.querySelectorAll(".card__text-container");
const images = document.querySelectorAll('.card__image');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

function toggleSlide() {
    Array.from(texts).map(item => {
        if(item.classList.contains('active')) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
    }})
    Array.from(images).map(item => {
        if(item.classList.contains('active')) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
    }})
}

prev.addEventListener('click', toggleSlide);
next.addEventListener('click', toggleSlide);

prev.addEventListener('keydown', (e) => {
    if(e.key === "Enter"){
        toggleSlide();
    }
});

next.addEventListener('keydown', (e) => {
    if(e.key === "Enter"){
        toggleSlide();
    }
});