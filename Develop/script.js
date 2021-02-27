var today = moment()
//code to show todays date
var todayDate = today.format("dddd, MMMM Do");
$("#currentDay").text(todayDate);

var saveBtn = document.querySelectorAll(".saveBtn"); //added All
var scheduleText = document.querySelector(".entryText");
var local_storage_text = "event";
var timeBlocks = document.querySelectorAll(".time-block");
var times = document.getElementsByTagName("time");


//code to pull in calendar inputs from local storage
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));


var saveBtn = document.querySelectorAll(".saveBtn"); 
//for loop to run through each of the save buttons and then add values to local storage  
for (i of saveBtn) {
    i.addEventListener('click', function() {
      var calendarText = $(this).siblings(".description").val();
      var block = $(this).parent().attr("id");
    localStorage.setItem(block, calendarText);
    });    
  };
//function to check the current time and then compare to the time blocks
function checkTime () {

    var currentTime = moment().hour();
    console.log(currentTime);

    $(".time-block").each(function() {

        var thisTimeBlock = parseInt($(this).attr("id").split("-")[1]);

        if(thisTimeBlock < currentTime) {
            $(this).children().addClass("past");
        } else if (thisTimeBlock === currentTime) {
            $(this).children().addClass("present");
        } else {
            $(this).children().addClass("future")
        }
    })
}
  
//calling checkTime function 
checkTime();
