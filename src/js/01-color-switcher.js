const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let startBtnId = null;

startBtn.addEventListener('click', randColorStart);
stopBtn.addEventListener('click',randColorStop);


function randColorStart() {
  startBtnID = setInterval(() => {
    document.body.style.background = getRandomHexColor()
  }, 1000);
  startBtn.setAttribute('disabled', true);
  stopBtn.disabled= false;
}

function randColorStop() {
  clearInterval(startBtnID);
  stopBtn.setAttribute('disabled', true);
  startBtn.disabled = false;
}





function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
