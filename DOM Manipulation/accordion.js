/**
 * Created by Valeri on 6/26/2017.
 */
function toggle() {
    let btn = document.getElementsByClassName('button')[0];
    let text = document.getElementById('extra');

    if(text.style.display === 'none'){
        text.style.display = 'block';
        btn.innerHTML = "Less"
    }else {
        text.style.display = 'none';
        btn.innerHTML = "More";
    }
}