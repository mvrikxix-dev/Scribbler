var close = document.getElementsByClassName('cancel');
var signupModal = document.getElementById('signUp-modal');
var signinModal = document.getElementById('signIn-modal');
var screen = document.getElementById('black-screen');

Array.from(close).forEach(function (i) {
    i.onclick = function () {
        signupModal.style.display = "none";
        signinModal.style.display = "none";
        screen.style.display = "none";

    }
});

const href = document.getElementsByClassName('href');

Array.from(href)[0].onclick = function () {
    signinModal.style.display = "none";
    signupModal.style.display = "block";
}

const signupButton = document.getElementById('sign-up');
const signinButton = document.getElementById('sign-in');

signupButton.onclick = function () {
    signinModal.style.display = "none";
    signupModal.style.display = "block";
    screen.style.display = "block";

}

signinButton.onclick = function () {
    signupModal.style.display = "none"
    signinModal.style.display = "block";
    screen.style.display = "block";

}