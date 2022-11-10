const defaultNumber = 0;
const defaultTotal = "";
let numberShown;
let totalEquation;
let operandClicked;
let fullMath = [];
let resultGet;

const operand = /[+-/*]/;
const numberAllowed = /[1234567890]/;

$(document).ready(function () {
  numberShown = defaultNumber;
  totalEquation = defaultTotal;
  operandClicked = false;
});

// Inputting number via Keyboard - 0.2 Update
$(".calcNumberArea").click(function () {
  alert("Switch to Keyboard Input");
});

// Inputting number via Button
$("button").click(function () {
  let userClick = $(this).val();

  // User click the operand
  if (userClick.match(operand)) {
    // prevent adding more operand when it's already clicked
    if (operandClicked == false) {
      totalEquation += numberShown + userClick;
      operandClicked = true;
    } else {
      totalEquation = totalEquation.slice(0, totalEquation.length - 1);
      totalEquation += userClick;
    }

    // User choose square
  } else if (userClick == "square") {
    numberShown += "*" + numberShown;

    // User choose delete
  } else if (userClick == "delete") {
    if (numberShown.length <= 1) {
      numberShown = defaultNumber;
    } else {
      numberShown = numberShown.slice(0, numberShown.length - 1);
    }

    // User choose to clear
  } else if (userClick == "CE" || userClick == "C") {
    if (userClick == "CE") {
      numberShown = defaultNumber;
    } else if (userClick == "C") {
      totalEquation = defaultTotal;
      numberShown = defaultNumber;
      fullMath = [];
    }

    // User wanted Result
  } else if (userClick == "=") {
    if (operandClicked == false) {
      fullMath.push(totalEquation + numberShown);
      numberShown = calculate(fullMath);
      totalEquation = defaultTotal;
      fullMath = [];
      resultGet = true;
    }

    // User inputting Number
  } else {
    numberShown == 0 || operandClicked == true || resultGet == true
      ? (numberShown = userClick)
      : (numberShown = numberShown + userClick);
    operandClicked = false;
    resultGet = false;
  }

  $("#calcTotalEquation").text(totalEquation);
  $("#calcNumber").text(numberShown);
});

// Function to convert array to string to result
function calculate(arrayForm) {
  // Turn array into string
  let stringForm = arrayForm.toString();
  // Calculate the string?
  return Function("return " + stringForm)();
}
