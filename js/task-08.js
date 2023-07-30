const elements = {
    form:document.querySelector(".login-form")
};
elements.form.addEventListener('submit', handlerSubmit);
function handlerSubmit(evt) {
    evt.preventDefault();
    // console.dir(evt.currentTarget);
    const {email, password} = evt.currentTarget.elements;
    if (email.value === "" || password.value === "" ) {
        alert('Будь ласка, заповніть всі поля');
        elements.form.reset();
    }else{
        console.log({Email: email.value,
            Password: password.value})
    }
    elements.form.reset()
     }

