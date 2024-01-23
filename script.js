function check() {
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let emailError = document.querySelector("#emailError");
    let passwordError = document.querySelector("#passwordError");


    if (!emailCheck(email)) {
        emailError.innerText = "Enter a valid email address";
    } else {
        emailError.innerText = "";
    }

    if (password.length < 8) {
        passwordError.innerText = "Password need 8 charecter ";
    } else {
        passwordError.innerText = "";
    }

    if (emailCheck(email) && password.length > 7) {
        alert("login successful!");
    }
}


function emailCheck(email) {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
}
