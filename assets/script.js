// Current date is displayed
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

$(document).ready( function() {
    timeblockColor ();
});
// Timeblock color change funtion
function timeblockColor () {

    var currentHour = moment().hours();
    console.log(currentHour);

    $(".input").each(function() {
        var hours = parseInt($(this).attr("id"));
        console.log(hours);

        if (currentHour > hours) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (currentHour < hours) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
        else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
}
// Save button funtion
$(".saveBtn").click(function() {
    eventText = $(this).siblings(".input").val();
    console.log(eventText);
    eventTime = $(this).siblings(".hour").text();
    console.log(eventTime);
    localStorage.setItem(eventTime, JSON.stringify(eventText));
});
// Delete button funtion
  $(".deleteBtn").click(function() {
        eventText = $(this).siblings(".input").val("");
        eventText = $(this).siblings(".input").val();
        eventTime = $(this).siblings(".hour").text();
        localStorage.setItem(eventTime, JSON.stringify(eventText));
});