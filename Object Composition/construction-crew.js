/**
 * Created by Valeri on 7/6/2017.
 */
function solve(obj){

    let myObj = {
        weight: obj.weight,
        experience: obj.experience,
        bloodAlcoholLevel: obj.bloodAlcoholLevel,
        handsShaking: obj.handsShaking
    };

    if(myObj.handsShaking === true){
        myObj.bloodAlcoholLevel += (myObj.weight * 0.1 * myObj.experience);
        myObj.handsShaking = false;
    }
    return myObj;
};

let obj = { weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true };

console.log(solve(obj));