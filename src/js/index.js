const carouselButton = document.querySelectorAll('.buttons');
const images = document.querySelectorAll('.images')

carouselButton.forEach((button, index) => {
    button.addEventListener('click', ()=> {

        desableSelectButton();

        button.classList.add('selected')

        hideImage();

        images[index].classList.add('activ')        
    })


})

function hideImage() {
    const activImage = document.querySelector('.activ');
    activImage.classList.remove('activ');
}

function desableSelectButton() {
    const selectedButton = document.querySelector('.selected');
    selectedButton.classList.remove('selected');
}
