function highlight(selector) {

    let deepestChildren = $(selector);
    let deepestElement;

    while (deepestChildren.length) {
        deepestChildren = deepestChildren.children();

        if(deepestChildren.length == 0){
            break;
        }else {
            deepestElement = deepestChildren[0];
        }
    }
    deepestElement = $(deepestElement);
    let firstElement = $(selector)[0];

    while (deepestElement && deepestElement !== firstElement) {
        $(deepestElement).addClass('highlight');
        deepestElement = $(deepestElement).parent()[0];
    }
    $(firstElement).addClass('highlight');
}