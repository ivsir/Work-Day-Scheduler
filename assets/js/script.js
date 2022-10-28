$(document).ready(function () {
  var currentDayEl = $("#currentDay");
  var time = $(".hour");
  var timeValue = $(".time-value")
  var timeBlock = $(".time-block");
  
  // get current day and display it
  var today = moment().format("dddd, MMMM  Do");
  currentDayEl.text(today);

  // get current hour 
  var currentHour = moment().format("H");
  // color each code block based on the current hour
  console.log(currentHour);

  timeBlock.children('textarea').addClass('past');
  
  timeBlock.children('textarea').addClass('future');
  
  

  if (currentHour === timeValue) {
   timeBlock.children('textarea').addClass('present');
  }

  //if current time .present is applied
  //if time has passed .past is applied
  //if time has not come yet .future is applied

  // when user clicks save btn of code block, 
  // the text in that code block is saved to the local storage
});

