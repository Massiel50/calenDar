// 3 things

// display time and date
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

// input for time slot
// containers/ rows with text area for each hour of the day





// click save button to save textInput to local storage 
$(".saveBtn").on("click", function(event) {
  event.preventDefault();
  //  save button saves input to local storage
  var textInput = $("#textarea").val().trim();
  // set to local storage
  localStorage.setItem(".hour", textInput);
});
// get local storage when page is refreshed

// get hour from current time usig moemnt and compare to rows
// compare present time for color coded pas present and future


