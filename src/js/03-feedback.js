import throttle from 'lodash.throttle';
const inputEmail = document.querySelector('form input');
const inputMessage = document.querySelector('form textarea');
const formSubmit = document.querySelector('.feedback-form');

let valueInput = {
    email: '',
    message:'',
};

formSubmit.addEventListener('submit', OnFormSubmit);
inputEmail.addEventListener('input', throttle(OnInputEmail,500));
inputMessage.addEventListener('input', throttle(OnInputMessage,500));

MessagesOnInput();

function OnInputEmail(e) {
    const value = e.currentTarget.value;
    valueInput.email = value;
    localStorage.setItem("feedback-form-state", JSON.stringify(valueInput));
};
function OnInputMessage(e) {
    const value = e.currentTarget.value;
    valueInput.message = value;
    localStorage.setItem("feedback-form-state", JSON.stringify(valueInput));
};
function OnFormSubmit(e) {
    e.preventDefault();
    const savedMessage = localStorage.getItem("feedback-form-state");
    const messages = JSON.parse(savedMessage);
    console.log(messages);
    e.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
};

function MessagesOnInput(e) {
    const savedMessage = localStorage.getItem("feedback-form-state");
    const messages = JSON.parse(savedMessage);
    if (savedMessage) {
        
        inputEmail.value = messages.email;
        inputMessage.value = messages.message;
    };
};