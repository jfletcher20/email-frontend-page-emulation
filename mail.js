

class Mail extends Displayable {
    constructor(id, subject, content, datetime, sender, recipient, read) {
        super();
        this.id = id;
        this.subject = subject;
        this.content = content;
        this.datetime = datetime;
        this.sender = sender;
        this.recipient = recipient;
        this.read = read;
    }

    get displayCard() {
        const date = new Date(this.datetime).toLocaleString('en-US', {
            month: 'short',
            day: 'numeric'
        });
        const previewContent = this.content.length > 32 ? this.content.slice(0, 32) + '...' : this.content;
        const previewSubject = this.subject.length > 32 ? this.subject.slice(0, 32) + '...' : this.subject;

        return `
            <div class="card ${this.read ? 'read' : 'unread'}">
                <p>${previewSubject} ${date}</p>
                <p>${ServerData.getUser(this.sender).displayInfo}</p>
                <p class="card-content">${previewContent}</p>
            </div>`;
    }

    get displayInfo() {
        const date = new Date(this.datetime).toLocaleString();
        const sender = ServerData.getUser(this.sender);
        return `
            <h2>${this.subject}</h2>
            ${sender.displayCard}
            <p>${date}</p>
            <div>${this.content}</div>`;
    }
}