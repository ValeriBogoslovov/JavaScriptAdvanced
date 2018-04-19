/**
 * Created by Valeri on 7/6/2017.
 */
function carFactory(obj) {
    let engines = [{power:90,volume:1800}, {power:120, volume:2400}, {power:200, volume:3500}];

    let myOffer = {
        model: obj.model,
        engine: {},
        carriage:{
            type: obj.carriage,
            color: obj.color
        },
        wheels:[]
    };

    if(obj.power <= 105){
        myOffer.engine = engines[0];
    }else if(obj.power > 105 &&obj.power <= 160){
        myOffer.engine = engines[1];
    }else{
        myOffer.engine = engines[2];
    }

    if(obj.wheelsize % 2 === 0){
        let wheelSize = Math.floor(obj.wheelsize - 1);
        Array.prototype.push.apply(myOffer.wheels, [wheelSize,wheelSize,wheelSize,wheelSize]);
    }else{
        let wheelSize = obj.wheelsize;
        Array.prototype.push.apply(myOffer.wheels, [wheelSize,wheelSize,wheelSize,wheelSize]);
    }

    return myOffer;
}
console.log(carFactory({
        model: 'Ferrari',
        power: 200,
        color: 'red',
        carriage: 'coupe',
        wheelsize: 21
    }
));