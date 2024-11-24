const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-button');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');
const emailContainer = document.getElementById('email-container');
const loginContainer = document.getElementById('login-container');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    loginButton.disabled = true;
    errorMessage.textContent = "";
    setTimeout(() => {
        loginButton.disabled = false;

        if (username === "rod.lewis.gt" && password === "Sec12345") {
            loginContainer.classList.add('hidden');
            emailContainer.classList.remove('hidden');

            const user = ServerData.getUser(1);
            document.getElementById('user-info').innerHTML = user.displayInfo;
            setupUserInteractions(user, null, false, true);

            // load emails into the sidebar
            const emailList = document.getElementById('email-list');
            const emails = ServerData.getMailsForUser(1);

            emailList.innerHTML = emails.map(mail => `<div class="in-email-list">${mail.displayCard}</div>`).join('');

            emails.forEach((email) => {
                document.getElementById(email.displayCardId).addEventListener('click', () => email.onclick());
            });
        } else {
            errorMessage.textContent = "Invalid username or password.";
        }
    }, 1200);
});


const togglePasswordButton = document.getElementById('toggle-password');

togglePasswordButton.addEventListener('click', () => {
    const isPasswordHidden = passwordInput.type === 'password';
    passwordInput.type = isPasswordHidden ? 'text' : 'password';
    togglePasswordButton.textContent = isPasswordHidden ? '🙈' : '👁';
});

document.getElementById('close-warning').addEventListener('click', () => {
    const warningBanner = document.getElementById('warning-banner');
    if (warningBanner) {
        warningBanner.style.transition = 'opacity 0.3s ease';
        warningBanner.style.opacity = '0';
        setTimeout(() => warningBanner.remove(), 300);
    }
});
