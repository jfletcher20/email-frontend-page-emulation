class User extends Displayable {
    constructor(id, email, firstName, lastName, picture) {
        super();
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.picture = picture;
    }

    get profile() {
        return `<img src="${this.picture}" alt="${this.firstName}" class="round-avatar">`;
    }

    get fullname() {
        return `${this.firstName} ${this.lastName}`;
    }

    get displayCard() {
        return `
            <div class="card">
                ${this.profile}
                <p>${this.fullname}</p>
                <p>${this.email}</p>
            </div>`;
    }

    get displayInfo() {
        return `<div class="display-info">${this.profile} ${this.fullname}</div>`;
    }
}

function setupUserInteractions(userInstance) {
    const displayInfoContainer = document.createElement('div');
    displayInfoContainer.innerHTML = userInstance.displayInfo;
    document.body.appendChild(displayInfoContainer);

    displayInfoContainer.addEventListener('click', (event) => {

        const profileCardContainer = document.createElement('div');
        profileCardContainer.classList.add('profile-card-container');
        profileCardContainer.style.position = 'absolute';
        profileCardContainer.style.display = 'none';
        profileCardContainer.innerHTML = userInstance.displayCard;
        document.body.appendChild(profileCardContainer);

        const rect = displayInfoContainer.getBoundingClientRect();
        profileCardContainer.style.left = `${rect.left}px`;
        profileCardContainer.style.top = `${rect.bottom + window.scrollY}px`;
        profileCardContainer.style.display = 'block';

        document.addEventListener('click', (event) => {
            if (!profileCardContainer.contains(event.target) && !displayInfoContainer.contains(event.target)) {
                profileCardContainer.style.display = 'none';
            }
        });
    });
}
