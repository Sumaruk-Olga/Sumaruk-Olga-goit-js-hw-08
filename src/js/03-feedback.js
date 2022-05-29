import throttle from "lodash.throttle";

const KEY_TO_LOCALSTORAGE = "feedback-form-state";

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
};


refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInputChange, 500))

let formData;

initFeedbackPage();


function initFeedbackPage() {
    const savedData = localStorage.getItem(KEY_TO_LOCALSTORAGE);    

    if (savedData) {        
        const parsedSavedData = JSON.parse(savedData);       

        refs.input.value = parsedSavedData.email;
        refs.textarea.value = parsedSavedData.message;        
    } else {
        formData = {};
        refs.input.value = "";
        refs.textarea.value = "";
    }

}


function onFormSubmit(event) {
    event.preventDefault();

    if (refs.input.value === "" || refs.textarea.value==="") {
        alert('Please fill in all fields!');
        return;
    };


   
    localStorage.removeItem(KEY_TO_LOCALSTORAGE);
    refs.form.reset();    
}

function onInputChange(event) {
    
        formData[event.target.name] = event.target.value;

        localStorage.setItem(KEY_TO_LOCALSTORAGE, JSON.stringify(formData));  
        console.log(formData);
        console.log(localStorage.getItem(KEY_TO_LOCALSTORAGE));
}