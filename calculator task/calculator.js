function clearDisplay() {
    document.getElementById('display').textContent = '0';
}

function appendNumber(number) {
    const display = document.getElementById('display');
    if (display.textContent === '0') {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
}

function appendOperation(operation) {
    const display = document.getElementById('display');
    const lastChar = display.textContent.slice(-1);
    
    // Prevent multiple operators in a row
    if (['+', '-', '*', '/'].includes(lastChar)) {
        display.textContent = display.textContent.slice(0, -1) + operation;
    } else {
        display.textContent += operation;
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.textContent = eval(display.textContent) || '0';
    } catch {
        display.textContent = 'Error';
    }
}
