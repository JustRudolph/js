const calcForm = document.querySelector("#calc-form");
calcForm.addEventListener('submit', (e) => {calc(e)});

function calc(e) {
    e.preventDefault();
    cleanOperationText();

    const firstOperand = parseInt(document.querySelector('#first-operand').value);
    const secondOperand = parseInt(document.querySelector('#second-operand').value);
    const expectedResult = parseInt(document.querySelector('#expected-result').value);
    const operator = document.querySelector('#operator').value;
    
    // Validation
    if (
        (firstOperand < (-100) || firstOperand > (100))
        || (secondOperand < (-100) || secondOperand > (100))
    ) {
        alert('Jouw getallen zijn groter dan 100 of kleiner dan -100');
        return;
    }



    // Calculation
    let result = 0;

    if (operator == '+') {
        result = firstOperand + secondOperand;
    }

    if (operator == '-') {
        result = firstOperand - secondOperand;
    }

    if (operator == '*') {
        result = firstOperand * secondOperand;
    }

    if (operator == '/') {
        if (firstOperand === 0 || secondOperand === 0) {
            const error = document.createElement('h3');
            error.textContent = 'Delen door nul is niet toegestaan';
            error.setAttribute('id', 'error-text');
            error.classList.add('red');

            const errorsWrapper = document.querySelector('.errors');
            errorsWrapper.appendChild(error);
            return;
        }

        result = firstOperand / secondOperand;
    }

    const operation = document.createElement('h3');
    operation.textContent = `Jouw berekening was ${firstOperand} ${operator} ${secondOperand} = ${result}.`;
    operation.setAttribute('id', 'operation-text');
    const operationWrapper = document.querySelector('.operation');
    operationWrapper.appendChild(operation)

    const checkResultText = document.createElement('h3');
    checkResultText.setAttribute('id', 'check-result-text')

    if (result === expectedResult) {
        checkResultText.textContent = 'Het door jouw berekende antwoord is goed';
        checkResultText.classList.add('green');
    }

    if (result !== expectedResult) {
        checkResultText.textContent = 'Het door jouw berekende antwoord is fout';
        checkResultText.classList.add('red');

    }

    const checkResultWrapper = document.querySelector('.check-result');
    checkResultWrapper.appendChild(checkResultText);
}

function cleanOperationText() {
    const operationText = document.querySelector('#operation-text');
    const checkResultText = document.querySelector('#check-result-text');
    const errorText = document.querySelector('#error-text');

    if (errorText !== null) {
        errorText.remove();
    }
    
    if (operationText !== null) {
        operationText.remove();
        checkResultText.remove();
    }
}