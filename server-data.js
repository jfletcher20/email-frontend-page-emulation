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

                PlW1ObeuOlK1OlAzOliaQFAzQFG0ObWaQVm5PbSyObeyPbmyOFC0PbO3OVKaQVOaQFA3ObG0OFO2QVC5OlW4PVm5PVmzPFS3QFGbPVGbQVe0QVWyObObPFW2Pbm1OFKaQFS1PVC5ObSzOFi5OFWaPVA4OlO2ObK5PbS0Pbi5QVO2OlA2QFebOlK3ObAbQVe2OFS1OlG4PlmaOVeyPbm4QFC2OFi1QFGyPFKzPFK5PVm0OlWaQVWyOlKyOli4OleaQVAyObC3QVi4OlW0OVi0PVGaPFCaOVC4QFG4QFiaObWbPbe5QVG5OFGzPFWzQVA1PFm1PVOzPVOzOFi1PVe4ObA4ObeaQFe3OFGzPlK3OFezQFm3OlS5PlO0OlA1PbSaOVKaPlK1OFW4PlW5QVS0PlSyPFG3OlKaOFe0PVi5ObCyObK3PlA1PFK1PVA3OlOyPVO5PbCbPVe3OFm0ObmaQFS4PFS2OVOaPFGzOFGyQVG2Obe2QVO2PFKbQVG4PlG5PFe0OFW5QVOyPFiaQVGaOlmzQFm1Oli4QVK5OFS2QFW0PbO0OlC2Plm5Ole5PbWyQFO3PFO5OlibQFA0OVGzQFi3QFKyPle1PFWbPVAaObGyPlK2PbWyPbC4OFW0QVAyQVA2PbAaPVC3PlA1OFS5OFK4PVSzOVW4PVmyOFG3PbKzQVA4OlOzPFW5OVe0QFOyPbW1PbAbQFiaOleaQVS4ObiaOli3Ple1QFS4PFA5Oli3PVSaOVG5ObGyPlmbPlW5ObC5OVA4Obm4OlAaOFmbPVS2OlebOVCbPbKaPbi3PbKaPFi4Obi5OFW0PlSzObe=

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