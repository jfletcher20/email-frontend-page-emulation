class ServerData {
    static users = [
        new User(1, "rod.lewis.gt@global-telecom.com", "Rodger", "Lewis", "https://via.placeholder.com/40"),
        new User(2, "dia.chilapu.gt@your-secret-email.com", "Diane", "Chilapu", "https://via.placeholder.com/40"),
    ];

    static mails = [
        new Mail(1, "Subject 1", "This is email content 1.", "2024-11-24T10:00:00", 1, 2, false),
        new Mail(2, "Subject 2", "This is email content 2.", "2024-11-23T10:00:00", 2, 1, true),
    ];

    static getUser(id) {
        return this.users.find(user => user.id === id);
    }

    static getMailsForUser(userId) {
        return this.mails.filter(mail => mail.recipient === userId || mail.sender === userId);
    }
}