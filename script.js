let display = document.getElementById('display');
let currentInput = '0';

function updateDisplay() {
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    updateDisplay();
}

function backspace() {
    if (currentInput.length <= 1) {
        currentInput = '0';
    } else {
        currentInput = currentInput.slice(0, -1);
    }
    updateDisplay();
}

function appendCharacter(char) {
    if (currentInput === 'Error') {
        currentInput = '0';
    }

    if (currentInput === '0' && char !== '.') {
        currentInput = char;
    } else {
        currentInput += char;
    }

    updateDisplay();
}

function calculate() {
    try {
        let expression = currentInput
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/%/g, '/100');

        let result = eval(expression);

        if (!Number.isFinite(result)) {
            throw new Error('Perhitungan tidak valid');
        }

        currentInput = String(result);
        updateDisplay();

    } catch (error) {
        currentInput = 'Error';
        updateDisplay();

        setTimeout(() => {
            currentInput = '0';
            updateDisplay();
        }, 1500);
    }
}