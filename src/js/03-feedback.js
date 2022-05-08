import throttle from 'lodash.throttle';
const inputEmail = document.querySelector('form input');
const inputMessage = document.querySelector('form textarea');
const formSubmit = document.querySelector('.feedback-form');

let valueInput = {
    email: '',
    message:'',
};

MessagesOnInput();
formSubmit.addEventListener('submit', OnFormSubmit);
inputEmail.addEventListener('input', throttle(OnInputEmail,500));
inputMessage.addEventListener('input', throttle(OnInputMessage,500));

let messages = {
    email: '',
    message:'',
};
 
function OnInputEmail(e) {
    const value = e.target.value;
    valueInput.email = value;
    localStorage.setItem("feedback-form-state", JSON.stringify(valueInput));
};
function OnInputMessage(e) {
    const value = e.target.value;
    valueInput.message = value;
   
    localStorage.setItem("feedback-form-state", JSON.stringify(valueInput));
};
function OnFormSubmit(e) {
    e.preventDefault();
  
    const savedMessage = localStorage.getItem("feedback-form-state");
    
     messages = JSON.parse(savedMessage);
    console.log(messages);
    e.target.reset();
    localStorage.removeItem("feedback-form-state");
    valueInput = {
        email: '',
    message:'',
    }
};

function MessagesOnInput() {
    const savedMessage = localStorage.getItem("feedback-form-state");
    const messages = JSON.parse(savedMessage);

    
    if (savedMessage) { 
        inputMessage.value = messages.message;
        inputEmail.value = messages.email;   
    };
         
};