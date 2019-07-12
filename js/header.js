var close = document.getElementsByClassName('cancel');
var signupModal = document.getElementById('signUp-modal');
var signinModal = document.getElementById('signIn-modal');
var screen = document.getElementById('black-screen');
var createPostModal = document.getElementById('createPost-modal');

//On clickin the 'X' button, the display of Sign up modal, Sign in modal, Black screen and Create post modal is switched to none

Array.from(close).forEach(function (i) {
    i.onclick = function () {
        signupModal.style.display = "none";
        signinModal.style.display = "none";
        screen.style.display = "none";
        createPostModal.style.display = "none";
    }
});

const href = document.getElementsByClassName('href');

//On clicking the Sign up hyperlink in Sign In modal, the Sign up modal pops up and the display Sign in modal is switch to none

Array.from(href)[0].onclick = function () {
    signinModal.style.display = "none";
    signupModal.style.display = "block";
}

const signupButton = document.getElementById('sign-up');
const signinButton = document.getElementById('sign-in');

//On clicking the 'Sign Up' button, Sign up modal pops up

signupButton.onclick = function () {
    signinModal.style.display = "none";
    signupModal.style.display = "block";
    screen.style.display = "block";
}

//On clicking the 'Sign In' button, Sign in modal pops up

signinButton.onclick = function () {
    signupModal.style.display = "none"
    signinModal.style.display = "block";
    screen.style.display = "block";
}