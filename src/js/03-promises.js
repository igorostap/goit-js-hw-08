const delayEl = document.querySelector('.delay');
const stepEl = document.querySelector('.step');
const amountEl = document.querySelector('.amount');
const btnStart = document.querySelector('.form');

let firstDelay = 0;
let stepValue = 0;
let amountValue = 0;
let timer = 0;

delayEl.addEventListener('input', () => {
  firstDelay = delayEl.value; 
  
 
   
});
stepEl.addEventListener('input', () => {
  stepValue = stepEl.value;
});
amountEl.addEventListener('input', () => {
  amountValue = amountEl.value;
});


btnStart.addEventListener('submit', (e) => {
  e.preventDefault();
  
     let j = 1;
     let timer1 = Number(firstDelay);
  for (let i = 1; i < amountValue; i++) {
   
    if (timer === 0) { 
      timer = Number(firstDelay);
      doMyTimeOut();
    } timer += Number(stepValue);   
    doMyTimeOut();   
}
  function doMyTimeOut() {
    
    
     const timerId =  setTimeout(() => {
      
     createPromise(j, timer1)
        .then(({ position, delay }) => {
            
         console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
          
        })
      
      timer1 += Number(stepValue);
       j += 1;
         
      
      
    },timer);
  }
  timer = 0;
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
  
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  })
}



