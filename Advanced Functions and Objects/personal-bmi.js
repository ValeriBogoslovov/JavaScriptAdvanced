/**
 * Created by Valeri on 7/3/2017.
 */
function solve(name, age, weight, height) {
    let heightInMeters = height / 100;
    let bmi = Math.round(weight / (heightInMeters * heightInMeters));
    
    let status = '';
    let isObese = false;

        if(bmi < 18.5){
            status = 'underweight';
        }else if( bmi < 25){
            status = 'normal';
        }else if(bmi < 30){
            status = 'overweight';
        }else {
            status = 'obese';
            isObese = true;
        }

    let obj = {name: name, personalInfo:{
        age: age,
        weight: weight,
        height: height
    }, BMI: bmi, status: status};

    if(isObese){
        obj.recommendation = 'admission required';
    }
    return obj;
}
solve('Peter', 29, 75, 182);