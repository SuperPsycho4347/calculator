let firstOperand, secondOperand, actualOperator;

firstOperand = getNum();
secondOperand = getNum();


function operate() {

    
}

function getNum() {
    const container = document.querySelector('.container');
    let selectNum;
    container.addEventListener('click', (event) => {
        switch (event.target.id) {
            case '9':
                selectNum = 9;
                break;
            case '8':
                selectNum = 8;
                break;
            case '7':
                selectNum = 7;
                break;
            case '6':
                selectNum = 6;
                break;
            case '5':
                selectNum = 5;
                break;
            case '4':
                selectNum = 4;
                break;
            case '3':
                selectNum = 3;
                break;
            case '2':
                selectNum = 2;
                break;
            case '1':
                selectNum = 1;
                break;
            case '0':
                selectNum = 0;
                break;
        }
        display(selectNum);
        return selectNum;
    })
}

function getOperand() {
    
}

function display(passedOperand) {
    const displayPara = document.querySelector('.display');
    displayPara.textContent = passedOperand;
}

function add() {

}

function subtract() {

}

function multiply() {

}

function divide() {

}