/**
 * Created by Valeri on 6/26/2017.
 */
function create(sentences) {

    let mainDiv = document.getElementById('content');

    for (let i = 0; i < sentences.length; i++) {
        let newDivs = document.createElement('div');
        let newParagraph = document.createElement('p');
        newParagraph.innerHTML = sentences[i];
        newDivs.appendChild(newParagraph);
        newParagraph.style.display = 'none';
        newDivs.addEventListener('click', function () {
            newParagraph.style.display = 'block';
        });
        mainDiv.appendChild(newDivs);
    }
}