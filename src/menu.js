export const elementMenu = document.getElementById('menuContainer');
export const hamburgerButton = document.getElementsByClassName('hamburgerButton');


for (let counter = 0; counter < hamburgerButton.length; counter++){

    hamburgerButton[counter].addEventListener('click', () => {

        elementMenu.classList.toggle('container__selection');
    })
}


