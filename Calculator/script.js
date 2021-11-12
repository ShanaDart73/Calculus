
const calculator = {
    displayValue: '0',
    displayOnOff: true,
    previousValue: '0',
    firstOperand: '',
    firstOpOnOff: true,
    secondOperand: '',
    secondOpOnOff: false,
    operatorSign: '',
    operatorOnOff: false,
    equals: false,
};

const btn = document.querySelectorAll('.btn');

btn.forEach(button => {
    button.addEventListener('click', (event) => {
        const { target } = event;
        const digit = target.getAttribute('data-number');
        const operator = target.getAttribute('data-operator');
        const equals = target.getAttribute('data-equals');
        const dot = target.getAttribute('data-decimal');
        const deleteUnit = target.getAttribute('data-unit');
        const clearDisplay = target.getAttribute('data-clearAll');

        switch (operator) {
            case '+':
            case '-':
            case '*':
            case '/':
                handleOperators(operator);
                break;
            default:
        }

        if (equals === '=') {
            calculate();
        }

        switch (digit) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                handleDigits(digit);
                break;
            default:
        }

        if (dot === '.') {
            decimal(dot);
        }

        if (deleteUnit === 'unit') {
            deleteOneUnit();
        }

        if (clearDisplay === 'AC') {
            clearAll();
        }

        console.log(calculator);
        updateDisplay();
    });
});

function handleDigits(digit) {
    const { displayValue } = calculator;

    if (calculator.displayOnOff) {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }

    if (digit !== null) {

        if (calculator.firstOpOnOff) {
            calculator.firstOperand += digit;
            calculator.operatorOnOff = true;
        }

        if (calculator.secondOpOnOff) {
            calculator.secondOperand += digit;
        }
    }
}

function handleOperators(operator) {
    const plus = calculator.displayValue.includes('+');
    const minus = calculator.displayValue.includes('-');
    const times = calculator.displayValue.includes('*');
    const divide = calculator.displayValue.includes('/');

    if (operator !== null && calculator.operatorOnOff) {
        if (plus) {
            calculate();
            calculator.displayValue += operator;
            calculator.operatorSign = operator;
        } else if (minus) {
            calculate();
            calculator.displayValue += operator;
            calculator.operatorSign = operator;
        } else if (times) {
            calculate();
            calculator.displayValue += operator;
            calculator.operatorSign = operator;
        } else if (divide) {
            calculate();
            calculator.displayValue += operator;
            calculator.operatorSign = operator;
        } else {
            calculator.displayValue += operator;
            calculator.operatorSign = operator;
        }

        calculator.equals = false;
        calculator.displayOnOff = true;
        calculator.firstOpOnOff = false;
        calculator.secondOpOnOff = true;
    }
}

function calculate() {
    let result = '';

   if (calculator.firstOperand !== '' && calculator.secondOperand !== '') {
        const firstOp = parseFloat(calculator.firstOperand);
        const secondOp = parseFloat(calculator.secondOperand);
        const sign = calculator.operatorSign;

        if (sign === '+') {
            result = firstOp + secondOp;
        } else if (sign === '-') {
            result = firstOp - secondOp;
        } else if (sign === '*') {
            result = firstOp * secondOp;
        } else if (sign === '/') {
            result = firstOp / secondOp;
        }

        const resultTruncated = result.toFixed(2).replace(/(\.0+|0+)$/, '');
        const res = resultTruncated.toString();

        calculator.displayValue = res;
        calculator.previousValue = res;
        calculator.firstOperand = res;
        calculator.secondOperand = '';

        calculator.secondOpOnOff = false;
        calculator.displayOnOff = false;
        calculator.equals = true;
    }
}

function decimal(dot) {
    const firstDecimal = calculator.firstOperand.includes(dot);
    const secondDecimal = calculator.secondOperand.includes(dot);

    if (calculator.firstOpOnOff) {
         if (!firstDecimal) {
             calculator.displayValue += dot;
             calculator.firstOperand += dot;
         }
    }

    if (calculator.secondOpOnOff) {
        if (!secondDecimal && calculator.secondOperand === '') {
            calculator.displayValue += '0.';
            calculator.secondOperand += '0.';
        } else if (!secondDecimal && calculator.secondOperand !== '') {
            calculator.displayValue += dot;
            calculator.secondOperand += dot;
        }
    }
}

function deleteOneUnit() {
    if (!calculator.equals) {
        calculator.displayValue = calculator.displayValue.slice(0, -1);

        if (calculator.displayValue === '') {
            calculator.displayValue = '0';
            calculator.operatorOnOff = false;
        }

        if (calculator.firstOpOnOff) {
            calculator.firstOperand = calculator.firstOperand.slice(0, -1);
        }

        if (calculator.operatorOnOff && calculator.operatorSign !== '' && calculator.secondOperand === '') {
            calculator.operatorSign = calculator.operatorSign.slice(0, -1);
            calculator.firstOpOnOff = true;
            calculator.secondOpOnOff = false;
        }

        if (calculator.secondOpOnOff && calculator.secondOperand !== '') {
            calculator.secondOperand = calculator.secondOperand.slice(0, -1);
            calculator.operatorOnOff = true;
            calculator.secondOpOnOff = true;
        }
    }
}

function clearAll() {
    calculator.displayValue = '0';
    calculator.displayOnOff = true;
    calculator.previousValue = '0';
    calculator.firstOpOnOff = true;
    calculator.firstOperand = '';
    calculator.secondOpOnOff = false;
    calculator.secondOperand = '';
    calculator.operatorOnOff = false;
    calculator.operatorSign = '';
    calculator.equals = false;
}

function updateDisplay() {
    const previous = document.querySelector('.previous');
    const display = document.querySelector('.display');

    previous.value = calculator.previousValue;
    display.value = calculator.displayValue;
}
updateDisplay();