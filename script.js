let screen = document.querySelector('.calculator__screen p')

let firstNum = ''
let operator = ''
let secondNum = ''
let res = ''
let end = false

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['+', '-', 'x', '/']

document.querySelector('.ac').onclick = clearAll

function clearAll() {
  firstNum = ''
  operator = ''
  secondNum = ''
  end = false
  screen.innerText = 0
}

document.querySelector('.calculator__buttons').addEventListener('click', clickButton)

function clickButton(event) {
  if (!event.target.classList.contains('btn')) return
  if (event.target.classList.contains('ac')) return
  screen.textContent = ''
  const key = event.target.innerText

  if (digit.includes(key)) {
    if (secondNum === '' && operator === '') {
      firstNum += key
      screen.innerText = firstNum
      console.log(firstNum)
    } else if (firstNum !== '' && secondNum !== '' && end) {
      secondNum = key
      screen.innerText = secondNum
      end = false
    } else {
      secondNum += key
      screen.textContent = secondNum
    }
    return
  }
  if (action.includes(key)) {
    operator = key
    screen.innerText = operator
    return
  }
  if (key === '=') {
    switch (operator) {
      case '+':
        firstNum = parseFloat(firstNum) + parseFloat(secondNum)
        break
      case '-':
        firstNum = parseFloat(firstNum) - parseFloat(secondNum)
        break
      case 'x':
        firstNum = parseFloat(firstNum) * parseFloat(secondNum)
        break
      case '/':
        if (secondNum === '0') {
          screen.innerText = 'Помилка'
          firstNum = ''
          operator = ''
          secondNum = ''
          return
        }
        firstNum = parseFloat(firstNum) / parseFloat(secondNum)
        break
    }
    end = true
    screen.innerText = firstNum
  }
  if (key === '+/-') {
    if (secondNum !== '') {
      secondNum = -parseFloat(secondNum).toString()
      screen.innerText = secondNum
    } else {
      firstNum = -parseFloat(firstNum).toString()
      screen.innerText = firstNum
    }
  }
}
