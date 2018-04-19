/**
 * Created by Valeri on 6/26/2017.
 */
function attachEventsListeners() {
    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    let inputElements = document.querySelectorAll('input[type="text"]');

    daysBtn.addEventListener('click', convert);
    hoursBtn.addEventListener('click', convert);
    minutesBtn.addEventListener('click', convert);
    secondsBtn.addEventListener('click', convert);

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    function convert() {
        for (let i = 0; i < 1; i++) {
            days = Number(inputElements[0].value);
            hours = Number(inputElements[1].value);
            minutes = Number(inputElements[2].value);
            seconds = Number(inputElements[3].value);
        }

        if(days != 0){
            inputElements[1].value = days * 24;
            inputElements[2].value = days *1440;
            inputElements[3].value = days *86400;
        }if(hours != 0){
            inputElements[0].value = hours / 24;
            inputElements[2].value = hours * 60;
            inputElements[3].value = hours * 60 * 60;
        }if(minutes != 0){
            inputElements[0].value = minutes / 60 / 24;
            inputElements[1].value = minutes / 60;
            inputElements[3].value = minutes * 60;
        }if(seconds != 0){
            inputElements[0].value = (seconds / 60 / 60) / 24;
            inputElements[1].value = seconds / 60 / 60;
            inputElements[2].value = seconds / 60;
        }
    }
}