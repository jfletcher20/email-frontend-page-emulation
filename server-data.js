const baseLink = "http://127.0.0.1:5500/"

class ServerData {
    static users = [
        new User(1, "rod.lewis.gt@global-telecom.com", "Rodger", "Lewis", baseLink + "/profile-pictures"),
        new User(2, "dia.chilapu.gt@your-secret-email.com", "Diane", "Chilapu", baseLink + "/profile-pictures"),
    ];

    static mails = [
        new Mail(10000,
            "Re: Betrayal",
            "No loose ends. Nothing personal, just business.",
            "2024-11-24T10:00:00", 2, 1, false),
        new Mail(9999,
            "Betrayal",
            "You ratted me out?! HOW COULD YOU?",
            "2024-11-23T10:00:00", 1, 2, true),

        new Mail(3,
            "Can't make it", // 'Secret Key'
            `I'm sorry, I can't make it to the meeting. My wife has
            <clue>1</clue> last night <clue>shift</clue> this week, so I have to take care of the kids tonight. I'll make it up to you, I promise.<br><br>
            
            J'n tfoejoh uif lfz bt bo <a href="${baseLink}attachments/attachment-1.txt">buubdinfou</a> tjodf jut ufyu dbo'u cf tfou wjb fnbjm.<br><br>
            
            Up vtf ju pqfo uif dszquphsbqiz gmvuufs bqq:<br>
            <i>Dibohf qspgjmf > Zpv > Lfzt > Tznnfusjd Lfzt > Jnqpsu Tfdsfu Lfz</i>`,
            "2024-11-23T09:00:00", 1, 2, false),
        new Mail(2,
            "Re: Information Request",
            `The way you phrase that makes it seem like I'm an adulterer, haha. My wife has <clue>2</clue> night <clue>shift</clue>s this week.<br><br>
            
            <i>
                Qh eqwtug, aqw cpf K dqvj mpqy K co ejgcvkpi qp jgt cpf jcxg c ugetgv ykhg, dwv vjg tguv qh vjg yqtnf fqgup'v pggf vq mpqy uq rngcug fqp'v uca vjcv ykvjqwv gpetarvkpi qwt gocknu hktuv.<br>
                K'o ugpfkpi oa rwdnke mga dwv kv'u kp dcug64, nqqm wr c fgeqfgt qpnkpg. Ugpf og vjcv ugetgv mga cntgcfa. Vjg rwdnke mga K'xg ugpv ku CNUQ UJKHVGF! FQP'V HQTIGV! Uq hktuv aqw'tg iqppc pggf vq fgeqfg kv wukpi ujkhv 2, cpf vjgp fgeqfg htqo dcug64 ykvj uqog qpnkpg crr.<br><br>

                LhS1KxaqKhG1KhWvKhewMBWvMBC0KxSwMRi5LxOuKxauLxiuKBY0LxK3KRGwMRKwMBW3KxC0KBK2MRY5KhS4LRi5LRivLBO3MBCxLRCxMRa0MRSuKxKxLBS2Lxi1KBGwMBO1LRY5KxOvKBe5KBSwLRW4KhK2KxG5LxO0Lxe5MRK2KhW2MBaxKhG3KxWxMRa2KBO1KhC4LhiwKRauLxi4MBY2KBe1MBCuLBGvLBG5LRi0KhSwMRSuKhGuKhe4KhawMRWuKxY3MRe4KhS0KRe0LRCwLBYwKRY4MBC4MBewKxSxLxa5MRC5KBCvLBSvMRW1LBi1LRKvLRKvKBe1LRa4KxW4KxawMBa3KBCvLhG3KBavMBi3KhO5LhK0KhW1LxOwKRGwLhG1KBS4LhS5MRO0LhOuLBC3KhGwKBa0LRe5KxYuKxG3LhW1LBG1LRW3KhKuLRK5LxYxLRa3KBi0KxiwMBO4LBO2KRKwLBCvKBCuMRC2Kxa2MRK2LBGxMRC4LhC5LBa0KBS5MRKuLBewMRCwKhivMBi1Khe4MRG5KBO2MBS0LxK0KhY2Lhi5Kha5LxSuMBK3LBK5KhexMBW0KRCvMBe3MBGuLha1LBSxLRWwKxCuLhG2LxSuLxY4KBS0MRWuMRW2LxWwLRY3LhW1KBO5KBG4LROvKRS4LRiuKBC3LxGvMRW4KhKvLBS5KRa0MBKuLxS1LxWxMBewKhawMRO4KxewKhe3Lha1MBO4LBW5Khe3LROwKRC5KxCuLhixLhS5KxY5KRW4Kxi4KhWwKBixLRO2KhaxKRYxLxGwLxe3LxGwLBe4Kxe5KBS0LhOvKxa=

                <br><br>Rm sqc gr mncl rfc apwnrmepynfw djsrrcp ynn:<br>
                Afylec npmdgjc > Amppcqnmlbclr 1 > Icwq > Yqwkkcrpga Icwq (qfmsjb zc mncl zw bcdysjr) > Gknmpr Nszjga Icw<br>
                Lmu wms ayl clapwnr wmsp qcapcr icw ugrf kw nszjga icw ylb rfcl qclb gr rm kc.<br>
            </i>`,
            "2024-11-23T09:00:00", 2, 1, true),
        new Mail(1,
            "Information Request",
            `My wife has <clue>4</clue> night <clue>shift</clue>s this week, how about your <clue>public</clue> wife?<br><br>

            <i>Kmzi qi csyv tyfpmg oic ws M ger wirh xli wigvix oic fijsvi ai gsrxmryi.</i>`,
            "2024-11-23T09:00:00", 1, 2, true),


    ];

    static getUser(id) {
        return this.users.find(user => user.id === id);
    }

    static getMailsForUser(userId) {
        return this.mails.filter(mail => mail.recipient === userId || mail.sender === userId);
    }

    static setMailAsRead(mail) {
        console.log(mail);
        this.mails.find(m => m.id === mail.id).read = true;
    }
}