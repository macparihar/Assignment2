const nameError = document.getElementById('name-error')
const ageError = document.getElementById('age-error')
const emailError = document.getElementById('email-error')
const phoneError = document.getElementById('phone-error')
const messageError = document.getElementById('message-error')
const submitError = document.getElementById('submit-error')


function validateName() {
    const name = document.getElementById("inputName4").value;

    if (name.length == 0) {
        nameError.innerHTML = "Name is required";   
        return false;
    }     
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write your full name"
        return false;
    }
    nameError.innerHTML = "successful";
    return true;   
}


function validateEmail() {
    const email = document.getElementById('inputEmail4').value;

    if (email.length == 0) {
        emailError.innerHTML = "Email is required"
        return false;
    }
        if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Email invalid"
        return false;
    }
    emailError.innerHTML = "successful"
    return true;
}


function validatePhone() {
    const phone = document.getElementById('inputPhone4').value;
    if (phone.length == 0) {
        phoneError.innerHTML = "phone is required"
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = "phone no. should be 10 digits"
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Only digits please."
        return false;
    }

    phoneError.innerHTML = "successful"
    return true
}

// function validateMessage() {
//     const message = document.getElementById('inputMessage4')
//     const required = 30;
//     const left = required - message.length;

//     if (left < 0) {
//         messageError.innerHTML = left + "more character required";
//         return false;
//     }
//     messageError.innerHTML = "successful"
//     return true;
// }


function validateForm() {
    if(!validateName() || !validatePhone() || validateEmail() || !validateMessage() ){
        submitError.style.display = 'block';
        submitError.innerHTML = "please fix error  to submit";
        setTimeout(function () {
            submitError.style.display = 'none';
        },3000)
        return false;
    }
}
