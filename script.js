// 3 things

function update() {
  // showing date and time, updated every sec
  $("#currentDay").html(moment().format("MMMM Do YYYY, h:mm:ss a"));
  //
  // var milTime = (moment().format("MMMM Do YYYY, HH:mm:ss"));
  // console.log(milTime);
  // var milTimeArray = milTime.split(" ");
  // console.log(milTimeArray);
  // var milHour = milTime[3].split(":");
  // console.log(milHour);
}
setInterval(update, 1000);

// input for time slot
// containers/ rows with text area for each hour of the day

// get local storage when page is refreshed with function
renderLastUse();

function renderLastUse() {
  // var textInput = localStorage.getItem("textInput");
  // console.log(textInput);
  // If they are null, return early from this function
  var str = localStorage.getItem("text9");
  if (str !== null) $("#9").val(str);
  var str = localStorage.getItem("text10");
  if (str !== null) $("#10").val(str);
  var str = localStorage.getItem("text11");
  if (str !== null) $("#11").val(str);
  var str = localStorage.getItem("text12");
  if (str !== null) $("#12").val(str);
  var str = localStorage.getItem("text1");
  if (str !== null) $("#1").val(str);
  var str = localStorage.getItem("text2");
  if (str !== null) $("#2").val(str);
  var str = localStorage.getItem("text3");
  if (str !== null) $("#3").val(str);
  var str = localStorage.getItem("text4");
  if (str !== null) $("#4").val(str);
  var str = localStorage.getItem("text5");
  if (str !== null) $("#5").val(str);
}

// click save button to set textInput to local storage
$(".saveBtn").on("click", function(event) {
  event.preventDefault();

  //  save button saves input to local storage
  // var textInput = $("#textarea").val().trim();
  // // set to local storage
  // localStorage.setItem("textInput", textInput);

  localStorage.setItem("text9", $("#9").val());
  localStorage.setItem("text10", $("#10").val());
  localStorage.setItem("text11", $("#11").val());
  localStorage.setItem("text12", $("#12").val());
  localStorage.setItem("text1", $("#1").val());
  localStorage.setItem("text2", $("#2").val());
  localStorage.setItem("text3", $("#3").val());
  localStorage.setItem("text4", $("#4").val());
  localStorage.setItem("text5", $("#5").val());

  renderLastUse();
});

$(".saveBtn").each(function(i, element) {
  var currentTime = moment().hour();
  var someTime = parseInt($(this).val());
  // var index = i + 9;

  if (currentTime > someTime) {
    $(".time-block" + i ).addClass("past");
  } else if (currentTime < someTime) {
    $(".time-block" + i ).addClass("future");
  } else {
    $(".time-block"+ i ).addClass("present");
  }
});

// get hour from current time using moment and compare to rows

// compare present time for color coded pas present and future
