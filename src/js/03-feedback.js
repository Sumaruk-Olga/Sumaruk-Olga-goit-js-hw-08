import throttle from "lodash.throttle";

const KEY_TO_LOCALSTORAGE = "feedback-form-state";

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
};

initFeedbackPage();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInputChange, 500))



function initFeedbackPage() {
    const savedData = localStorage.getItem(KEY_TO_LOCALSTORAGE);
    let parsedSavedData;
    console.log('savedData', savedData);
    if (savedData) {
        parsedSavedData = JSON.parse(savedData);
        
        console.log('parsedSavedData.email', parsedSavedData.email);
        console.log('parsedSavedData.message', parsedSavedData.message);
        refs.input.value = parsedSavedData.email || "";
        refs.textarea.value = parsedSavedData.message || "";
    } else {
        parsedSavedData = {};
    }
    console.log('parsedSavedData', parsedSavedData);
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
        const savedData = localStorage.getItem(KEY_TO_LOCALSTORAGE);
    let parsedSavedData;
    console.log('savedData', savedData);
    if (savedData) {
        parsedSavedData = JSON.parse(savedData);
        
    } else {
        parsedSavedData = {};
    }
    
    parsedSavedData[event.target.name] = event.target.value;

        refs.input.value = parsedSavedData.email || "";
        refs.textarea.value = parsedSavedData.message || "";
    
          localStorage.setItem(KEY_TO_LOCALSTORAGE, JSON.stringify(parsedSavedData));
}