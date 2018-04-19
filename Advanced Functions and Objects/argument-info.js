/**
 * Created by Valeri on 7/3/2017.
 */
function argumentInfo() {
    let summary = {};

    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;
        console.log(`${type}: ${obj}`);
        
        if(!summary[type]){
            summary[type] = 1;
        }else {
            summary[type]++;
        }
    }
    let sortedSummary = [];

    for (let currentType in summary) {
        sortedSummary.push([currentType, summary[currentType]]);
    }
    
    sortedSummary.sort(function (a, b) {
        if(a[1] > b[1]){
            return -1;
        }else if(a[1] < b[1]){
            return 1;
        }else {
            return 0;
        }
    });
    
    sortedSummary.forEach((a) => console.log(`${a[0]} = ${a[1]}`));
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); },('cat', 42, function () { console.log('Hello world!'); }));