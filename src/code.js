const elementArrow = document.getElementById('arrow');
const elementText = document.getElementById('textContainer');
const elementReadMore = document.getElementById('spanReadMore');
const mainContainer = document.getElementById('mainContainer');
const elementBodyContainer = document.getElementById('bodyContainer');
const serviceboxReadMore = document.getElementById('serviceboxReadMore');
const serviceboxArrowRotate = document.getElementById('serviceboxArrow');
const serviceboxTextChange = document.getElementById('serviceboxText');
const priceboxReadMore = document.getElementById('priceboxReadMore');
const priceboxArrowRotate = document.getElementById('priceboxArrow');
const priceboxTextChange = document.getElementById('priceboxText');
const brandboxReadMore = document.getElementById('brandboxReadMore');
const brandboxArrowRotate = document.getElementById('brandboxArrow');
const brandboxTextChange = document.getElementById('brandboxText');



const elementMenu = document.getElementById('menuContainer');
const hamburgerButton = document.getElementsByClassName('hamburgerButton');


for (let counter = 0; counter < hamburgerButton.length; counter++){

    hamburgerButton[counter].addEventListener('click', () => {

        elementMenu.classList.toggle('container__selection');
    })
}

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

const callBackWindow = document.getElementById('popup__callback'); 
const popupCallback = document.getElementsByClassName('popupCallback');

for (let count = 0; count < popupCallback.length; count++) {

    popupCallback[count].addEventListener('click', () => {

        if (callBackWindow.style.display != 'block') {
            callBackWindow.style.display = 'block';
        } else {
            callBackWindow.style.display = 'none';
        }
    })
}


const callOrderWindow = document.getElementById('popup__callorder');
const popupCallOrder = document.getElementsByClassName('popupCallOrder');

for (let count = 0; count < popupCallOrder.length; count++) {

    popupCallOrder[count].addEventListener('click', () => {

        if (callOrderWindow.style.display != 'block') {
            callOrderWindow.style.display = 'block';
        } else {
            callOrderWindow.style.display = 'none';
        }
    })
}

const readMore = document.getElementById('readMore');

readMore.addEventListener('click', () => {

    if (elementText.style.height != 'auto') {
        elementText.style.height = 'auto';
        elementArrow.style.transform = 'rotate(0deg)';
        elementReadMore.textContent = 'Скрыть';
    } else {
        elementText.style.height = '6.5rem';
        elementArrow.style.transform = 'rotate(180deg)';
        elementReadMore.textContent = 'Читать далее';
    }
})

document.getElementById('openbrandboxReadMore').addEventListener('click', () => {

    if (brandboxReadMore.style.height == 'auto') {
        brandboxReadMore.style.height = '190px';
        brandboxArrowRotate.style.transform = 'rotate(180deg)';
        brandboxTextChange.textContent = 'Показать все';
    } else {
        brandboxReadMore.style.height = 'auto';
        brandboxArrowRotate.style.transform = 'rotate(0deg)';
        brandboxTextChange.textContent = 'Скрыть';
    }
}) 

document.getElementById('openserviceboxReadMore').addEventListener('click', () => {
    
    if (serviceboxReadMore.style.height == 'auto') {
        serviceboxReadMore.style.height = '170px';
        serviceboxArrowRotate.style.transform = 'rotate(180deg)';
        serviceboxTextChange.textContent = 'Показать все';
    } else {
        serviceboxReadMore.style.height = 'auto';
        serviceboxArrowRotate.style.transform = 'rotate(0deg)';
        serviceboxTextChange.textContent = 'Скрыть';
    }
})
