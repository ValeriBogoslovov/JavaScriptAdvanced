/**
 * Created by Valeri on 7/6/2017.
 */
function solve(obj){

    let myExtensibleObject = {
        __proto__:{},
        extend: function (template) {
            for (let key in template) {
                if(template.hasOwnProperty(key)){
                    let element = template[key];
                    if(typeof element === 'function'){
                        myExtensibleObject.__proto__[key] = element;
                    }else{
                        myExtensibleObject[key] = element;
                    }
                }
            }
        }
    };
    myExtensibleObject.extend(obj);
    return myExtensibleObject;
};
let obj = {template: {
    extensionMethod: function (){console.log('yes')},
    extensionProperty: 'someString'}};
console.log(solve(obj));