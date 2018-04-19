/**
 * Created by Valeri on 7/17/2017.
 */
function createTickets(arr, order) {
    let tickets = [];

    for (let obj of arr) {
        let ticketTokens = obj.split('|');
        let ticket = {destination: ticketTokens[0],price: Number(ticketTokens[1]),status: ticketTokens[2]};
        tickets.push(ticket);
    }

    return tickets.sort(compare);

    function compare(a,b) {
        if(a[order] < b[order]){
            return -1;
        }else if(a[order] > b[order]){
            return 1;
        }
        return 0;
    }
}

console.log(createTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));