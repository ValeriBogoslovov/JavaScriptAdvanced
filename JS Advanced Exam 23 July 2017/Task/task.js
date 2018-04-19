/**
 * Created by Valeri on 7/23/2017.
 */
class Task{
    constructor(title, deadline, status = "Open", isOverdue = false){
        this.now = new Date();
        this.title = title;
        this.status = status;
        this.deadline = deadline;
        this.isOverdue = isOverdue;
    }

    get isOverdue() {
        return this._isOverdue;
    }

    set isOverdue(value) {
        if(this.deadline.getDate() < this.now.getDate()){
            this._isOverdue = true;
        }else{
            this._isOverdue = false;
        }

    }

    get deadline() {
        return this._deadline;
    }

    set deadline(value) {
        if(value.getDate() < this.now.getDate()){
            throw Error('Cannot create a task with past deadline!');
        }
        this._deadline = value;
    }

    toString(){
        let output ="";
        if(this.status == 'Open' && !this.isOverdue){
            output += '[\u2731] ';
        }else if(this.status == 'In Progress' && !this.isOverdue){
            output += '[\u219D] ';
        }else if(this.status == 'Complete'){
            output += '[\u2714] ' + this.title;
            return output;
        }else if(this.isOverdue){
            output += '[\u26A0] ';
            output += `${this.title} (overdue)`;
            return output;
        }
        output += `${this.title} (deadline: ${this._deadline})`;
        return output;
    }
}
let date1 = new Date();
date1.setDate(date1.getDate() + 7); // Set date 7 days from now
let task1 = new Task('JS Homework', date1);
let date2 = new Date();
date2.setFullYear(date2.getFullYear() + 1); // Set date 1 year from now
let task2 = new Task('Start career', date2);
console.log(task1 + '\n' + task2);
let date3 = new Date();
date3.setDate(date3.getDate() + 3); // Set date 3 days from now
let task3 = new Task('football', date3);
// Create two tasks with deadline set to current time
let task4 = new Task('Task 4', new Date());
let task5 = new Task('Task 5', new Date());
task1.status = 'In Progress';
task3.status = 'In Progress';
task5.status = "Complete";
let tasks = [task1, task2, task3, task4, task5];
setTimeout(() => {
    console.log(tasks.join('\n'));
}, 1000);
let overdueTask = new Task('Overdue Task', new Date(2005, '4', '20'));

