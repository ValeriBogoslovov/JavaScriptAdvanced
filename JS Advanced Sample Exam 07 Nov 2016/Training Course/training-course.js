/**
 * Created by Valeri on 7/19/2017.
 */
class TrainingCourse{
    constructor(courseTitle, trainer){
        this.title = courseTitle;
        this.trainer = trainer;
        this.topics = [];
    }

    addTopic(title, date){
        this.topics.push({title: title, date: date});
        this.topics.sort(function (a,b) {
            return a.date - b.date;
        });
        return this;
    }
    get firstTopic(){
        return this.topics[0];
    }
    get lastTopic(){
        return this.topics[this.topics.length -1];
    }
    toString(){
        let output = `Course "${this.title}" by ${this.trainer}\n`;
        for (let obj of this.topics) {
            output += ` * ${obj.title} - ${obj.date}\n`;
        }
        return output;
    }
}

let js = new TrainingCourse("JS Intro", "Svetlin Nakov")
    .addTopic("Strings", new Date(2017, 2, 16, 18, 0))
    .addTopic("PHP First Steps", new Date(2017, 2, 12, 18, 0))
    .addTopic("Arrays", new Date(2017, 2, 14, 18, 0));

console.log("" + js);
