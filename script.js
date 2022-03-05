function addNumber(num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;

}

function subtractNumber(num1, num2) {
    console.log(num1 - num2);
    return num1 - num2;
}

function multiplyNumber(num1, num2) {
    console.log(num1 * num2);
    return num1 * num2; 
}

function divideNumber(num1, num2) {
    console.log(num1 / num2);
    return num1 / num2;
}

function operate(num1, num2, operator) {
    switch(operator) {
        case '+':
            return addNumber(num1, num2);
            break;
        case '-':
            return subtractNumber(num1, num2);
            break;
        case '*':
            return multiplyNumber(num1, num2);
            break;
        case '/':
            return divideNumber(num1, num2);
            break;    
    }
    
}

const displayScreen = document.querySelector('.onscreen-display');
const button1 = document.querySelector('.number-1');
const button2 = document.querySelector('.number-2');
const button3 = document.querySelector('.number-3');
const button4 = document.querySelector('.number-4');
const button5 = document.querySelector('.number-5');
const button6 = document.querySelector('.number-6');
const button7 = document.querySelector('.number-7');
const button8 = document.querySelector('.number-8');
const button9 = document.querySelector('.number-9');
const button0 = document.querySelector('.number-0');
const buttonPlus = document.querySelector('.plus-sign');
const buttonMinus = document.querySelector('.minus-sign');
const buttonMultiply = document.querySelector('.multiply-sign');
const buttonDivide = document.querySelector('.divide-sign');
const buttonEqual = document.querySelector('.equal-sign');
const buttonClear = document.querySelector('.clear');
const buttonDotted = document.querySelector('.dotted-sign');
const buttonBack = document.querySelector('.back-space');

function limitNumber() {
    if(displayValue.length === 9) {
        return;
    }
}

function display() {
    button1.addEventListener('click', () => {
        if(displayValue.length === 9) {

        } else {
            if(answer !== '' || erroMessage !== '') {
                displayScreen.textContent = '';
                answer = '';
            }
            displayScreen.textContent += '1';
            displayValue += '1'; 
        }
    });
    button2.addEventListener('click', () => {
        if(answer !== '' || erroMessage !== '') {
            displayScreen.textContent = '';
            answer = '';
        }
        displayScreen.textContent += '2';
        displayValue += '2';
    });
    button3.addEventListener('click', () => {
        if(answer !== '' || erroMessage !== '') {
            displayScreen.textContent = '';
            answer = '';
        }
        displayScreen.textContent += '3';
        displayValue += '3';
    });
    button4.addEventListener('click', () => {
        if(answer !== '' || erroMessage !== '') {
            displayScreen.textContent = '';
            answer = '';
        }
        displayScreen.textContent += '4';
        displayValue += '4';
    });
    button5.addEventListener('click', () => {
        if(answer !== '' || erroMessage !== '') {
            displayScreen.textContent = '';
            answer = '';
        }
        displayScreen.textContent += '5';
        displayValue += '5';
    });
    button6.addEventListener('click', () => {
        if(answer !== '' || erroMessage !== '') {
            displayScreen.textContent = '';
            answer = '';
        }
        displayScreen.textContent += '6';
        displayValue += '6';
    });
    button7.addEventListener('click', () => {
        if(answer !== '' || erroMessage !== '') {
            displayScreen.textContent = '';
            answer = '';
        }
        displayScreen.textContent += '7';
        displayValue += '7';
    });
    button8.addEventListener('click', () => {
        if(answer !== '' || erroMessage !== '') {
            displayScreen.textContent = '';
            answer = '';
        }
        displayScreen.textContent += '8';
        displayValue += '8';
    });
    button9.addEventListener('click', () => {
        if(answer !== '' || erroMessage !== '') {
            displayScreen.textContent = '';
            answer = '';
        }
        displayScreen.textContent += '9';
        displayValue += '9';
    });
    button0.addEventListener('click', () => {
        if(answer !== '' || erroMessage !== '') {
            displayScreen.textContent = '';
            answer = '';
        }
        displayScreen.textContent += '0';
        displayValue += '0';
    });
    
}
display();

function calculate() {
    num2 = Number(displayValue);
    if(num2 === 0) {
        erroMessage = 'error'
        displayScreen.textContent = erroMessage;
        num2 = '';
        num1 = '';
        operation = '';
        displayValue = '';
    } else {
        num1 = Number(operate(num1, num2, operation));
        num1.toFixed(1);
        displayScreen.textContent = num1;
        answer = num1;
    }
}

let num1 = '';
let num2 = '';
let operation = '';
let displayValue = '';
let answer = '';
let erroMessage = '';

buttonPlus.addEventListener('click', () => {
    if(num1 === '' && displayValue === '') {
        return;
    } else if(num1 === '') {
        num1 = Number(displayValue);
        operation = '+';
        displayValue = '';
        displayScreen.textContent = '';
    } else {
        calculate();
        operation = '+';
        displayValue = '';
        num2 = '';
    }    
});

buttonMinus.addEventListener('click', () => {
    if(num1 === '' && displayValue === '') {
        return;
    } else if(num1 === '') {
        num1 = Number(displayValue);
        operation = '-';
        displayValue = '';
        displayScreen.textContent = '';
    } else {
        calculate();
        operation = '-';
        displayValue = '';
        num2 = '';
    }    
});

buttonMultiply.addEventListener('click', () => {
    if(num1 === '' && displayValue === '') {
        return;
    } else if(num1 === '') {
        num1 = Number(displayValue);
        operation = '*';
        displayValue = '';
        displayScreen.textContent = '';
    } else {
        calculate();
        operation = '*';
        displayValue = '';
        num2 = '';
    }    
});

buttonDivide.addEventListener('click', () => {
    if(num1 === '' && displayValue === '') {
        return;
    } else if(num1 === '') {
        num1 = Number(displayValue);
        operation = '/';
        displayValue = '';
        displayScreen.textContent = '';
    } else {
        calculate();
        operation = '/';
        displayValue = '';
        num2 = '';
    }    
});

buttonEqual.addEventListener('click', () => {
    if(operation === '') {
        return;
    }
    calculate();
    num2 = '';
    num1 = '';
    operation = '';
    displayValue = '';
});
// delete keyboard support
buttonClear.addEventListener('click', () => {
    displayScreen.textContent = '';
    num1 = '';
    num2 = '';
    operation = '';
    displayValue = '';
    answer = '';
});

buttonDotted.addEventListener('click', () => {
    for(let i = 0; i < displayValue.length; i++) {
        if(displayValue[i] === '.') {
            return;
        }
    }
    displayScreen.textContent += ".";
    displayValue += '.';
})

buttonBack.addEventListener('click', () => {
    if(displayValue === '') {
        return;
    } else if(displayValue.length === 1) {
        displayScreen.textContent = '';
        displayValue = '';
    } else {
        let temp = displayValue;
        temp = temp.substring(0, temp.length-1);
        displayScreen.textContent = temp;
        displayValue = temp;
    }
});

window.addEventListener('keydown', pressNumber)

function pressNumber(e) {
    let key = e.keyCode;
    if(key === 49) {
        if(answer !== '' || erroMessage !== '') {
            displayScreen.textContent = '';
            answer = '';
        }
        displayScreen.textContent += '1';
        displayValue += '1';
    } else if (key === 56) {
        if(num1 === '' && displayValue === '') {
            return;
        } else if(num1 === '') {
            num1 = Number(displayValue);
            operation = '*';
            displayValue = '';
            displayScreen.textContent = '';
        } else {
            calculate();
            operation = '*';
            displayValue = '';
            num2 = '';
        }    
    } else if (key === 187) {
        if(num1 === '' && displayValue === '') {
            return;
        } else if(num1 === '') {
            num1 = Number(displayValue);
            operation = '+';
            displayValue = '';
            displayScreen.textContent = '';
        } else {
            calculate();
            operation = '+';
            displayValue = '';
            num2 = '';
        }    
    } else if (key === 50) {
        if(answer !== '' || erroMessage !== '') {
            displayScreen.textContent = '';
            answer = '';
        }
        displayScreen.textContent += '2';
        displayValue += '2';
    } else if (key === 51) {
        if(answer !== '' || erroMessage !== '') {
            displayScreen.textContent = '';
            answer = '';
        }
        displayScreen.textContent += '3';
        displayValue += '3';
    } else if (key === 52) {
        if(answer !== '' || erroMessage !== '') {
            displayScreen.textContent = '';
            answer = '';
        }
        displayScreen.textContent += '4';
        displayValue += '4';
    } else if (key === 53) {
        if(answer !== '' || erroMessage !== '') {
            displayScreen.textContent = '';
            answer = '';
        }
        displayScreen.textContent += '5';
        displayValue += '5';
    } else if (key === 54) {
        if(answer !== '' || erroMessage !== '') {
            displayScreen.textContent = '';
            answer = '';
        }
        displayScreen.textContent += '6';
        displayValue += '6';
    } else if (key === 55) {
        if(answer !== '' || erroMessage !== '') {
            displayScreen.textContent = '';
            answer = '';
        }
        displayScreen.textContent += '7';
        displayValue += '7';
    } else if (key === 56) {
        if(answer !== '' || erroMessage !== '') {
            displayScreen.textContent = '';
            answer = '';
        }
        displayScreen.textContent += '8';
        displayValue += '8';
    } else if (key === 57) {
        if(answer !== '' || erroMessage !== '') {
            displayScreen.textContent = '';
            answer = '';
        }
        displayScreen.textContent += '9';
        displayValue += '9';
    } else if (key === 48) {
        if(answer !== '' || erroMessage !== '') {
            displayScreen.textContent = '';
            answer = '';
        }
        displayScreen.textContent += '0';
        displayValue += '0';
    } else if (key === 8 ) {
        if(displayValue === '') {
            return;
        } else if(displayValue.length === 1) {
            displayScreen.textContent = '';
            displayValue = '';
        } else {
            let temp = displayValue;
            temp = temp.substring(0, temp.length-1);
            displayScreen.textContent = temp;
            displayValue = temp;
        }
    } else if (key === 187 || key === 13) {
        if(operation === '') {
            return;
        }
        calculate();
        num2 = '';
        num1 = '';
        operation = '';
        displayValue = '';
    } else if (key === 46) {
        displayScreen.textContent = '';
        num1 = '';
        num2 = '';
        operation = '';
        displayValue = '';
        answer = '';
    } else if (key === 189) {
        if(num1 === '' && displayValue === '') {
            return;
        } else if(num1 === '') {
            num1 = Number(displayValue);
            operation = '-';
            displayValue = '';
            displayScreen.textContent = '';
        } else {
            calculate();
            operation = '-';
            displayValue = '';
            num2 = '';
        }    
    } else if (key === 191) {
        if(num1 === '' && displayValue === '') {
            return;
        } else if(num1 === '') {
            num1 = Number(displayValue);
            operation = '/';
            displayValue = '';
            displayScreen.textContent = '';
        } else {
            calculate();
            operation = '/';
            displayValue = '';
            num2 = '';
        }    
    } else if (key === 190) {
        for(let i = 0; i < displayValue.length; i++) {
            if(displayValue[i] === '.') {
                return;
            }
        }
        displayScreen.textContent += ".";
        displayValue += '.';
    } 
}

