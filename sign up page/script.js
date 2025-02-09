const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


document.addEventListener("DOMContentLoaded", function () {
    const signInButton = document.querySelector(".sign-in-container button");
    
    signInButton.addEventListener("click", function (event) {
        const captchaCheckbox = document.getElementById("captcha");

        if (!captchaCheckbox.checked) {
            alert("Please confirm you are not a robot.");
            event.preventDefault(); // Prevent form submission
        }
    });
});
