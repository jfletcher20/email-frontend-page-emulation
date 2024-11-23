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
    
            const emailList = document.getElementById('email-list');
            emailList.innerHTML = ServerData.getMailsForUser(1)
                .map(mail => mail.displayCard)
                .join('');

            emailList.addEventListener('click', (event) => {
                const target = event.target;
                if (target.classList.contains('card')) {
                    const mailId = target.dataset.mailId;
                    const mail = ServerData.mails.find(mail => mail.id == mailId);
                    const mailSender = ServerData.getUser(mail.sender);
                    const mailContainer = document.getElementById('mail-container');
                    mailContainer.innerHTML = mail.displayInfo;
                    mailContainer.classList.remove('hidden');
                }
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
        setTimeout(() => warningBanner.remove(), 300); // Remove after the fade-out transition
    }
});
