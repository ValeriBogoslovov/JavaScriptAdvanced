/**
 * Created by Valeri on 7/20/2017.
 */
class MailBox {
    constructor() {
        this.mailBox = [];
    }

    get messageCount() {
        return this.mailBox.length;
    }

    addMessage(subject, text) {
        this.mailBox.push({subject, text});
        return this;
    }

    deleteAllMessages(){
        this.mailBox = [];
    }

    findBySubject(substr){
        let foundMessages = this.mailBox.filter(function (a) {
            return a.subject.includes(substr);
        })
        return foundMessages;
    }

    toString() {
        let output = "";
        if (this.mailBox.length == 0) {
            output = ' * (empty mailbox)';
        }else{
            for (let obj of this.mailBox) {

                output += ` * [${obj.subject}] ${obj.text}\n`;
            }
        }
        return output;
    }
}
let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);




