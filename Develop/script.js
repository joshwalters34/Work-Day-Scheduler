var today = moment()

var todayDate = today.format("dddd, MMMM Do");
$("#currentDay").text(todayDate);

var saveBtn = document.querySelectorAll(".saveBtn"); //added All
var scheduleText = document.querySelector(".entryText");
var local_storage_text = "event";
var timeBlocks = document.querySelectorAll(".time-block");
var times = document.getElementsByTagName("time");


// function renderEvents() {
//     var calendarEvent = JSON.parse(localStorage.getItem("event"));
//     scheduleText.textContent = calendarEvent;
//     return;
// }

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));



//create array for calendar inputs
// function storeEvents() {
   // var calendarText = scheduleText.value.trim();
 
// }
var saveBtn = document.querySelector(".saveBtn"); //added All 
// saveBtn[0].addEventListener("click", function() { //added [0]
    // saveBtn.forEach((btn) => {
saveBtn.addEventListener("click", function() { //added [0]
    
   // event.preventDefault();
    // var calendarText = scheduleText.value.trim();
    // calenderInputs.push(calendarText);
    //   console.log(calenderInputs);
     // storeEvents();  
     // renderEvents();

     var calendarText = $(this).siblings(".description").val();
     var block = $(this).parent().attr("id");
     localStorage.setItem(block, calendarText);

     
  });
// });


  //to pull in stored events
//   function init(){
    //   var calendarEvent = JSON.parse(localStorage.getItem("event"));
    // scheduleText.innerHTML = calendarEvent;
     // renderEvents();
//   }

  //set the background color of each time slot
//   var currentTime = today.format("h a");
//   console.log(currentTime);

function checkTime () {

    var currentTime = moment().hour();
    console.log(currentTime);

    $(".time-block").each(function() {

        var thisTimeBlock = parseInt($(this).attr("id").split("-")[1]);

        if(thisTimeBlock < currentTime) {
          // $(this).parent().addClass("past");
            $(this).children().addClass("past");
        } else if (thisTimeBlock === currentTime) {
            //$(this).parent().addClass("present");
            $(this).children().addClass("present");
        } else {
           // $(this).parent().addClass("future")
            $(this).children().addClass("future")
        }
    })

    // for (var i = 0; i < 9; i++) {
    //     moment("h a").isAfter (times[i]) 
    //         document.getElementsByClassName("timeSlot").style.backgroundColor = "#d3d3d3";
    //         alert("Past time");
        
    // }
}
  
//   init();
    // console.log(times);
checkTime();
