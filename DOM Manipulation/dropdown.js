/**
 * Created by Valeri on 6/26/2017.
 */
function addItem() {
    let textItem = document.getElementById("newItemText").value;
    let valueItem = document.getElementById("newItemValue").value;

    let optionItem = document.createElement('option');
    optionItem.value = valueItem;
    optionItem.innerHTML = textItem;
    document.getElementById('menu').appendChild(optionItem);

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';

}