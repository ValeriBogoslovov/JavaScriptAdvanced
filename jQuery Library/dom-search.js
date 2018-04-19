/**
 * Created by Valeri on 6/30/2017.
 */
function domSearch(selector, isCaseSensitive) {
    let divContainer = $(selector);
    let divAdd = $('<div>').addClass('add-controls');
    let labelAdd = $('<label>');
    labelAdd.text('Enter text:');
    labelAdd.append($('<input>'));
    let addBtn = $('<a>').addClass('button');
    addBtn.text('Add');
    divAdd.append(labelAdd,addBtn);
    divContainer.append(divAdd);

    let divSearch = $('<div>').addClass('search-controls');
    let searchLabel = $('<label>');
    searchLabel.text('Search');
    searchLabel.append('<input>');
    divSearch.append(searchLabel);
    divContainer.append(divSearch);

    let addText = $('div.add-controls .button');
    addText.click(addItem);

    let searchText = $('.search-controls input');

    searchText.on('change paste keyup',function () {
        let searchedWord = $('div.search-controls input').val();
        let listCollection = $('li strong');
        searchedWord = isCaseSensitive ? searchedWord : searchedWord.toLowerCase();
        listCollection.each(function (i, element) {
            if($(element).text().includes(searchedWord)){
                $(element).parent().css('display', 'block');
            }else{
                $(element).parent().css('display', 'none');
            }
        })
    });

    function addItem() {
        let divResult = $('<div>').addClass('result-controls');
        let listContainer = $('<ul>').addClass('items-list');
        let listItem = $('<li>').addClass('list-item');
        let buttonX = $('<a>').addClass('button');
        let strong = $('<strong>');
        buttonX.text('X');
        buttonX.click(removeItem);

        let textInput = $('div.add-controls input');
        divContainer.append(divResult.append(listContainer.append(listItem.append(buttonX, strong))));
        strong.text(textInput.val());
        textInput.val('');
    }

    
    function removeItem() {
        let currentElement = event.target;
        $(currentElement).parent().remove();
    }
}