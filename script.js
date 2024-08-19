// const container = document.querySelector('.container');
// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
   
//     console.log(container);
//     html2pdf(container);
// });

const french = document.querySelector('.french');
const english = document.querySelector('.english');
const slider = document.querySelector('.slider .circle');

slider.addEventListener('click', () => {

    french.classList.toggle('active');
    english.classList.toggle('active');
    slider.classList.toggle('active');
});



