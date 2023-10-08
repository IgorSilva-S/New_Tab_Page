//Créditos: https://zellwk.com/blog/calculator-part-1/

const display = document.querySelector('.calculator__display')
const calculator = document.querySelector('.calculator')
const keys = document.querySelector('.calcKeys')
let decimal = false
let num1 = NaN
let op, num2, result

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        if (!action) {
            if (displayedNum === '0') {
                display.textContent = keyContent
            } else {
                display.textContent = displayedNum + keyContent
            }
        }

        if (action === 'decimal') {
            if (!decimal) {
                decimal = true
            display.textContent = displayedNum + '.'
            }
        }

        //My part

        if (action === 'add') {
            num1 = parseFloat(display.textContent)
            display.textContent = '0'
            op = '+'
            decimal = false
        }

        if (action === 'subtract') {
            num1 = parseFloat(display.textContent)
            display.textContent = '0'
            op = '-'
            decimal = false
        }

        if (action === 'multiply') {
            num1 = parseFloat(display.textContent)
            display.textContent = '0'
            op = '*'
            decimal = false
        }

        if (action === 'divide') {
            num1 = parseFloat(display.textContent)
            display.textContent = '0'
            op = '/'
            decimal = false
        }

        if (action === 'calculate') {
            if (num1 != isNaN) {
                num2 = parseFloat(display.textContent)
                if (op == '+') {
                    result = num1 + num2;
                    display.textContent = result
                } else if (op == '-') {
                    result = num1 - num2;
                    display.textContent = result
                } else if (op == '*') {
                    result = num1 * num2;
                    display.textContent = result
                } else if (op == '/') {
                    result = num1 / num2;
                    display.textContent = result
                }
            }
        }

        if (action === 'clear') {
            num1 = NaN;
            num2 = undefined
            op = undefined
            decimal = false
            display.textContent = 'Limpo!'
            setTimeout(() => {
                display.textContent = '0'
            }, 1000);
        }
    }
})