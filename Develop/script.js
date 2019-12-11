// 3 things

// display time and date
// $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
function update() {
  $('#currentDay').html(moment().format("MMMM Do YYYY, h:mm:ss a"));
}
setInterval(update, 1000);

// input for time slot
// containers/ rows with text area for each hour of the day

// get local storage when page is refreshed with function
renderLastUse();

function renderLastUse() {
    var textInput = localStorage.getItem("textInput");
    console.log(textInput);
    // If they are null, return early from this function
    if(textInput === null){
      return;
    }
    // Else set the text of the textarea
    else{
      $("#textarea").val(textInput)
     console.log(textInput)
    }
}


// click save button to set textInput to local storage 
$(".saveBtn").on("click", function(event) {
  event.preventDefault();

  //  save button saves input to local storage
  var textInput = $("#textarea").val().trim();
  // set to local storage
  localStorage.setItem("textInput", textInput);

  renderLastUse();
});


// get hour from current time usig moemnt and compare to rows
// compare present time for color coded pas present and future

// playing with moment moethod to refresh page


