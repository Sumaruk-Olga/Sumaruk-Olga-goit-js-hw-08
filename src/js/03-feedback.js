import throttle from "lodash.throttle";

const KEY_TO_LOCALSTORAGE = "feedback-form-state";

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
};


refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', throttle(onInputChange, 500));
refs.textarea.addEventListener('input', throttle(onTextareaChange, 500));

let formData;

//якщо є дані в localStorage, підставити їх в поля форми
takeDataFromLocalStorage();

function takeDataFromLocalStorage() {    
    console.log(localStorage.getItem(KEY_TO_LOCALSTORAGE));
    if (!localStorage.getItem(KEY_TO_LOCALSTORAGE)) {
         formData = {};
        console.log(formData);
    } else {
        formData = JSON.parse(localStorage.getItem(KEY_TO_LOCALSTORAGE));
        refs.form.email.value = formData.email;
        refs.form.message.value = formData.message;
    };
}

//внести зміни в поля форми і зберегти їх
function onInputChange(event) {
    console.log(event.target.value);   
    formData.email = event.target.value;
//    console.log(formData);
    localStorage.setItem(KEY_TO_LOCALSTORAGE, JSON.stringify(formData));    
}

function onTextareaChange(event) {
    console.log(event.target.value);
    formData.message = event.target.value;
    // console.log(formData);
    localStorage.setItem(KEY_TO_LOCALSTORAGE, JSON.stringify(formData));
}


//внесені зміни відправити в localStorage i очистити форму

function onFormSubmit(event) {
    event.preventDefault();   

    if (formData.email === '' || formData.message === '') {
      alert('Please, fill in all the fields!');
      return;
    };

localStorage.setItem(KEY_TO_LOCALSTORAGE, JSON.stringify(formData));
    refs.form.reset();
    localStorage.removeItem(KEY_TO_LOCALSTORAGE);
}


