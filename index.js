var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");

var operand1 = null;
var operand2 = null;
var operator = null;
var res = null;
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");

    if (value == "+") {
      operator = "+";
      operand1 = parseFloat(display.innerText);
      display.innerText = null;
    } else if (value == "-") {
      operator = "-";
      operand1 = parseFloat(display.innerText);
      display.innerText = null;
    } else if (value == "*") {
      operator = "*";
      operand1 = parseFloat(display.innerText);
      display.innerText = null;
    } else if (value == "/") {
      operator = "/";
      operand1 = parseFloat(display.innerText);
      display.innerText = null;
    } else if (value == "%") {
      operator = "%";
      operand1 = parseFloat(display.innerText);
      display.innerText = null;
    } else if (value == "AC") {
      display.innerText = null;
      operand1 = null;
      operand2 = null;
      operator = null;
    } else if (value == "+/-") {
      if (
        display.innerText == "9" ||
        display.innerText == "8" ||
        display.innerText == "7" ||
        display.innerText == "6" ||
        display.innerText == "5" ||
        display.innerText == "4" ||
        display.innerText == "3" ||
        display.innerText == "2" ||
        display.innerText == "1" ||
        display.innerText == "0"
      ) {
        display.innerText = "-" + display.innerText;
      } else {
        display.innerText = "ERROR";
      }
    } else if (value == ".") {
      display.innerText += ".";
    } else if (value == "=") {
      operand2 = parseFloat(display.innerText);
      if (operator == "+") {
        res = eval("operand1 + operand2");
      } else if (operator == "-") {
        res = eval("operand1 - operand2");
      } else if (operator == "*") {
        res = eval("operand1 * operand2");
      } else if (operator == "/") {
        if (operand2 == 0) {
          res = "ERROR";
        } else {
          res = eval("operand1 / operand2");
        }
      } else if (operator == "%") {
        if (operand2 == 0) {
          res = "ERROR";
        } else {
          res = eval("operand1 % operand2");
        }
      }
      display.innerText = res;
    } else {
      display.innerText += value;
    }
  });
}
