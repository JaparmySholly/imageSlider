const images = document.querySelector('.images');
const slider = document.querySelector('.slider');
const imageFiles = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '16.jpg',
    '17.jpg',
    '18.jpg',
    '19.jpg',
    '20.jpg',
    '21.jpg',
    '22.jpg'
    // '23.jpg'
    // '24.jpg',
    // '25.jpg'
]
images.style.width = `${imageFiles.length * 100}%`;
let shift = (100 / imageFiles.length).toFixed(3); 

imageFiles.forEach(file => {
    const img = document.createElement('img');
    img.src = `./images/${file}`;
    images.appendChild(img);
    img.style.width = `${(100 / imageFiles.length).toFixed(3)}%`

    const input = document.createElement('input');
    const sliderButton = document.createElement('label');

    input.name = 'slider-buttons';
    input.type = 'radio';
    input.id = file;

    sliderButton.setAttribute('for', file);
    sliderButton.setAttribute('class', 'slider-button');

    const firstImg = images.querySelector('img');
    sliderButton.addEventListener('click', () => {
        firstImg.style.marginLeft =
            `-${(file.replace(/\D/g, '')*shift) - shift}%`;
        
    })

    slider.appendChild(input);
    slider.appendChild(sliderButton);
})

const img = images.querySelector('img');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
img.style.marginLeft = '0%';

left.addEventListener('click', () => {
    if (img.style.marginLeft !== '0%') 
        img.style.marginLeft =
            (parseFloat(img.style.marginLeft) + Number(shift)) + '%';
})

right.addEventListener('click', () => {
    if (img.style.marginLeft !== `-${((imageFiles.length * shift) - shift).toFixed(3)}%`)
        img.style.marginLeft = 
            (parseFloat(img.style.marginLeft) - shift) + '%';
})