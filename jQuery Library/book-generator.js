/**
 * Created by Valeri on 6/30/2017.
 */
function createBook(selector, title, author, number) {
    let bookGenerator = (function () {
        let bookId = 1;
        return function (selector, title, author, number) {

            let bookContainer = $('<div>');
            bookContainer.attr('id', `book${bookId}`);
            bookContainer.append($('<p>').addClass('title').text(`${title}`));
            bookContainer.append($('<p>').addClass('author').text(`${author}`));
            bookContainer.append($('<p>').addClass('isbn').text(number));
            let selectButton = $('<button>').text('Select');
            let deselectButton = $('<button>').text('Deselect');
            bookContainer.append(selectButton);
            bookContainer.append(deselectButton);
            selectButton.click(function () {
                bookContainer.css('border','2px solid blue');
            });
            deselectButton.click(function () {
                bookContainer.css('border', 'none');
            });
            $(`${selector}`).append(bookContainer);
            bookId++;
        }
    }());

    bookGenerator(selector, title, author, number);
}