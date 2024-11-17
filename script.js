function add(firstNum, secondNum) {
    return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
    if (firstNum == 0 || secondNum == 0) {
        return "BRUH."
    }
    else {
        return firstNum / secondNum;
    }
}

function operate(firstNum, secondNum, workingOperator) {
    let operationResult = 0;
    switch (workingOperator) {
        case "add":
            operationResult = add(firstNum, secondNum);
            displayButton.textContent = operationResult;
            break;
        case "subtract":
            operationResult = subtract(firstNum, secondNum);
            displayButton.textContent = operationResult;
            break;
        case "multiply":
            operationResult = multiply(firstNum, secondNum);
            displayButton.textContent = operationResult;
            break;
        case "divide":
            operationResult = divide(firstNum, secondNum);
            displayButton.textContent = operationResult;
            break;
    }
}

// Variables initialization
let firstNum, workingOperator, secondNum;
const numButtons = document.querySelectorAll('.number');
const displayButton = document.querySelector('.display');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal')
const clearButton = document.querySelector('.clear');

// Event listeners for numbers
numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        displayButton.textContent = button.textContent;
    })
})

// Event listener for operators
operatorButtons.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (operator.textContent == '+') {
            firstNum = parseFloat(displayButton.textContent);
            displayButton.textContent = operator.textContent;
            workingOperator = "add";
        }
        else if (operator.textContent == '-') {
            firstNum = parseFloat(displayButton.textContent);
            displayButton.textContent = operator.textContent;
            workingOperator = "subtract";
        }
        else if (operator.textContent == '/') {
            firstNum = parseFloat(displayButton.textContent);
            displayButton.textContent = operator.textContent;
            workingOperator = "divide";
        }
        if (operator.textContent == 'X') {
            firstNum = parseFloat(displayButton.textContent);
            displayButton.textContent = operator.textContent;
            workingOperator = "multiply";
        }
    })
})

// Listener for equal button
equalButton.addEventListener('click', () => {
    if (displayButton.textContent !== "") {
        secondNum = parseFloat(displayButton.textContent);
        operate(firstNum, secondNum, workingOperator);
    }
})

// Listener for clear button
clearButton.addEventListener('click', () => {
    firstNum = 0;
    secondNum = 0;
    workingOperator = 0;
    displayButton.textContent = "";
})