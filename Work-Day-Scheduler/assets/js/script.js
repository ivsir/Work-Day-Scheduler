$(document).ready(function () {
  var currentDayEl = $("#currentDay");
  var timeValue = $(".data-number");
  var timeBlock = $(".time-block");
  
  // get current day and display it
  var today = moment().format("dddd, MMMM  Do");
  currentDayEl.text(today);

  // get current hour 
  var currentHour = moment().format("HH");
  // color each code block based on the current hour
  console.log(currentHour);

  var pastClass = timeBlock.children('textarea').addClass('past');
  
  var pastClass = timeBlock.children('textarea').addClass('future');
  
  
console.log(timeValue);
  if (currentHour == timeValue) {
    var pastClass = timeBlock.children('textarea').addClass('present');
  }

  //if current time .present is applied
  //if time has passed .past is applied
  //if time has not come yet .future is applied

  // when user clicks save btn of code block, 
  // the text in that code block is saved to the local storage
});

