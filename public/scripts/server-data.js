
class ServerData {
    static #baseLink = "https://global-telecom-official.web.app";
    static users = [
        new User(1, "rod.lewis.gt@global-telecom.com", "Rodger", "Lewis", this.#baseLink + "/profile-pictures"),
        new User(2, "dia.chilapu.gt@your-secret-email.com", "Diane", "Chilapu", this.#baseLink + "/profile-pictures"),
    ];

    static mails = [


        new Mail(998,
            "Information Request",
            `My wife has <clue>4</clue> night <clue>shift</clue>s this week, how about your <clue>public</clue> wife?<br><br>
        
                    <i>Kmzi qi csyv tyfpmg oic ws M ger wirh xli wigvix oic fijsvi ai gsrxmryi.</i>`,
            "2024-04-09T22:07:00", 1, 2, true),

        new Mail(999,
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
            "2024-04-10T18:03:00", 2, 1, true),

        new Mail(1000,
            "Can't make it",
            `I'm sorry, I can't make it to the meeting. My wife has
                    <clue>1</clue> last night <clue>shift</clue> this week, so I have to take care of the kids tonight. I'll make it up to you, I promise.<br><br>
                    
                    J'n tfoejoh uif lfz bt bo buubdinfou tjodf jut ufyu dbo'u cf tfou wjb fnbjm.<br><br>
                    
                    Up vtf ju pqfo uif dszquphsbqiz gmvuufs bqq:<br>
                    <i>Dibohf qspgjmf > Zpv > Lfzt > Tznnfusjd Lfzt > Jnqpsu Tfdsfu Lfz</i>`,
            "2024-04-10T18:12:00", 1, 2, true, "attachment-1.txt"),

        new Mail(1001,
            "Payment to A. P.",
            "See attachment",
            "2024-04-16T10:05:56",
            1, 2, true, "Payment to A. P.".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1002,
            "Re: Payment to A. P.",
            "See attachment",
            "2024-04-17T09:07:50",
            2, 1, true, "Re: Payment to A. P.".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1003,
            "Payment to J. O.",
            "See attachment",
            "2024-05-03T12:21:14",
            1, 2, true, "Payment to J. O.".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1004,
            "Re: Payment to J. O.",
            "See attachment",
            "2024-05-04T09:22:11",
            2, 1, true, "Re: Payment to J. O.".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1005,
            "Payment to R. S.",
            "See attachment",
            "2024-06-11T08:22:28",
            1, 2, true, "Payment to R. S.".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1006,
            "Re: Payment to R. S.",
            "See attachment",
            "2024-06-12T09:20:14",
            2, 1, true, "Re: Payment to R. S.".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1007,
            "Re: Re: Payment to R. S.",
            "See attachment",
            "2024-06-13T13:00:00",
            1, 2, true, "Re: Re: Payment to R. S.".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1008,
            "Payment to V. M.",
            "See attachment",
            "2024-06-16T14:13:09",
            1, 2, true, "Payment to V. M.".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1009,
            "Re: Payment to V. M.",
            "See attachment",
            "2024-06-17T09:29:56",
            2, 1, true, "Re: Payment to V. M.".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1010,
            "Payment to B. T.",
            "See attachment",
            "2024-07-04T11:21:54",
            1, 2, true, "Payment to B. T.".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1011,
            "Re: Payment to B. T.",
            "See attachment",
            "2024-07-05T09:20:35",
            2, 1, true, "Re: Payment to B. T.".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1012,
            "Payment to L. T.",
            "See attachment",
            "2024-07-05T10:15:00",
            1, 2, true, "Payment to L. T.".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1013,
            "Re: Payment to L. T.",
            "See attachment",
            "2024-07-06T09:45:00",
            2, 1, true, "Re: Payment to L. T.".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1014,
            "Payment to M. K.",
            "See attachment",
            "2024-07-07T10:09:15",
            1, 2, true, "Payment to M. K.".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1015,
            "Re: Payment to M. K.",
            "See attachment",
            "2024-07-08T09:02:01",
            2, 1, true, "Re: Payment to M. K.".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1016,
            "Payment to R. L.",
            "See attachment",
            "2024-07-11T12:04:55",
            1, 2, true, "Payment to R. L.".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1017,
            "Re: Payment to R. L.",
            "See attachment",
            "2024-07-12T09:10:00",
            2, 1, true, "Re: Payment to R. L.".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1018,
            "Payment to F. H.",
            "See attachment",
            "2024-07-13T10:27:00",
            1, 2, true, "Payment to F. H.".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1019,
            "Re: Payment to F. H.",
            "See attachment",
            "2024-07-13T14:15:00",
            2, 1, true, "Re: Payment to F. H.".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1020,
            "Payment to T. K.",
            "See attachment",
            "2024-07-16T11:45:00",
            1, 2, true, "Payment to T. K.".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1021,
            "Re: Payment to T. K.",
            "See attachment",
            "2024-07-16T15:30:00",
            2, 1, true, "Re: Payment to T. K.".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1022,
            "Payment to J. C.",
            "See attachment",
            "2024-07-19T09:10:00",
            1, 2, true, "Payment to J. C.".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1023,
            "Re: Payment to J. C.",
            "See attachment",
            "2024-07-19T13:45:00",
            2, 1, true, "Re: Payment to J. C.".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1024,
            "Payment to J. O. (Middleman)",
            "See attachment",
            "2024-07-20T15:34:00",
            1, 2, true, "Payment to J. O. (Middleman)".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1025,
            "Re: Payment to J. O. (Middleman)",
            "See attachment",
            "2024-07-21T12:10:00",
            2, 1, true, "Re: Payment to J. O. (Middleman)".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1026,
            "Payment to A. R. (Peru)",
            "See attachment",
            "2024-07-23T09:05:00",
            1, 2, true, "Payment to A. R. (Peru)".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1027,
            "Re: Payment to A. R. (Peru)",
            "See attachment",
            "2024-07-23T13:20:00",
            2, 1, true, "Re: Payment to A. R. (Peru)".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1028,
            "Payment to A. R. (Peru)",
            "See attachment",
            "2024-07-24T10:40:00",
            1, 2, true, "Payment to A. R. (Peru)".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1029,
            "Re: Payment to A. R. (Peru)",
            "See attachment",
            "2024-07-24T14:50:00",
            2, 1, true, "Re: Payment to A. R. (Peru)".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1030,
            "Payment to J. O. (Middleman)",
            "See attachment",
            "2024-07-26T11:25:00",
            1, 2, true, "Payment to J. O. (Middleman)".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1031,
            "Re: Payment to J. O. (Middleman)",
            "See attachment",
            "2024-07-27T15:10:00",
            2, 1, true, "Re: Payment to J. O. (Middleman)".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1032,
            "Just to be sure",
            "See attachment",
            "2024-07-28T17:25:00",
            2, 1, true, "Just to be sure".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1033,
            "Re: Just to be sure",
            "See attachment",
            "2024-07-29T19:43:00",
            1, 2, true, "Re: Just to be sure".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1034,
            "Betrayal",
            "See attachment",
            "2024-07-29T23:52:00",
            2, 1, true, "Betrayal".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1035,
            "Re: Betrayal",
            "See attachment",
            "2024-07-30T06:38:00",
            1, 2, true, "Re: Betrayal".replaceAll(":", "_") + ".txt_encrypted_aes"),

        new Mail(1036,
            "Re: Re: Betrayal",
            "See attachment",
            "2024-07-30T07:01:00",
            2, 1, false, "Re: Re: Betrayal".replaceAll(":", "_") + ".txt_encrypted_aes"),

    ];

    static getUser(id) {
        return this.users.find(user => user.id === id);
    }

    static getMailsForUser(userId) {
        return this.mails.filter(mail => mail.recipient === userId || mail.sender === userId).sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
    }

    static setMailAsRead(mail) {
        console.log(mail);
        this.mails.find(m => m.id === mail.id).read = true;
    }
}