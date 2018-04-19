/**
 * Created by Valeri on 7/3/2017.
 */
function calendar(dateArr) {
    let day = dateArr[0];
    let month = dateArr[1] - 1;
    let year = dateArr[2];
    let givenDate = new Date(year,month, day);
    let currentDate = 1;

    let daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat','Sun'];
    let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let daysInMonth = daysCount(month+1, year);

    let container = $('#content');

    let caption = $('<caption>');
    caption.text(`${monthNames[givenDate.getMonth()]} ${givenDate.getFullYear()}`);

    let calendarTable = $('<table>');
    calendarTable.append(caption);

    let calendarBody = $('<tbody>');
    let rowHeading = $('<tr>');

    for (let d of daysOfWeek) {
        rowHeading.append($(`<th>${d}</th>`));
    }
    calendarBody.append(rowHeading);

    let date = new Date(year, month, 1-1);
    let dayOfPreviousWeek = date.getDay();
    let weekRows = Math.ceil((daysInMonth + dayOfPreviousWeek) / 7);

    for (let i = 0; i < weekRows; i++) {
        let dateRows = $('<tr>');

        for (let j = 0; j < 7; j++) {
            let currentCell = $('<td>');
            if(dayOfPreviousWeek > 0){
                currentCell.text('');
                dayOfPreviousWeek--;
            }else {
                if(currentDate <= daysInMonth){
                    currentCell.text(currentDate);
                    if(currentDate == day){
                        currentCell.addClass('today');
                    }
                    currentDate++;
                }else {
                    currentCell.text('');
                }

            }
            dateRows.append(currentCell);
        }
        calendarBody.append(dateRows);

    }

    calendarTable.append(calendarBody);
    container.append(calendarTable);

    function daysCount(month,year) {
        return new Date(year, month, 0).getDate();
    }
}