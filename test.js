 const callOrderWindow = document.getElementById('popup__callorder');
// const closeButtons = document.getElementsByClassName('callOrder_close_button'); 

// function popupCallOrder() {

//     let flag = false;

//     if (callOrderWindow.style.display != 'block') {
//         callOrderWindow.style.display = 'block';
//     } else {
//         // for (let counter = 0; counter < closeButtons.length; counter++){

//         //     closeButtons[counter].addEventListener('click', () => {
//         //         flag = true;
//         //     });
//         //     console.log(closeButtons[counter]);
//         // }
//         callOrderWindow.style.display = 'none';
//     }
// }

const closeButton = document.getElementsByClassName('orderCloseButton');

for (let counter = 0; counter < closeButton.length; counter++){
    
    closeButton[counter].addEventListener('click', () => {


        if (callOrderWindow.style.display != 'block') {
            callOrderWindow.style.display = 'block';
        } else {
            callOrderWindow.style.display = 'none';
        }

    })
}