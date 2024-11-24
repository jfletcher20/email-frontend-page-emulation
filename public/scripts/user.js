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
        return `<img src="${this.picture}/correspondent-${this.id}.jpg" alt="${this.firstName}" class="round-avatar">`;
    }

    get fullname() {
        return `${this.firstName} ${this.lastName}`;
    }

    get displayCard() {
        return `
            <div class="card">
                <div class="display-info profile-card-container">${this.profile} <b>${this.fullname}</b></div>
                <p><a href="mailto:${this.email}">${this.email}</a></p>
            </div>`;
    }

    get profileCard() {
        return `
            <div class="card">
                <div class="display-info profile-card-container">${this.profile} <b>${this.fullname}</b></div>
                <p><a href="mailto:${this.email}">${this.email}</a></p>
                <button class="logout-button" class="button">Logout</button>
            </div>`;
    }

    get displayInfo() {
        return `<div class="display-info">${this.profile} ${this.fullname}</div>`;
    }
}

function setupUserInteractions(userInstance, query = undefined, onHover = false, profileCard = false) {
    let displayInfoContainer;
    if (query != undefined && query != null) displayInfoContainer = document.querySelector(query);
    else displayInfoContainer = document.querySelector('.display-info');

    var eventType = onHover ? 'mouseover' : 'click';
    displayInfoContainer.addEventListener(eventType, (event) => {

        const profileCardContainer = document.createElement('div');
        profileCardContainer.classList.add('profile-card-container');
        profileCardContainer.style.position = 'absolute';
        profileCardContainer.style.display = 'none';
        console.log(profileCard);
        profileCardContainer.innerHTML = profileCard ? userInstance.profileCard : userInstance.displayCard;
        document.body.appendChild(profileCardContainer);

        if (profileCard) {
            profileCardContainer.querySelector('.logout-button').addEventListener('click', () => {
                window.location.reload();
            });
        }

        const rect = displayInfoContainer.getBoundingClientRect();
        profileCardContainer.style.left = `${rect.left}px`;
        profileCardContainer.style.top = `${rect.bottom + window.scrollY}px`;
        profileCardContainer.style.display = 'block';

        document.addEventListener(eventType, (event) => {
            if (!profileCardContainer.contains(event.target) && !displayInfoContainer.contains(event.target)) {
                profileCardContainer.style.display = 'none';
            }
        });
    });
}
