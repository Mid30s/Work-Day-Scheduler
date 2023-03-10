// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


//wrap all code until the browser has finished rendering
$(document).ready(function(){
  //use day.js to show time and date
  function displayTime() {
    var today = dayjs();
    $('#currentDay').text(today.format('dddd,D MMM YYYY [at] h:mm:ss A'));
  }
  displayTime();
  setInterval(displayTime,1000);

  //add a listener for click events
  $(".saveBtn"). on('click',function(){
    // jQuery traversing to select html elements
    var time = $(this).parent().attr('id');
    var text = $(this).siblings('.description').val().trim();

    //test - click save button
    console.log(time,text);

    //save in localStorage
    localStorage.setItem(time,text);
  });

  //choose color class
  function timeBlockColor() {
    var currentHour = dayjs().hour();
    //test currentHour shows in 24 hours time
    console.log(currentHour); 
  
    $('.time-block').each(function(){
      //get hour number value from time-block
      var blockHour = $(this).attr('id').split("-")[1];
      //test to show time block hours number in 24-hours time
      console.log(blockHour);
      
      //choose class to apply color
      if(blockHour < currentHour) {
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this). addClass('past');
      }
      else if(blockHour == currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      else{
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  timeBlockColor();
  // check the color class every 30 seconds, so it will auto refresh every 30s when browser is open
  setInterval(timeBlockColor,30000);
  
  //display all text in description
  //test
  console.log(localStorage.getItem("hour-9"));

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
})


