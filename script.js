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
            break;
        case "subtract":
            operationResult = subtract(firstNum, secondNum);
            break;
        case "multiply":
            operationResult = multiply(firstNum, secondNum);
            break;
        case "divide":
            operationResult = divide(firstNum, secondNum);
            break;
    }
    return operationResult;
}

// Variables initialization
let firstNum, workingOperator, secondNum;
let actualResult;
const numButtons = document.querySelectorAll('.number');
const displayButton = document.querySelector('.display');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal')
const clearButton = document.querySelector('.clear');

// Event listeners for numbers
numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (displayButton.textContent.length < 15 && displayButton.textContent == 0) {
            displayButton.textContent = button.textContent;
        }
        else if (displayButton.textContent.length < 15 && actualResult === "e") {
            displayButton.textContent = button.textContent;
        }
        else if (displayButton.textContent.length < 15) {
            displayButton.textContent = button.textContent;
        }
    })
})

// Event listener for operators
operatorButtons.forEach((operator) => {
    operator.addEventListener('click', () => {
        if (operator.textContent == '+') {
            firstNum = parseFloat(displayButton.textContent);
            secondNum = 0;
            displayButton.textContent = operator.textContent;
            workingOperator = "add";
        }
        else if (operator.textContent == '-') {
            firstNum = parseFloat(displayButton.textContent);
            secondNum = 0;
            displayButton.textContent = operator.textContent;
            workingOperator = "subtract";
        }
        else if (operator.textContent == '/') {
            firstNum = parseFloat(displayButton.textContent);
            secondNum = 0;
            displayButton.textContent = operator.textContent;
            workingOperator = "divide";
        }
        if (operator.textContent == 'X') {
            firstNum = parseFloat(displayButton.textContent);
            secondNum = 0;
            displayButton.textContent = operator.textContent;
            workingOperator = "multiply";
        }
    })
})

// Listener for equal button
equalButton.addEventListener('click', () => {
    if (displayButton.textContent !== "") {
        secondNum = parseFloat(displayButton.textContent);
        actualResult = operate(firstNum, secondNum, workingOperator);
        displayButton.textContent = actualResult.toString();
        firstNum = actualResult;
        secondNum = null;
        workingOperator = "";
        actualResult = "e";
    }
})

// Listener for clear button
clearButton.addEventListener('click', () => {
    firstNum = 0;
    secondNum = 0;
    workingOperator = "";
    displayButton.textContent = "";
})