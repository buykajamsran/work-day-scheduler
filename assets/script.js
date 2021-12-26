$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

$(".saveBtn").click(function() {
    eventText = $(this).siblings(".input").val();
    console.log(eventText);
    eventTime = $(this).siblings(".hour").text();
    console.log(eventTime);
    localStorage.setItem(eventTime, JSON.stringify(eventText));
});

  $(".deleteBtn").click(function() {
        eventText = $(this).siblings(".input").val("");
        eventText = $(this).siblings(".input").val();
        eventTime = $(this).siblings(".hour").text();
        localStorage.setItem(eventTime, JSON.stringify(eventText));
});