const baseToogle = document.querySelector('.shift-button');
const innerToogle = document.querySelector('.shift');
const calculatorBody = document.querySelector('.container-1');
const para = document.querySelectorAll('p');
const innerButton = document.querySelectorAll('.inner-buttons');
const sideButton = document.querySelectorAll('.side-btn');
const equalButton = document.querySelector('.equal-btn');
const screenDisplay = document.querySelector('.display');

let mode = 'light';

innerToogle.addEventListener('click', changeMode);

function changeMode() {
    if(mode === 'light') {
        innerToogle.style.marginLeft = '0';
        innerToogle.style.color = 'white';
        innerToogle.style.backgroundColor = 'black';
        baseToogle.style.borderColor = 'black';
        calculatorBody.classList.toggle('container-1-dark');
        screenDisplay.classList.toggle('display-dark');
        mode = 'dark';
        for(let i = 0; i < para.length; i++) {
            para[i].style.color = 'white';
        }
        for(let i = 0; i < innerButton.length; i++) {
            innerButton[i].style.backgroundColor = '#438bef';
        }
        for(let i = 0; i < sideButton.length; i++) {
            sideButton[i].style.backgroundColor = '#2b655f';
        }
        equalButton.style.backgroundColor = '#d96008';
    } else {
        innerToogle.style.marginLeft = 'auto';
        innerToogle.style.color = 'black';
        innerToogle.style.backgroundColor = 'white';
        baseToogle.style.borderColor = 'white';
        calculatorBody.classList.toggle('container-1-dark');
        screenDisplay.classList.toggle('display-dark');
        mode = 'light'
        for(let i = 0; i < para.length; i++) {
            para[i].style.color = 'black';
        }
        for(let i = 0; i < innerButton.length; i++) {
            innerButton[i].style.backgroundColor = '#c4f1f0';
        }
        for(let i = 0; i < sideButton.length; i++) {
            sideButton[i].style.backgroundColor = '#fcabc8';
        }
        equalButton.style.backgroundColor = '#f7d620';
    }
}