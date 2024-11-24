

class Mail extends Displayable {
    constructor(id, subject, content, datetime, sender, recipient, read, attachment = undefined) {
        super();
        this.id = id;
        this.subject = subject;
        this.content = content;
        this.datetime = datetime;
        this.sender = sender;
        this.recipient = recipient;
        this.read = read;
        this.attachment = attachment;
    }

    get displayCard() {
        const date = new Date(this.datetime).toLocaleString('en-US', {
            month: 'short',
            day: 'numeric'
        });
        const previewContent = this.content.length > 32 ? this.content.slice(0, 32) + '...' : this.content;
        const previewSubject = this.subject.length > 32 ? this.subject.slice(0, 32) + '...' : this.subject;

        return `
            <div id="${this.displayCardId}" class="card ${this.read ? 'read' : 'unread'}">
                <b>${previewSubject}</b>
                <span class="date">${date}</span>
                <p>${ServerData.getUser(this.sender).displayInfo}</p>
                <p class="card-content">${previewContent}</p>
            </div>`;
    }

    get displayCardId() {
        return `email-card-${this.id}`;
    }

    get displayInfo() {
        const date = new Date(this.datetime).toLocaleString();
        return `
            <h2>${this.subject}</h2>
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px; user-select: none;">
                <div class="sender" style="display: flex; align-items: center;">
                    ${ServerData.getUser(this.sender).displayInfo}
                </div>
                <span style="margin: 0 10px; font-weight: bold; font-size: 1.2rem;">→</span>
                <div class="recipient" style="display: flex; align-items: center;">
                    ${ServerData.getUser(this.recipient).displayInfo}
                </div>
            </div>
            <p>${date}</p>
            <div>${this.content}</div>
            ${this.attachment ? `<a href="${this.attachmentLink}" download>Download Attachment</a>` : ''}
            `;
    }

    get displayInfoId() {
        return `email-info-${this.id}`;
    }

    toggleActive() {
        const emailCard = document.getElementById(this.displayCardId);
        emailCard.classList.toggle('active-email');
    }

    setInactive() {
        const emailCard = document.getElementById(this.displayCardId);
        emailCard.classList.remove('active-email');
    }

    onclick() {
        const emailDetails = document.getElementById('email-details');
        emailDetails.innerHTML = this.displayInfo;

        const sender = ServerData.getUser(this.sender);
        const recipient = ServerData.getUser(this.recipient);
        setupUserInteractions(sender, '#email-details .sender .display-info', true);
        setupUserInteractions(recipient, '#email-details .recipient .display-info', true);

        const emailCard = document.getElementById(this.displayCardId);
        emailCard.classList.remove('unread');
        emailCard.classList.add('read');

        const activeEmail = document.querySelectorAll('.active-email');
        activeEmail.forEach(email => email.classList.remove('active-email'));

        this.toggleActive();

        ServerData.setMailAsRead(this);
    }
}