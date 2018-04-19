/**
 * Created by Valeri on 7/17/2017.
 */
class Rat{
    constructor(name){
        this.name = name;
        this.rats = [];
    }

    unite(otherRat){
        if(otherRat instanceof Rat){
            this.rats.push(otherRat);
        }
    }

    getRats(){
        return this.rats;
    }
    toString(){
        let output = this.name + '\n';
        for (let rat of this.rats) {
            output += `##${rat}`;
        }
        return output;
    }
}

let test = new Rat("Pesho");

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));

console.log(test.toString());
