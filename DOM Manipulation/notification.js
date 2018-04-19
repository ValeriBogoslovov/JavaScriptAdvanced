/**
 * Created by Valeri on 6/26/2017.
 */
function notify(message) {
    let notify = document.getElementById('notification');
    notify.innerHTML = message;
    notify.style.display = 'block';
    setTimeout(function () {
        notify.style.display = 'none';
    },2000);
}