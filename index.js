const elementMenu = document.getElementById('menuContainer');
const elementArrow = document.getElementById('arrow');
const elementText = document.getElementById('textContainer');
const elementReadMore = document.getElementById('spanReadMore');
const mainContainer = document.getElementById('mainContainer');
const elementBodyContainer = document.getElementById('bodyContainer');



function showMenu() {

    elementMenu.classList.toggle('container__selection');
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

function popupCallback() {

    if (callBackWindow.style.display != 'block') {
        callBackWindow.style.display = 'block';
    } else {
        callBackWindow.style.display = 'none';
    }
}

const callOrderWindow = document.getElementById('popup__callorder');

function popupCallOrder() {

    let flag = false;

    if (callOrderWindow.style.display != 'block') {
        callOrderWindow.style.display = 'block';
    } else {
        callOrderWindow.style.display = 'none';
    }
}


function readMore() {

    if (elementText.style.height != 'auto') {
        elementText.style.height = 'auto';
        elementArrow.style.transform = 'rotate(0deg)';
        elementReadMore.textContent = 'Скрыть';
    } else {
        elementText.style.height = '6.5rem';
        elementArrow.style.transform = 'rotate(180deg)';
        elementReadMore.textContent = 'Читать далее';
    }
}

const brandboxReadMore = document.getElementById('brandboxReadMore');
const brandboxArrowRotate = document.getElementById('brandboxArrow');
const brandboxTextChange = document.getElementById('brandboxText');

function openbrandboxReadMore() {
    
    if (brandboxReadMore.style.height == 'auto') {
        brandboxReadMore.style.height = '190px';
        brandboxArrowRotate.style.transform = 'rotate(180deg)';
        brandboxTextChange.textContent = 'Показать все';
    } else {
        brandboxReadMore.style.height = 'auto';
        brandboxArrowRotate.style.transform = 'rotate(0deg)';
        brandboxTextChange.textContent = 'Скрыть';
    }
}

const serviceboxReadMore = document.getElementById('serviceboxReadMore');
const serviceboxArrowRotate = document.getElementById('serviceboxArrow');
const serviceboxTextChange = document.getElementById('serviceboxText');

function openserviceboxReadMore() {
    
    if (serviceboxReadMore.style.height == 'auto') {
        serviceboxReadMore.style.height = '170px';
        serviceboxArrowRotate.style.transform = 'rotate(180deg)';
        serviceboxTextChange.textContent = 'Показать все';
    } else {
        serviceboxReadMore.style.height = 'auto';
        serviceboxArrowRotate.style.transform = 'rotate(0deg)';
        serviceboxTextChange.textContent = 'Скрыть';
    }
}

const priceboxReadMore = document.getElementById('priceboxReadMore');
const priceboxArrowRotate = document.getElementById('priceboxArrow');
const priceboxTextChange = document.getElementById('priceboxText');

function openpriceboxReadMore() {
    
    if (priceboxReadMore.style.height == 'auto') {
        priceboxReadMore.style.height = '220px';
        priceboxArrowRotate.style.transform = 'rotate(180deg)';
        priceboxTextChange.textContent = 'Показать все';
    } else {
        priceboxReadMore.style.height = 'auto';
        priceboxArrowRotate.style.transform = 'rotate(0deg)';
        priceboxTextChange.textContent = 'Скрыть';
    }
}