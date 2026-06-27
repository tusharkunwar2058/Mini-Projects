let userError = document.getElementById("userError");
let passwordError = document.getElementById("passwordError");
let confirmPasswordError1 = document.getElementById("confirmPasswordError1");
let confirmPasswordError2 = document.getElementById("confirmPasswordError2");
let form = document.getElementById("myForm");


function validateUserName(userName) {

    if (userName === "") {
        userError.innerHTML = "Name can't be empty";
    }

    if (/\d/.test(userName)) {
        userError.innerHTML = "Name can't contain numbers";
    }
}

function validatePassword(password) {

    if (password === "") {
        passwordError.innerHTML = "Password can't be empty";
    }
}

function validateConfirmPassword(password, confirmPassword) {

    if (confirmPassword === "") {
        confirmPasswordError1.innerHTML = "Please Confirm Password";
    }

    if (password !== confirmPassword) {
        confirmPasswordError2.innerHTML = "Password do not match";
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    userError.innerHTML = "";
    passwordError.innerHTML = "";
    confirmPasswordError1.innerHTML = "";
    confirmPasswordError2.innerHTML = "";

    validateUserName(userName);
    validatePassword(password);
    validateConfirmPassword(password, confirmPassword);
    
})