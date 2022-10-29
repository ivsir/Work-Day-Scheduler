$(document).ready(function () {
  var currentDayEl = $("#currentDay");
  var time = $(".hour");
  var timeValue = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  var timeBlock = $(".time-block");
  

  // get current day and display it
  var today = moment().format("dddd, MMMM  Do");
  currentDayEl.text(today);

  // get current hour
  var currentHour = moment().hour();

  $(".description").each(function (i) {
    var text = localStorage.getItem(timeValue[i]);
    $(this).val(text);
    if (timeValue[i] == currentHour) {
      $(this).addClass("present");
    }
    if (timeValue[i] < currentHour) {
      $(this).addClass("past");
    }
    if (timeValue[i] > currentHour) {
      $(this).addClass("future");
    }
  });

  $(".saveBtn").on("click",function(i){
    var dataNumber = $(this).siblings(".hour").attr("data-number");
    var textBox = $(this).siblings(".description");
    localStorage.setItem(dataNumber,textBox.val());
  })

  console.log(timeValue);
});
