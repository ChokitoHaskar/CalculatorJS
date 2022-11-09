const defaultNumber = 0;
const defaultOperand = "";
let numberShown;
let totalEquation;
let operandClicked;
let fullMath = [];

const operand = /[+-/*]/;
const numberAllowed = /[1234567890]/;

$(document).ready(function () {
  console.log("APP Started");
  numberShown = defaultNumber;
  totalEquation = defaultOperand;
  operandClicked = false;
});

// Inputting number via Keyboard
$(".calcNumberArea").click(function () {
  alert("Switch to Keyboard Input");
});

// Inputting number via Button
$("button").click(function () {
  let userClick = $(this).val();

  // User click the operand
  if (userClick.match(operand)) {
    if (operandClicked == false) {
      totalEquation += numberShown + userClick;
      operandClicked = true;
    } else {
      totalEquation = totalEquation.slice(0, totalEquation.length - 1);
      totalEquation += userClick;
    }

    // User choose to clear
  } else if (userClick == "CE" || userClick == "C") {
    if (userClick == "CE") {
      numberShown = defaultNumber;
    } else if (userClick == "C") {
      totalEquation = defaultOperand;
      numberShown = defaultNumber;
      fullMath = [];
    }

    // User wanted Result
  } else if (userClick == "=") {
    fullMath.push(totalEquation + numberShown);
    numberShown = calculate(fullMath);
    totalEquation = defaultOperand;
    fullMath = [];

    // User inputting Number
  } else {
    numberShown == 0 || operandClicked == true
      ? (numberShown = userClick)
      : (numberShown = numberShown + userClick);
    operandClicked = false;
  }

  $("#calcTotalEquation").text(totalEquation);
  $("#calcNumber").text(numberShown);
});

// Function to convert array to string to result
function calculate(arrayForm) {
  console.log("This is array form: ", arrayForm);
  let stringForm = arrayForm.toString();
  console.log("This is string form: ", stringForm);
  return Function("return " + stringForm)();
}
