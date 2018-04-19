/**
 * Created by Valeri on 6/27/2017.
 */
function timer() {
    let hours = $('#hours');
    let minutes = $('#minutes');
    let seconds = $('#seconds');

    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');

    startBtn.one('click', start);

    let countSecs = 0;
    let countMins = 0;
    let countHours = 0;

    function add() {
        countSecs++;
        if (countSecs >= 60) {
            countSecs = 0;
            countMins++;
            if (countMins >= 60) {
                countMins = 0;
                countHours++;
            }
        }

        seconds.text(countSecs < 10 ? `0${countSecs}` : countSecs);
        minutes.text(countMins < 10 ? `0${countMins}` : countMins);
        hours.text(countHours < 10 ? `0${countHours}` : countHours);
    }

    let time;

    function start() {
        stopBtn.one('click', stop);
        time = setInterval(add, 1000);
    }

    function stop() {
        clearInterval(time);
        startBtn.one('click', start);
        console.log(time);
    }
}