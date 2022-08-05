window.addEventListener('load', bindEvents);
let buttons;
function bindEvents() {
  buttons = document.querySelectorAll('button');
  buttons.forEach((button) => button.addEventListener('click', printXorZero));
}
var isGameStop = false;
var flag = true;
var clickCount = 0;

function printXorZero() {
  let currentButton = this;
  if (currentButton.innerText.length == 0) {
    clickCount++;
    currentButton.innerText = flag ? 'X' : 'O';
    if (clickCount >= 5 && isGameOver()) {
      document.querySelector('result').innerText('Game Over');
    }
    flag = !flag;
  }
}

const isNotBlank = (button) => button.innerText.length > 0;

const isSameRow = (one, two, three) => {
  if (isNotBlank(one) && isNotBlank(two) && isNotBlank(three)) {
    if (one.innerText == two.innerText && one.innerText == three.innerText) {
      return true;
    }
  }
  return false;
};

function isGameOver() {
  isGameStop = isSameRow(buttons[0], buttons[1], buttons[2])
    || isSameRow(buttons[3], buttons[4], buttons[5])
    || isSameRow(buttons[6], buttons[7], buttons[8]);
  return isGameStop;
}