//DOM elements
  //1. Display
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

  //2. Buttons 
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');

//Constructor 

class Calculator{
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;

    this.currentOperand = "";
    this.previousOperand = ""; 
    this.operation = undefined;
  }

  allClear() {

  }

  deleteDigit() {
    this.currentOperand = this.currentOperand.slice(0,-1);
  }

  appendDigit(digit) {
    if (digit === "." && this.currentOperand.includes(".")) return;

    if( digit === '0' && this.currentOperand === '0') return;

    this.currentOperand += digit;
  }

  selectOperator() {

  }

  calculate() {

  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
  }

  getOperandFromDisplay() {

  }
} /* class Calculator */


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

//event listener

allClearButton.addEventListener("click", button => {
  calculator.allClear();
  calculator.updateDisplay();
})

deleteButton.addEventListener('click', () => {
  calculator.deleteDigit();
  calculator.updateDisplay();
})

numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.appendDigit(button.innerText);
    calculator.updateDisplay();
  })
})
