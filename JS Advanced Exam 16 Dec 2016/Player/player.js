/**
 * Created by Valeri on 7/17/2017.
 */
class Player {
    constructor(nickName) {
        this.nickName = nickName;
        this.scoreList = [];
    }

    addScore(score) {
        if(!isNaN(score) && score !== null){
            this.scoreList.push(Number(score));
            this.sortArray();
        }
        return this;
    }

    get scoreCount() {
        return this.scoreList.length;
    }

    get highestScore() {
        let highest = this.sortArray();
        return highest[0];
        //Math.max.apply(null, this.scoreList); returns -Infinity :)
    }

    get topFiveScore() {
        let topFive = this.sortArray();
        return topFive.slice(0, 5);
    }

    toString() {
        return `${this.nickName}: [${this.sortArray()}]`;
    }

    sortArray() {
        return this.scoreList.sort((a,b) => b-a);
    }
}
