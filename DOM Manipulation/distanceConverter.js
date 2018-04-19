/**
 * Created by Valeri on 6/27/2017.
 */
function attachEventsListeners() {
    let btn = document.getElementById('convert');
    btn.addEventListener('click', convert);

    function convert() {
        let inputUnitInMeters = 0;
        let inputNumber = Number(document.getElementById('inputDistance').value);
        switch(document.getElementById('inputUnits').selectedIndex){
            case 0: inputUnitInMeters = inputNumber * 1000;break;
            case 1: inputUnitInMeters = inputNumber;break;
            case 2: inputUnitInMeters = inputNumber / 100;break;
            case 3: inputUnitInMeters = inputNumber / 1000;break;
            case 4: inputUnitInMeters = inputNumber * 1609.34;break;
            case 5: inputUnitInMeters = inputNumber * 0.9144;break;
            case 6: inputUnitInMeters = inputNumber * 0.3048;break;
            case 7: inputUnitInMeters = inputNumber * 0.0254;break;
        }
        let outputUnits = 0;
        let output = document.getElementById('outputDistance');
        switch(document.getElementById('outputUnits').selectedIndex){
            case 0: outputUnits = inputUnitInMeters / 1000;break;
            case 1: outputUnits = inputUnitInMeters / 1;break;
            case 2: outputUnits = inputUnitInMeters * 100;break;
            case 3: outputUnits = inputUnitInMeters * 1000;break;
            case 4: outputUnits = inputUnitInMeters * 0.000621371;break;
            case 5: outputUnits = inputUnitInMeters * 1.09361;break;
            case 6: outputUnits = inputUnitInMeters * 3.28084;break;
            case 7: outputUnits = inputUnitInMeters * 39.3701;break;
            default: break;
        }
        output.value = outputUnits;
    }
}